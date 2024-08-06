"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser"

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const sendEmail = (params) => {

    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID,params,{
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
          throttle: 10000, // can send 1 email per min
        }
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const onSubmit = (data) =>{
    const templateParams = {
      to_name: "Devansh",
      from_name: data.Name,
      reply_to: data.Email,
      message: data.Message,
      contact: data.Contact_no
    }
    sendEmail(templateParams)

  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' max-w-md w-full flex flex-col items-center justify-center space-y-4'>
    <input type="text" placeholder="Name" {...register("Name", {required: true})} className='w-full p-2 rounded-md shadow-lg text-forground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg bg-transparent'/>

    <input type="email" placeholder="Email" {...register("Email", {required: true})} className='w-full p-2 rounded-md shadow-lg text-forground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg bg-transparent' />

    <input type="tel" placeholder="Contact no." {...register("Contact_no.", {required: true})} className='w-full p-2 rounded-md shadow-lg text-forground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg bg-transparent'/>

    <textarea {...register("Message", {max: 256, min: 50})} className='w-full p-2 rounded-md shadow-lg text-forground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg bg-transparent'/>

    <input type="submit" value={"send your message"} className=' px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-forground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'/>
  </form>
  );
}