'use client';
import cn from 'classnames';
import styles from './DropDown.module.css';
import { DropDownProps } from "./DropDown.props";
import { useRouter } from 'next/navigation';
import { Button } from '../Button/Button';
import { deleteUser } from '@/actions';
import Link from 'next/link';

export const DropDown = ({ id, isVisible}: DropDownProps) => {
    const deleteUserAction = deleteUser.bind(null, id)

    return (
        <div className={cn(styles.dropdown, {
            [styles.show]: !isVisible
        })}>
            <ul>
                <li>
                    <form action={deleteUserAction}>
                        <button className={styles.button}>
                            Delete
                        </button>
                    </form>
                </li>
                <li>
                    <Link href={`user/${id}`} className={styles.link}>
                        Change manager
                    </Link>
                </li>
          </ul>
        </div>
    )
}