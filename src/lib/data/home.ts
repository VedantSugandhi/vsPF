import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Vedant';

export const lastName = 'Sugandhi';

export const description =
	'Innovative Software Engineer with 3+ years of experience developing scalable applications using Java, JavaScript, and cloud technologies, specializing in microservices architecture and performance optimization.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ 
		platform: Platform.GitHub, 
		link: 'https://github.com/VedantSugandhi' 
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/vedants9/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/vedant_sugandhi'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'vedantsugandhi95@gmail.com'
	},
	{
		platform: Platform.Leetcode,
		link: 'https://leetcode.com/u/vedantS95/'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/VedantSugandhi'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
