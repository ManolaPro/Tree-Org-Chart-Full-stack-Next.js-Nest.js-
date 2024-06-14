
import styles from './TreeNode.module.css';
import { UserCart } from "../UserCart/UserCart"
import { TreeNodeProps } from "./TreeNode.props"

export const TreeNode = ({data, isRoot=true}: TreeNodeProps) => {
    
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
                <span className={styles.horizontal}/>
                <div className={styles.childWrapper}>
                    {data.subordinates.map((i) => <TreeNode key={i.id} data={i} isRoot={false}/>)}   
                </div>
            </>
        }
    </div>
    )
}