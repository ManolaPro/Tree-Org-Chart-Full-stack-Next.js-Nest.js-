import styles from './Tree.module.css';
import { TreeNode } from "../TreeNode/TreeNode";
import { TreeProps } from "./Tree.props";

export const Tree = ({data}: TreeProps) => {
    return (<div className={styles.rootWrapper}>
        {data?.length > 0 && data.map((i) => {
            return (<TreeNode key={i.id} data={i} isRoot/>)
        })}
    </div>
    )
}