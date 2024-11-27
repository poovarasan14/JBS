import { atom } from "nanostores";

 type AuthenticationType = {
  userId: string,
  accessToken: string
  roleName: string,
  firstName: string,
  lastName: string,
  email: string,
  mobile: string,
} | null;

export const authStore = atom<AuthenticationType>(null);

