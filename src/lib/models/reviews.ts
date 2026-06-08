export type Review = {
	id: string;
	name: string;
	rating: number;
	date: string;
	text: string;
	featured?: boolean;
	tags?: string[];
};
