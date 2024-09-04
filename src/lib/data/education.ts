import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Engineering in Computer Science',
		description: '',
		location: 'Indore, India',
		logo: Assets.Unknown,
		name: '',
		organization: 'Chameli Devi Group of Institutions',
		period: { from: new Date(2016, 8, 16), to: new Date(2020, 6, 11) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Data Structure', 'DBMS', 'Artificial Intelligence', 'Data Science', 'Big Data', 'Operating Systems', 'Object Oriented Programming']
	},
	{
		degree: 'Master of Science in Computer Science',
		description: '',
		location: 'Denver, USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'University of Colorado Denver',
		period: { from: new Date(2022, 8, 16), to: new Date(2024, 5, 10) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Algorithms', 'Computer Vision', 'Cybersecurity Programming', 'Machine Learning','Advanced Computer Architecture']
	}
];

export const title = 'Education';
