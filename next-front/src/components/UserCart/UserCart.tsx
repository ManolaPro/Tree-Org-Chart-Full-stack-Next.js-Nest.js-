'use client';

import Image from 'next/image';
import styles from './UserCart.module.css';
import userIcon from '/public/user3.png';
import { UserCartProps } from './UserCart.props';
import { DropDown } from '../DropDown/DropDown';
import { useState } from 'react';

export const UserCart = ({firstName, lastName, id}: UserCartProps) => {
    const [showDropdown, setShowDropDown] = useState(false)
    const clickHandler = () => {
        setShowDropDown(!showDropdown)
    }
    return <div className={styles.cartWrapper} onClick={clickHandler}>
        <Image
            priority
            className={styles.userIcon}
            src={userIcon}
            alt='userIcon'/>
        <h4 className={styles.name}>{firstName}</h4>
        <h4 className={styles.name}>{lastName}</h4>
        <DropDown id={id} isVisible={showDropdown}/>
    </div>
}