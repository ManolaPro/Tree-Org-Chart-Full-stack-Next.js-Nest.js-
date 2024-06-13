export interface IUserCard {
    id: number;
    firstName: string;
    lastName: string;
    managerId: number | null;
    subordinates: IUserCard[] | []
}