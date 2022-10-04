import { InputHTMLAttributes } from "react";

interface CustomInputProps {
  label?: string;
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  data: CustomInputProps
}

export function CustomInput({ data, ...props }: Props) {
  return (
    <>
      {data.label && (<label className='font-semibold text-base text-white' htmlFor={props.id}>{data.label}</label>)}
      <input
        className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        {...props}
      />
    </>
  )
}