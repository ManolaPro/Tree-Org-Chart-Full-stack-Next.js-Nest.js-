'use server';
import { API } from '@/paths';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const createUserSchema = z.object({
    first: z.string().min(3, {message: 'Min length 3 characters'}),
    last: z.string().min(3, {message: 'Min length 3 characters'}),
    // managerId: z.number(),
  });

interface CreateUserFormState {
    errors: {
      first?: string[];
      last?: string[];
      _form?: string[];
    };
  }

export async function createUser(
    formState: CreateUserFormState,
    formData: FormData
): Promise<CreateUserFormState> {
    const result = createUserSchema.safeParse({
        first: formData.get('Firstname'),
        last: formData.get('LastName'),
        // managerId: formData.get('managerId')
      });
    
      if (!result.success) {
        return {
          errors: result.error.flatten().fieldErrors,
        };
      }
      try {
        const res = await fetch(API.USER, {
            method: 'POST',
            body: JSON.stringify({
                firstName: result.data.first,
                lastName: result.data.last,
                // managerId: result.data.managerId
            }),
            headers: {'Content-type': 'application/json'}
          })
    
          if (!res.ok) {
            const json = await res.json();
            const message = json?.message ? json?.message : JSON.stringify(json)
            console.error(`createUser error':${message}'`);
                return {
                    errors: {
                        _form: ['Something went wrong']
                    }
                };
          }
    
          const data = await res.json()
      } catch (e) {
        console.error(`e`);
        return {
            errors: {
                _form: ['Something went wrong']
            }
        };
      }

    // return {
    // errors: {}
    // }
    revalidatePath('/');
    redirect('/');
}