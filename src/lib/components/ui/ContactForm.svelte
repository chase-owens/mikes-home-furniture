<script lang="ts">
	import { PUBLIC_UPLOAD_URL_API, PUBLIC_CONTACT_API_URL } from '$env/static/public';
	type BudgetRange =
		| 'not-sure-yet'
		| 'under-250'
		| '250-500'
		| '500-1000'
		| '1000-2000'
		| '2000-plus';

	export type ProductInquiryFormData = {
		budget?: BudgetRange;
		categoryId?: string;
		roomId?: string;
		productId?: string;
		name: string;
		email?: string;
		phone?: string;
		photos?: File[];
		preferredContact: 'call' | 'email' | 'text';
		generalArea?: string;
		message?: string;
	};

	const { productId }: { productId?: string } = $props();

	let selectedFiles = $state<File[]>([]);

	let formData: ProductInquiryFormData = $state({
		budget: 'not-sure-yet',
		categoryId: '',
		roomId: '',
		productId: undefined,
		name: '',
		email: '',
		phone: '',
		photos: undefined,
		preferredContact: 'text',
		generalArea: '',
		message: ''
	});

	$effect(() => {
		formData.productId = productId;
	});

	const isPhoneRequired = $derived(
		formData.preferredContact === 'call' || formData.preferredContact === 'text'
	);

	const isEmailRequired = $derived(formData.preferredContact === 'email');

	let isSubmitting = $state(false);
	let submitError = $state('');
	let isSuccess = $state(false);

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		isSubmitting = true;
		submitError = '';
		isSuccess = false;

		const inquiryId = crypto.randomUUID();
		const imageKeys: string[] = [];

		try {
			if (selectedFiles.length) {
				for (const file of selectedFiles) {
					const uploadUrlResponse = await fetch(PUBLIC_UPLOAD_URL_API, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							inquiryId,
							fileName: file.name,
							contentType: file.type
						})
					});

					if (!uploadUrlResponse.ok) {
						throw new Error('Failed to create image upload URL');
					}

					const { uploadUrl, key } = await uploadUrlResponse.json();

					const uploadResponse = await fetch(uploadUrl, {
						method: 'PUT',
						headers: {
							'Content-Type': file.type
						},
						body: file
					});

					if (!uploadResponse.ok) {
						throw new Error('Failed to upload image');
					}

					imageKeys.push(key);
				}
			}

			const response = await fetch(PUBLIC_CONTACT_API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ ...formData, id: inquiryId, inquiryId, imageKeys })
			});

			if (!response.ok) {
				submitError = 'Failed to submit inquiry';
			}

			isSuccess = true;
		} catch (error) {
			submitError = 'Unable to submit your request. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}

	const isSpecificProductInquiry = $derived(!!formData.productId);
</script>

<form
	action="/api/inquiry"
	method="POST"
	onsubmit={handleSubmit}
	class="border-border bg-surface shadow-soft rounded-vintage flex flex-col gap-5 border p-6"
>
	{#if isSpecificProductInquiry}
		<input type="hidden" name="productId" value={productId} />
	{/if}

	<div class="flex flex-col gap-2">
		<label for="name" class="text-foreground text-sm font-medium"
			>Name <span class="text-highlight">*</span></label
		>
		<input
			id="name"
			name="name"
			required
			bind:value={formData.name}
			class="border-border bg-background text-foreground rounded-vintage focus:border-primary focus:ring-primary/20 border px-4 py-3 text-sm outline-none focus:ring-2"
		/>
	</div>

	<fieldset class="flex flex-col gap-2">
		<p class="text-foreground text-sm font-medium">Preferred Contact Method</p>

		<div class="grid grid-cols-3 gap-4">
			{#each ['text', 'call', 'email'] as method}
				<label
					class={`btn-option flex cursor-pointer items-center justify-center capitalize ${
						formData.preferredContact === method ? 'btn-primary' : 'btn-secondary'
					}`}
				>
					<input
						type="radio"
						name="preferredContact"
						value={method}
						bind:group={formData.preferredContact}
						class="sr-only"
					/>
					{method}
				</label>
			{/each}
		</div>
	</fieldset>

	<div class="grid gap-4 sm:grid-cols-2">
		<div class="flex flex-col gap-2">
			<label for="email" class="text-foreground text-sm font-medium"
				>Email
				{#if isEmailRequired}
					<span class="text-highlight">*</span>
				{/if}
			</label>
			<input
				id="email"
				name="email"
				type="email"
				required={isEmailRequired}
				bind:value={formData.email}
				class="border-border bg-background text-foreground rounded-vintage focus:border-primary focus:ring-primary/20 border px-4 py-3 text-sm outline-none focus:ring-2"
			/>
		</div>

		<div class="flex flex-col gap-2">
			<label for="phone" class="text-foreground text-sm font-medium"
				>Phone {#if isPhoneRequired}
					<span class="text-highlight">*</span>
				{/if}</label
			>
			<input
				id="phone"
				name="phone"
				type="tel"
				required={isPhoneRequired}
				bind:value={formData.phone}
				class="border-border bg-background text-foreground rounded-vintage focus:border-primary focus:ring-primary/20 border px-4 py-3 text-sm outline-none focus:ring-2"
			/>
		</div>
	</div>

	{#if !isSpecificProductInquiry}
		<div class="grid gap-4 sm:grid-cols-3">
			<div class="flex flex-col gap-2">
				<label for="categoryId" class="text-foreground text-sm font-medium"
					>Furniture Category</label
				>
				<select
					id="categoryId"
					name="categoryId"
					bind:value={formData.categoryId}
					class="border-border bg-background text-foreground rounded-vintage focus:border-primary focus:ring-primary/20 h-10 border px-4 text-sm outline-none focus:ring-2"
				>
					<option value="" disabled>Category </option>
					<option value="chairs">Chairs</option>
					<option value="tables">Tables</option>
					<option value="storage">Storage</option>
					<option value="lighting">Lighting</option>
					<option value="outdoor">Outdoor</option>
					<option value="decor">Decor</option>
					<option value="other">Other</option>
				</select>
			</div>

			<div class="flex flex-col gap-2">
				<label for="roomId" class="text-foreground text-sm font-medium">Room</label>
				<select
					id="roomId"
					name="roomId"
					bind:value={formData.roomId}
					class="border-border bg-background text-foreground rounded-vintage focus:border-primary focus:ring-primary/20 h-10 border px-4 text-sm outline-none focus:ring-2"
				>
					<option value="" disabled>Room </option>
					<option value="living-room">Living Room</option>
					<option value="dining-room">Dining Room</option>
					<option value="bedroom">Bedroom</option>
					<option value="office">Office</option>
					<option value="outdoor">Outdoor</option>
					<option value="other">Other</option>
				</select>
			</div>

			<div class="flex flex-col gap-2">
				<label for="budget" class="text-foreground text-sm font-medium">Budget</label>
				<select
					id="budget"
					name="budget"
					bind:value={formData.budget}
					class="border-border bg-background text-foreground rounded-vintage focus:border-primary focus:ring-primary/20 h-10 border px-4 text-sm outline-none focus:ring-2"
				>
					<option value="not-sure-yet" disabled>Not sure yet </option>
					<option value="under-250">Under $250 </option>
					<option value="$250-$500">$250 - $500</option>
					<option value="$$500-$1000">$$500 - $1000</option>
					<option value="$1000-$2000">$1000 - $2000</option>
					<option value="$2000-plus">$2000+</option>
				</select>
			</div>
		</div>
	{/if}

	<div class="flex flex-col gap-2">
		<label for="message" class="text-foreground text-sm font-medium">Tell us More</label>
		<textarea
			id="message"
			name="message"
			minlength="10"
			bind:value={formData.message}
			placeholder="Ask about availability, delivery, dimensions, or anything else."
			class="border-border bg-background text-foreground rounded-vintage focus:border-primary focus:ring-primary/20 min-h-32 resize-y border px-4 py-3 text-sm outline-none focus:ring-2"
		></textarea>
	</div>

	<div class="flex flex-col gap-2">
		<label for="images" class="text-foreground text-sm font-medium"> Reference Photos </label>

		<p class="text-muted text-xs">
			Upload photos of furniture, rooms, Pinterest inspiration, marketplace listings, or anything
			that helps us understand what you're looking for.
		</p>

		<input
			id="images"
			type="file"
			accept="image/jpeg,image/png,image/webp"
			multiple
			onchange={(e) => {
				selectedFiles = Array.from((e.currentTarget as HTMLInputElement).files ?? []);
			}}
			class="border-border bg-background rounded-vintage border px-4 py-3 text-sm"
		/>

		{#if selectedFiles.length}
			<ul class="text-muted text-xs">
				{#each selectedFiles as file}
					<li>{file.name}</li>
				{/each}
			</ul>
		{/if}
	</div>

	{#if submitError}
		<p class="text-sm text-red-700">{submitError}</p>
	{/if}

	{#if isSuccess}
		<p class="text-primary text-sm font-medium">
			We'll review your request and reach out with recommendations, availability, and sourcing
			options.
		</p>
	{/if}

	<button type="submit" disabled={isSubmitting} class="btn-base btn-primary">
		{isSubmitting ? 'Sending request...' : 'Send request'}
	</button>
</form>
