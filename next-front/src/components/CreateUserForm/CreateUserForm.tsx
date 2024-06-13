'use client';
import styles from './CreateUserForm.module.css';
import * as actions from '@/actions';
import { useFormState } from "react-dom";
import { Button } from '@/components//Button/Button';
import { Input } from '@/components/Input/Input';
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';

export default function CreateUserForm({}) {
    const [ formState, action ] = useFormState(actions.createUser, {
        errors: {}
    })
    return (
        <form className={styles.form} action={action}>
            <h2>Create new user</h2>
            <Input
                type='text'
                placeholder='First name'
                name='Firstname'
                error={!!formState.errors.first}
                errorMessage={formState.errors.first?.join(', ')}
            />
            <Input
                type='text'
                placeholder='Last name'
                name='LastName'
                error={!!formState.errors.last}
                errorMessage={formState.errors.last?.join(', ')}
            />
            {/* <Input type='search' placeholder='Manager' name='managerId'/> */}
            { formState.errors._form 
					? <ErrorMessage
						msg={formState.errors._form?.join(', ')}
						/>
					: null
				}
            <Button title='Add user'></Button>
        </form>
    )
}