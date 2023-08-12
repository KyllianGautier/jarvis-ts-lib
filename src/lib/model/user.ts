import { Gender } from '../enum/gender';

export interface User {
	id: string;

	email: string;

	firstName: string;
	lastName: string;
	gender: Gender;
	profileDescription: string;

	createdAt: Date;
}