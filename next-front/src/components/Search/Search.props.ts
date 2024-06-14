import { IManagers } from "@/interface/userInfoAndManagers";

export interface SearchProps {
    query: string;
    data: IManagers[];
    onSearchChange: (newQuery: string) => void;
    onItemClick: (id: number) => void;
}