import { RoleKey } from '../enum/role-key';

export interface Role {
	id: string;
	key: RoleKey;
	parentRole?: Role;
}