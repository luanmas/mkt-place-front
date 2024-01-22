"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

type User = {
    name: string;
    email: string;
    password: string;
}

const Login = () => {

    
  const userSchema = z.object({
    name: z.string().min(5, "Mínimo de 5 caracteres").max(15, "Máximo de 15 caracteres"),
    email: z.string().email("Email inválido"),
    password: z.string().min(5, "Mínimo de 5 caracteres").max(15, "Máximo de 15 caracteres")
  })

  type userFormData = z.infer<typeof userSchema>;
  
  const { register, handleSubmit, formState: { errors } } = useForm<userFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data:any) => {
    console.log(data);
  }

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
                Nome de usuário
            </label>
            <input {...register("name")} type="text" id="name"/>
            {errors.name && <span>{errors.name.message}</span>}

            <label htmlFor="email">
                Email
            </label>
            <input  {...register("email")} type="text" id="email"/>
            {errors.email && <span>{errors.email.message}</span>}

            <label htmlFor="password">
                Senha
            </label>
            <input {...register("password")} type="text" id="password"/>
            {errors.password && <span>{errors.password.message}</span>}

            <button type="submit">
                Login
            </button>
        </form>
    </div>
  )
}

export default Login;