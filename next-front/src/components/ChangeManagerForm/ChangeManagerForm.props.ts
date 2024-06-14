import { IUserCard } from "@/interface/user.interface";
import { IManagers } from "@/interface/userInfoAndManagers";

export interface ChangeManagerFormProps {
    id: number;
    first: string;
    last: string;
    managers: IManagers[]
}