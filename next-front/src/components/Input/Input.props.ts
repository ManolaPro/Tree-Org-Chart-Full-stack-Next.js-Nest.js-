import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    error?: boolean;
    errorMessage?: string;
}