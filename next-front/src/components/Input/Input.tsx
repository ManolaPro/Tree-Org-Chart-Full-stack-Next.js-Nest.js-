import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';
import styles from './Input.module.css';
import { InputProps } from "./Input.props"
import cn from 'classnames';

export const Input = ({error = false, errorMessage, ...props}: InputProps) => {
    return (<>
        <input
            className={cn(styles.input, {
                [styles.error]: error
            })}
            {...props}>
        </input>
        {(error && errorMessage) && 
            <ErrorMessage msg={errorMessage}/>
        }
    </>
    )
}