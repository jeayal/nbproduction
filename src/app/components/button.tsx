interface ButtonProps {
  txt: string;
  url: string;
  aria: string;
  primary: boolean;
}

export default function Button({ txt, url, aria, primary }: ButtonProps) {
  return (
    <a
      href={url}
      aria-label={aria}
      className={`block rounded-lg px-10 py-4 text-center text-lg font-medium uppercase tracking-widest  transition hover:scale-105 md:text-sm
          ${
            primary
              ? `  bg-gradient-to-r from-blue-500 to-sky-400 text-white     hover:to-blue-700  `
              : ` border-[1px] border-solid border-blue-400    hover:border-blue-500
              hover:text-blue-500`
          } `}
    >
      {txt}
    </a>
  );
}
