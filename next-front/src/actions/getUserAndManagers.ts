'use server';

import { API } from "@/paths";
import { notFound } from "next/navigation";

export async function getUserInfoAndManagers(id: number) {
    try {
        const res = await fetch(`${API.USER}/${id}`, {
            next: { revalidate: 0 },
            headers: {
				'Content-type': 'application/json',
			}
        })
        const json = await res.json()
        if(!res.ok) {
            const message = json.message ? json.message : JSON.stringify(json)
            console.error('getUserInfoAndManagers error:', message)
            if (res.status === 404) {
                notFound()
            }
            throw new Error(message)
        }
        return json;
    } catch (e) {
        console.error(e)
        throw e
    }
}
