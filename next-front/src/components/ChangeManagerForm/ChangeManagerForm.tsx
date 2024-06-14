'use client';
import { changeUserManager } from "@/actions";
import { Button } from "../Button/Button";
import { ChangeManagerFormProps } from "./ChangeManagerForm.props";
import Search from "../Search/Search";
import { useState } from "react";

export default function ChangeManagerForm({ id, first, last, managers }: ChangeManagerFormProps) {
    const [query, setQuery] = useState<string>('');
    const [managerId, setManagerId] = useState<number>(0)

    const approveUserManager = changeUserManager.bind(null, id, managerId)

    const handleSearchChange = (newQuery: string) => {
        setQuery(newQuery)
        if(managerId) {
            setManagerId(0)
        }
    }
    const handleItemClick = (id: number) => {
        setManagerId(id)
    }
    return (
        <form action={approveUserManager}>
            <h3>{`Assign manager for ${first} ${last}`}</h3>
            <Search
                query={query}
                data={managers}
                onSearchChange={handleSearchChange}
                onItemClick={handleItemClick}
            />
            <Button 
                title='Change manager'
                disabled={!managerId}
            />
        </form>
    )
}