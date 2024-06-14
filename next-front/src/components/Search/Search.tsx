'use client';
import styles from './Search.module.css';
import { ChangeEvent, useState } from "react";
import { Input } from "../Input/Input";
import { SearchProps } from './Search.props';
import { IManagers } from '@/interface/userInfoAndManagers';

export default function Search({
    query,
    data,
    onSearchChange,
    onItemClick
}: SearchProps) {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value)
      };

    const handleItemClick = (item: IManagers) => {
        onSearchChange(item.name) 
        onItemClick(item.id)
    };

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

    return (<div className={styles.wrapper}>
        <Input type='search'
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
        />
        <ul className={styles.list}>
            {filteredData.map((i) => (
            <li key={i.id} 
                onClick={() => handleItemClick(i)}>
                    {i.name}
            </li>
            ))}
        </ul>
    </div>
    )
}