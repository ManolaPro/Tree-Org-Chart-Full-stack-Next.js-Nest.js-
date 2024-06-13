'use client';
import styles from './TreeNode.module.css';
import { UserCart } from "../UserCart/UserCart"
import { TreeNodeProps } from "./TreeNode.props"
import { useEffect, useRef, useState } from 'react';

export const TreeNode = ({data, isRoot=true}: TreeNodeProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0)
    useEffect(() => {
        
        const updateWidth = () => {
          if (divRef.current) {
            setWidth(divRef.current.offsetWidth - 198);
          }
        };
        updateWidth();
    
        window.addEventListener('resize', updateWidth);
        return () => {
          window.removeEventListener('resize', updateWidth);
        };
      }, []);
    return (<div className={styles.wrapper}>
        {!isRoot && <span className={styles.vertical}/>}
        <UserCart
            firstName={data.firstName}
            lastName={data.lastName}
            id={data.id}
        />
        {data.subordinates && data.subordinates.length > 0 && 
            <>
                <span className={styles.vertical}/>
                <span 
                    className={styles.horizontal}
                    style={{width:`${width}px`}}/>
                <div className={styles.childWrapper} ref={divRef}>
                    {data.subordinates.map((i) => <TreeNode key={i.id} data={i} isRoot={false}/>)}   
                </div>
            </>
        }
    </div>
    )
}