/* eslint-disable no-console */
'use client';

import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './contactForm.module.css';

import { siteConfig } from '@/constant/config';

export default function ContactGmail() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const [isHuman, setIsHuman] = useState(false); // To enable HCaptcha set to false

  const onHCaptchaChange = (token) => {
    setValue('h-captcha-response', token);
    setIsHuman(true);
  };

  async function onSubmit() {
    // e.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.log('Reponse status: ', response.status);

        throw new Error(`response status: ${response.status}`);
      }

      setIsSuccess(true);
      setMessage('Message envoyé avec succès !');
      document.getElementById('SubmitForm').reset();
    } catch (err) {
      setIsSuccess(false);
      setMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  }

  return (
    <div
      className={`w-full ${styles.formStroke} overflow-hidden rounded-xl drop-shadow-2xl`}
    >
      <form
        id='SubmitForm'
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
        <h1 className='mb-4 text-4xl'>Demande de devis</h1>

        <input
          type='text'
          placeholder='Votre nom'
          autoComplete='false'
          className={`border-1 mt-2 w-full rounded-md px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-neutral-900 dark:text-white   dark:placeholder:text-gray-300  ${
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

        <input
          id='email_address'
          type='email'
          placeholder='Votre adresse email'
          name='email'
          autoComplete='false'
          className={`border-1  mt-2 w-full rounded-md px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-neutral-900 dark:text-white   dark:placeholder:text-gray-300  ${
            errors.email
              ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
              : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
          }`}
          {...register('email', {
            required: 'Veuillez entrer votre adresse email',
            pattern: {
              // value: /^\S+@\S+$/i, ORIGINAL
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/i,
              message: "Votre email n'a pas l'air valide",
            },
          })}
        />
        {errors.email && (
          <div className='mt-1 text-red-600'>
            <small>{errors.email.message}</small>
          </div>
        )}
        <input
          id='phone'
          type='phone'
          name='phone'
          placeholder='Votre numéro de téléphone'
          autoComplete='false'
          className={`border-1  mt-2 w-full rounded-md px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-neutral-900 dark:text-white   dark:placeholder:text-gray-300  ${
            errors.phone
              ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
              : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
          }`}
          {...register('phone', {
            required: 'Veuillez ajouter votre numéro de téléphone',
            pattern: {
              // value: /^\S+@\S+$/i, ORIGINAL
              value: /^[0-9]{10}$/i,
              message: "Votre numéro de téléphone n'a pas l'air valide.",
            },
          })}
        />
        {errors.phone && (
          <div className='mt-1 text-red-600'>
            <small>{errors.phone.message}</small>
          </div>
        )}

        <select
          name='BesoinChoix'
          id='needChoice'
          aria-label='Sélectionnez votre besoin ou projet'
          placeholder='Quel est votre besoin ?'
          className={`border-1 mt-2 w-full rounded-md px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 active:text-gray-800 dark:bg-neutral-900 dark:text-white dark:placeholder:text-gray-300  ${
            errors.message
              ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
              : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
          }`}
          {...register('service', {
            required: 'Veuillez préciser votre besoin',
          })}
        >
          <option disabled defaultValue='DEFAULT'>
            Quel est votre besoin ?
          </option>
          <option value={siteConfig.services[0]}>
            {siteConfig.services[0]}
          </option>
          <option value={siteConfig.services[1]}>
            {siteConfig.services[1]}
          </option>
          <option value={siteConfig.services[2]}>
            {siteConfig.services[2]}
          </option>
          <option value={siteConfig.services[3]}>
            {siteConfig.services[3]}
          </option>
          <option value={siteConfig.services[4]}>
            {siteConfig.services[4]}
          </option>
          <option value='Autre'>Autre</option>
        </select>

        <textarea
          name='message'
          placeholder='Décrivez votre projet ou votre besoin'
          className={`border-1 mt-2 h-36 w-full rounded-md px-4 py-3 outline-none placeholder:text-gray-800   focus:ring-4 dark:bg-neutral-900  dark:text-white dark:placeholder:text-gray-300  ${
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
        {!isSubmitSuccessful && isHuman && (
          <div className='flex flex-row items-center justify-start'>
            <button
              type='submit'
              aria-label='Envoyer ma demande'
              className='mt-8 flex flex-row items-center justify-center rounded-md bg-blue-500 px-10 py-2 align-middle text-lg font-light text-gray-50 transition hover:scale-105 hover:bg-blue-400 active:scale-95'
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
        )}
        <div className='text-left'>
          {isSubmitSuccessful && isSuccess && (
            <div className='mt-3 rounded-lg border-2 border-solid border-green-500 p-6 text-center '>
              {message && 'Message envoyé ! Je reviens vers vous très bientôt.'}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className='mt-3 rounded-lg border-2 border-solid border-red-500 p-6 text-center'>
              {message && `Une erreur est survenue. Veuillez réessayer.`}
            </div>
          )}
        </div>
        <div className='my-4'>
          {!isHuman && (
            <div className='mt-2 flex flex-col items-center justify-center gap-4 '>
              <p className='text-sm text-neutral-400'>
                Veuillez d'abord valider le captcha :
              </p>
              <HCaptcha
                sitekey='50b2fe65-b00b-4b9e-ad62-3ba471098be2'
                onVerify={onHCaptchaChange}
                render='explicit'
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
