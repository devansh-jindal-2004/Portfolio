"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser"
import { Toaster, toast } from 'sonner'

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  
  const sendEmail = (params) => {
    const toastId = toast.loading("sending...")
    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate: {
          throttle: 10000, // can send 1 email per min
        }
      })
      .then(
        () => {
          toast.success("message sent", {
            id: toastId
          });
        },
        (error) => {
          toast.error("message failed, try again", {
            id: toastId
          });
          console.log(error.message);
          
        },
      );
  };

  const onSubmit = (data) => {
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
  <>
    <Toaster richColors={true} />
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>
      <input
        type="text"
        placeholder="Name"
        {...register("Name", { required: 'This field is required', minLength: { value: 3, message: 'Name too short' } })}
        className='w-full p-2 rounded-md shadow-lg text-forground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg bg-transparent'
      />
      {errors.Name && <span className='inline-block self-start text-accent'>{errors.Name.message}</span>}

      <input
        type="email"
        placeholder="Email"
        {...register("Email", { required: 'This field is required' })}
        className='w-full p-2 rounded-md shadow-lg text-forground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg bg-transparent'
      />
      {errors.Email && <span className='inline-block self-start text-accent'>{errors.Email.message}</span>}

      <input
        type="tel"
        placeholder="Contact no."
        {...register("Contact_no", { required: 'This field is required', minLength: { value: 10, message: 'please enter a valid number' }, maxLength: { value: 10, message: 'please enter a valid number' } })}
        className='w-full p-2 rounded-md shadow-lg text-forground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg bg-transparent'
      />
      {errors.Contact_no && <span className='inline-block self-start text-accent'>{errors.Contact_no.message}</span>}

      <textarea
        placeholder="Message"
        {...register("Message", { required: 'This field is required', minLength: { value: 25, message: 'Message is too short' }, maxLength: { value: 256, message: 'Message is too long' } })}
        className='w-full p-2 rounded-md shadow-lg text-forground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg bg-transparent'
      />
      {errors.Message && <span className='inline-block self-start text-accent'>{errors.Message.message}</span>}

      <input
        type="submit"
        value={"Send your message"}
        className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-forground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'
      />
    </form>

  </>
  );
}
