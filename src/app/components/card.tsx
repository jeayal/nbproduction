import Button from '@/app/components/button';

interface CardProps {
  title: string;
  txt: string;
  url: string;
}

export default function CardService({ title, txt, url }: CardProps) {
  return (
    <div className='flex flex-col gap-10 rounded-xl bg-slate-50 p-10 drop-shadow-xl dark:bg-neutral-800'>
      <h1>{title}</h1>
      <p>{txt}</p>
      <Button
        url={url}
        primary
        aria='Profitez de mes services'
        txt='En savoir plus'
      />
    </div>
  );
}
