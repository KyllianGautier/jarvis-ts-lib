import { Theme } from '../enum/theme';
import { Language } from '../enum/language';

export interface SubscriptionRequest {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	message: string;
	language: Language;
	theme: Theme;
	createdAt: Date;
}