'use server';

import { API } from "@/paths";

export async function getAllUsers() {
    try {
        const res = await fetch(API.USER, {
            headers: {
				'Content-type': 'application/json',
			}
        })
        if(!res.ok) {
            const json = await res.json()
            console.error('getAllUsers error', json)
        }
        const data = await res.json();
        return data;
    } catch (e) {
        console.error(e)
    }
}
