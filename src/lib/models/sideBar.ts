type Cta = {
	label: string;
	href: string;
};

type FeaturedCta = {
	title: string;
	description: string;
	href: string;
	subtitle?: string;
};

export type Sidebar = {
	ctas: Cta[];
	featuredCta: FeaturedCta;
};
