import Image from 'next/image';

export default function TrustedLogos() {
  const marquesItems = {
    marque: ['Peugeot', 'Truc', 'Muche'],
    logo: [
      '/images/marques/UMS-logotype.svg',
      '/images/marques/Michelin-Logo.svg',
      '/images/marques/ford.svg',
      '/images/marques/BZ-Consult-logo-2019.svg',
    ],
  };
  const subTitle =
    "Ces marques m'ont permis de leur proposer mes services de vidéo professionnelle pour accroître leur engagement et leur positionnement sur le web";

  return (
    <div className='layout flex flex-col gap-10'>
      <div className=' flex flex-col gap-4 text-center'>
        <h1 className=' text-4xl font-bold md:text-6xl'>
          Ils m'ont fait
          <span className='gradText'>&nbsp;confiance</span>.
        </h1>
        <p>{subTitle}</p>
      </div>
      <div className='flex justify-center'>
        <ul className='inline-grid grid-cols-2 content-center items-center justify-center gap-x-10 gap-y-6  md:grid-cols-3 md:gap-x-16 lg:grid-cols-4'>
          {/* LOGO 1 */}
          <li>
            <Image
              src={marquesItems.logo[0]}
              alt='Alt'
              width={100}
              height={100}
              className=' my-auto '
            />
          </li>

          {/* LOGO 2 */}
          <li>
            <svg
              viewBox='0 0 500 437'
              width='100'
              height='100'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                id='path132'
                d='m 208.9847,0 -83.7801,156.00918 83.7801,156.00793 h 23.1817 L 316.8576,156.00918 262.8999,55.53194 250.7151,78.22095 292.4896,156.00918 220.4372,290.17711 148.3861,156.00918 232.1664,0 Z m 48.0051,0 -84.6924,156.00918 53.9591,100.47714 12.1845,-22.68908 -41.7744,-77.78806 72.0524,-134.16799 72.0512,134.16799 -83.7814,156.00793 h 23.1826 L 363.9517,156.00918 280.1714,0 Z'
              />
              <path
                id='rect47'
                d='m 79.9942,374.10754 v 62.23127 h 54.2125 V 423.79185 H 96.1104 V 411.1899 h 33.3725 V 398.80857 H 96.1104 v -12.31994 h 37.3091 v -12.38109 z'
              />
              <path
                id='rect47-6'
                d='m 0,374.10754 v 62.23127 h 16.1162 v -19.49003 h 19.4006 l 11.2528,19.49003 h 18.5865 l -13.496,-22.89223 c 6.5534,-3.61768 11.2722,-10.20709 11.2722,-18.31429 0,-16.64605 -12.6179,-21.02475 -22.8701,-21.02475 z m 16.1162,12.38109 h 22.8561 c 2.9512,0 6.2357,2.29429 6.2357,9.38713 0,2.40483 -0.702,8.59169 -6.2357,8.59169 H 16.1162 Z'
              />
              <path
                id='rect1271'
                d='m 148.8468,374.10754 v 62.23127 h 16.1162 v -40.08544 l 35.6286,40.08544 h 16.116 v -62.23127 h -16.116 v 39.7587 l -35.6286,-39.7587 z'
              />
              <path
                id='path1750'
                d='m 253.3119,374.10754 -27.4231,62.23127 h 18.4797 l 4.1814,-10.59523 h 31.3448 l 4.1814,10.59523 h 18.4797 l -27.4231,-62.23127 z m 10.9103,11.92151 10.7866,27.33332 h -21.5729 z'
              />
              <path
                id='rect3635'
                d='m 391.7109,374.10754 v 62.23127 H 443.34 v -12.54696 h -35.5131 v -49.68431 z'
              />
              <path
                id='rect4042'
                d='m 435.4432,374.10754 v 12.38109 h 24.2204 v 49.85018 h 16.1161 V 386.48863 H 500 v -12.38109 z'
              />
              <path
                id='rect8237'
                d='m 310.1242,374.10754 v 42.05703 c 0,17.62353 17.8765,21.35867 32.0531,21.35867 14.1766,0 32.0533,-3.73514 32.0533,-21.35867 v -42.05703 h -16.1162 v 41.26999 c 0,6.40728 -9.6883,8.55893 -15.9371,8.55893 -6.2488,0 -15.937,-2.15165 -15.937,-8.55893 v -41.26999 z'
              />
            </svg>
          </li>

          {/* LOGO 3 */}
          <li>
            <Image
              src={marquesItems.logo[2]}
              alt='Alt'
              width={100}
              height={100}
              className='my-auto '
            />
          </li>

          {/* LOGO 4 */}
          <li>
            <Image
              src={marquesItems.logo[3]}
              alt='Alt'
              width={150}
              height={150}
              className='my-auto '
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
