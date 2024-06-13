import styles from './Tree.module.css';
import { TreeNode } from "../TreeNode/TreeNode";
import { TreeProps } from "./Tree.props";

export const Tree = ({data}: TreeProps) => {
    console.log(data)
    return (<div className={styles.rootWrapper}>
        {data.map((i) => {
            return (<TreeNode key={i.id} data={i} isRoot/>)
        })}
    </div>
    )
}