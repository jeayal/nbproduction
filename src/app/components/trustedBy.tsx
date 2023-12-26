import Image from 'next/image';

export default function TrustedLogos() {
  const marquesItems = {
    marque: ['Peugeot', 'Truc', 'Muche'],
    logo: [
      '/images/marques/peugeot.svg',
      '/images/marques/renault.svg',
      '/images/marques/haute-loire.svg',
      '/images/marques/pubg.svg',
    ],
  };
  const subTitle =
    "Ces marques ont m'ont permis de leur proposer mes services de vidéo professionnelle pour accroitre leur engagement et leur positionnement";

  return (
    <div className='px-12'>
      <div className='mx-auto max-w-screen-xl '>
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='mb-6 text-4xl font-bold md:text-6xl'>
            Ils m'ont fait
            <span className='bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent'>
              &nbsp;confiance
            </span>
            .
          </h1>
          <p className='mt-3'>{subTitle}</p>
        </div>
        <div className='mt-12 flex justify-center'>
          <ul className='inline-grid grid-cols-2 content-center items-center justify-center gap-x-10 gap-y-6 text-white md:grid-cols-3 md:gap-x-16 lg:grid-cols-4'>
            {/* LOGO 1 */}
            <li>
              <Image
                src={marquesItems.logo[0]}
                alt='Alt'
                width={100}
                height={100}
                className='my-auto w-28 '
              />
            </li>

            {/* LOGO 2 */}
            <li>
              <Image
                src={marquesItems.logo[1]}
                alt='Alt'
                width={100}
                height={100}
                className='my-auto w-28'
              />
            </li>

            {/* LOGO 3 */}
            <li>
              <Image
                src={marquesItems.logo[2]}
                alt='Alt'
                width={100}
                height={100}
                className='my-auto w-28'
              />
            </li>

            {/* LOGO 4 */}
            <li>
              <Image
                src={marquesItems.logo[3]}
                alt='Alt'
                width={100}
                height={100}
                className='my-auto w-28'
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
