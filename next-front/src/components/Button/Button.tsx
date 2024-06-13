import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({title, ...props}: ButtonProps) => {
    return (
        <button
            className={styles.button}
            {...props}
            >
                {title}
        </button>
    )
}