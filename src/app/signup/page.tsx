"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { postUser } from '@/providers/api';
import { useState } from 'react';

type userCreate = {
    name: string;
    email: string;
    password: string;
}

export default function SignUp() {

  const [errorMessage,setErrorMessage] = useState("");
  const [successMessage,setSuccessMessage] = useState("");

  const createUserSchema = z.object({
    name: z.string().min(5, "Mínimo de 5 caracteres").max(15, "Máximo de 15 caracteres"),
    email: z.string().email("Email inválido"),
    password: z.string().min(5, "Mínimo de 5 caracteres").max(15, "Máximo de 15 caracteres")
  })

  type createUserFormData = z.infer<typeof createUserSchema>;
  
  const { register, handleSubmit, formState: { errors } } = useForm<createUserFormData>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = async ({ name, email, password }:userCreate) => {
        const response = await postUser({
                email,
                name,
                password
            });
        
        if(response.status == 400) {
          setErrorMessage(response.data.message);
        }

        setSuccessMessage(response.data);
  }

  return (
    <div 
        className='absolute top-[50%] left-[50%] bg-zinc-200 translate-x-[-50%] translate-y-[-50%] flex flex-col px-2 py-3 rounded'
    >
        <h2 className='text-3xl font-semibold pb-3'>Sign Up</h2>
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

            <label htmlFor="password">
                Senha
            </label>
            <input className='px-2 py-0.5 mb-1.5' {...register("password")} type="text" id="password"/>
            <span className={`${errors.password ? "block" : "opacity-0"} text-red-400 h-[20px] text-xs`}>{errors?.password?.message}</span>

            <button className='text-zinc-100 bg-emerald-300 py-1 px-2 font-semibold' type="submit">
                Sign Up
            </button>
        </form>
    </div>
  )
}