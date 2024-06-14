import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ErrorMessageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	msg: string;
}