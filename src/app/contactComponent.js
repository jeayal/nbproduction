// Contact Component Web3Forms - Shortly Agency v1.2 2023

import useWeb3Forms from '@web3forms/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const customMail = 'contact@blanc-nicolas.com';
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // control,
    // setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [setMessage] = useState(false);

  const apiKey =
    process.env.PUBLIC_ACCESS_KEY || 'd2358867-ff67-4856-bc87-c0c848359f2e';

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: 'NBProduction',
      subject: 'Nouvelle demande de devis',
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <div className='  w-full'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col rounded-lg bg-neutral-100 px-8 py-8 shadow-xl dark:bg-neutral-800'
      >
        <input
          type='checkbox'
          id=''
          className='hidden'
          style={{ display: 'none' }}
          {...register('botcheck')}
        ></input>
        <h1 className='text-2xl font-bold dark:text-gray-50'>
          Demande de devis
        </h1>

        <label
          htmlFor='fullname'
          className='mt-8 font-light text-gray-500 dark:text-gray-50'
        >
          Votre nom<span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          placeholder='John Doe'
          autoComplete='false'
          className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
            errors.name
              ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
              : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
          }`}
          {...register('name', {
            required: 'Votre nom complet est requis',
            maxLength: 80,
          })}
        />
        {errors.name && (
          <div className='mt-1 text-red-600'>
            <small>{errors.name.message}</small>
          </div>
        )}

        <label
          htmlFor='email'
          className='mt-4 font-light text-gray-500 dark:text-gray-50'
        >
          Votre e-mail<span className='text-red-500'>*</span>
        </label>
        <input
          id='email_address'
          type='email'
          placeholder='exemple@gmail.com'
          name='email'
          autoComplete='false'
          className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
            errors.email
              ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
              : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
          }`}
          {...register('email', {
            required: 'exemple@gmail.com',
            pattern: {
              // value: /^\S+@\S+$/i, ORIGINAL
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/i,
              message: 'Veuillez entrer une adresse email valide.',
            },
          })}
        />
        {errors.email && (
          <div className='mt-1 text-red-600'>
            <small>{errors.email.message}</small>
          </div>
        )}

        <label
          htmlFor='message'
          className='mt-4 font-light text-gray-500 dark:text-gray-50'
        >
          Votre demande<span className='text-red-500'>*</span>
        </label>
        <textarea
          name='message'
          placeholder='Décrivez votre projet ou votre besoin'
          className={`h-36 w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800   focus:ring-4 dark:bg-gray-900  dark:text-white dark:placeholder:text-gray-200  ${
            errors.message
              ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
              : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
          }`}
          {...register('message', {
            required: 'Veuillez préciser votre demande',
          })}
        />
        {errors.message && (
          <div className='mt-1 text-red-600'>
            {' '}
            <small>{errors.message.message}</small>
          </div>
        )}
        <div className='flex flex-row items-center justify-start'>
          <button
            type='submit'
            className='mt-8 flex flex-row items-center rounded-md bg-[#130F49] px-10 py-2 text-lg font-light text-gray-50'
          >
            {isSubmitting ? (
              <svg
                className='mx-auto h-5 w-5 animate-spin text-white dark:text-black'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
            ) : (
              'Envoyer ma demande'
            )}
          </button>
        </div>
        <div className='text-left'>
          {isSubmitSuccessful && isSuccess && (
            <div className='mt-3 text-center text-sm text-green-500'>
              Votre message a bien été envoyé, je reviens vers vous rapidement.
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className='mt-3 text-center text-sm text-red-500'>
              Une erreur est survenue. Vous pouvez me contacter directement à
              {customMail}.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
