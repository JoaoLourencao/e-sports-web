import { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  props?: InputHTMLAttributes<HTMLInputElement>
}

export function CustomInput({ label = "", ...props }: CustomInputProps) {
  return (
    <>
      {label && (<label className='font-semibold text-base text-white' htmlFor={props.id}>{label}</label>)}
      <input
        className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        {...props}
      />
    </>
  )
}