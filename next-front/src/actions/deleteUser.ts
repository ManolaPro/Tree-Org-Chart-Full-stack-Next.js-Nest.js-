'use server';

import { API } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteUser(id: number) {
    try {
        const res = await fetch(`${API.USER}/${id}`, {
            method: 'DELETE',
            headers: {
				'Content-type': 'application/json',
			}
        })
        if(!res.ok) {
            const json = await res.json()
            const message = json.message ? json.message : JSON.stringify(json)
            console.error('getAllUsers error:', message)
            throw new Error(message)
        }

    } catch (e) {
        console.error(e)
        throw e
    }
    revalidatePath('/');
    redirect('/');
}
