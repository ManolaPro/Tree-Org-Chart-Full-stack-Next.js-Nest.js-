'use client';
import cn from 'classnames';
import styles from './DropDown.module.css';
import { DropDownProps } from "./DropDown.props";
import { useRouter } from 'next/navigation';

export const DropDown = ({ id, isVisible}: DropDownProps) => {
    const router = useRouter()
    const deleteUser = () => {
        console.log(`Delete user with id: ${id}`)
    }
    const changeUserManager = () => {
        router.push(`/user/${id}`)
    }
    return (
        <div className={cn(styles.dropdown, {
            [styles.show]: !isVisible
        })}>
            <ul>
                <li style={{color: 'red'}} onClick={deleteUser}>Delete</li>
                <li onClick={changeUserManager}>Change manager</li>
          </ul>
        </div>
    )
}