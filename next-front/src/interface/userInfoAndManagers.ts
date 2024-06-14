import { IUserCard } from "./user.interface";

export interface IManagers {
    name: string;
    id: number;
}

export interface IUserInfoAndManagers {
    userInfo: IUserCard,
    managers: IManagers[]
}