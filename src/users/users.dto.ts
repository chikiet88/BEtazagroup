export interface UsersDTO {
  id: string;
  SDT: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  profile: string;
  Ngaytao: Date;
  Role:string;
  Phanquyen:string;
  Menu:string;
}
export enum Role {
  Admin = 'admin',
  Manager = 'manager',
  User = 'user',
  Dev = 'dev',
}