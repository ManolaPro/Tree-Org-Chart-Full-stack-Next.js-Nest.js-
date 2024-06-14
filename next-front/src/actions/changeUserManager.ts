'use server';

import { API } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function changeUserManager(id: number, managerId: number) {
    try {
        const res = await fetch(`${API.USER}/${id}`, {
            method: 'PATCH',
            headers: {
				'Content-type': 'application/json',
			},
            body: JSON.stringify({managerId})
        })
        const json = await res.json()
        if(!res.ok) {
            const message = json.message ? json.message : JSON.stringify(json)
            console.error('changeUserManager error:', message)
            throw new Error(message)
        }
    } catch (e) {
        console.error(e)
        throw e
    }

    revalidatePath('/');
    redirect('/');
}
