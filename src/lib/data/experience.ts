import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'Software',
		company: 'Radical-AI',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2024, 7, 1), to: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'Software Engineer Intern',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Full Stack Development'
	},
	{
		slug: 'Machine Learning',
		company: 'Mercor',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Machine Learning',
		location: 'Remote',
		period: { from: new Date(2024, 7, 3), to: new Date(2024, 8, 29) },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Prompt Engineer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Large Language Model Training'
	},
	{
		slug: 'Cyber-Security',
		company: 'University of Colorado Denver',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.PartTime,
		type: 'Cyber Security',
		location: 'Denver, Colorado',
		period: { from: new Date(2023, 8, 21), to: new Date(2024, 5, 10) },
		skills: getSkills('css', 'html', 'js'),
		name: 'Information Technology Security Officer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Oracle Identity Manager'
	},
	{
		slug: 'Software',
		company: 'Xactly Corp.',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Denver, Colorado',
		period: { from: new Date(2023, 6, 5), to: new Date(2023, 8, 18) },
		skills: getSkills('ts', 'js'),
		name: 'Software Engineer Intern',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Full Stack Development'
	},
	{
		slug: 'Teaching',
		company: 'University of Colorado Denver',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Contract,
		type: 'Academic',
		location: 'Denver, Colorado',
		period: { from: new Date(2023, 1, 2), to: new Date(2023, 5, 27) },
		skills: getSkills('ts', 'js'),
		name: 'Associate Instructor',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Teaching Assitant for Web-API(CSCI-3916)'
	},
	{
		slug: 'Software',
		company: 'Cognizant',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.FullTime,
		type: 'Software Development, Data Engineering',
		location: 'Chennai, India',
		period: { from: new Date(2020, 12, 23), to: new Date(2022, 8, 5) },
		skills: getSkills('ts', 'js'),
		name: 'Programmer Analyst (Full Stack Engineer)',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Full Stack Development'
	},
	{
		slug: 'Software',
		company: 'Radiance Overseas',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Indore, India',
		period: { from: new Date(2019, 8, 19), to: new Date(2020, 11, 27) },
		skills: getSkills('ts', 'js'),
		name: 'Full Stack Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Full Stack Development'
	},
	{
		slug: 'Database',
		company: 'Zensar Technologies',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Indore, India',
		period: { from: new Date(2019, 1, 2), to: new Date(2020, 6, 28) },
		skills: getSkills('ts', 'js'),
		name: 'MySQL Intern',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Database Developer'
	}
];

export const title = 'Experience';
