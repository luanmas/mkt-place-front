"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

export default function Login () {

    
  const userSchema = z.object({
    name: z.string().min(5, "Mínimo de 5 caracteres").max(15, "Máximo de 15 caracteres"),
    email: z.string().email("Email inválido"),
  })

  type userFormData = z.infer<typeof userSchema>;
  
  const { register, handleSubmit, formState: { errors } } = useForm<userFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data:any) => {
    console.log(data);
  }

  return (
    <div 
        className='absolute top-[50%] left-[50%] bg-zinc-200 translate-x-[-50%] translate-y-[-50%] flex flex-col px-2 py-3 rounded'
    >
        <h2 className='text-3xl font-semibold pb-3'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <label htmlFor="name">
                Nome de usuário
            </label>
            <input className='px-2 py-0.5 mb-1.5' {...register("name")} type="text" id="name"/>
            <span className={`${errors.name ? "block" : "opacity-0"} text-red-400 h-[20px] text-xs`}>{errors?.name?.message}</span>

            <label htmlFor="email">
                Email
            </label>
            <input className='px-2 py-0.5 mb-1.5' {...register("email")} type="text" id="email"/>
            <span className={`${errors.email ? "block" : "opacity-0"} text-red-400 h-[20px] text-xs`}>{errors?.email?.message}</span>

            <button className='text-zinc-100 bg-emerald-300 py-1 px-2 font-semibold' type="submit">
                Login
            </button>
        </form>
    </div>
  )
}