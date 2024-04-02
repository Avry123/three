'use client'
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormFields, formSchema } from '../../type';
import { zodResolver } from '@hookform/resolvers/zod';


function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema), // Apply the zodResolver
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name" {...register('name', { required: true })} />
      {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      <input type="email" placeholder="Email" {...register('email', { required: true })} />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      <input type="password" placeholder="Password" {...register('password', { required: true })} />
      {errors.password && <span className="text-red-500">{errors.password.message}</span>}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
