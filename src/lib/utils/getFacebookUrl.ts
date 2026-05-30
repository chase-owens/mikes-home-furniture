type Social = {
	name: string;
	url: string;
};

export const getFacebookUrl = (socials: Social[]): string | undefined => {
	return socials.find((social) => social.name === 'Facebook')?.url;
};
