import styles from './ErrorMessage.module.css';
// import Image from 'next/image';
import { ErrorMessageProps } from './ErrrorMessage.props';
// import errorIcon from '/public/errorIcon.svg';

export const ErrorMessage =({ msg, ...props }:ErrorMessageProps) => {
	return <div className={styles.errorMessage} {...props}>
			{/* <Image src={errorIcon} alt='error'></Image> */}
			<p>{msg}</p>
		</div>;
};