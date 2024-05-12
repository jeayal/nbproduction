import Button from '@/app/components/button';

interface CardProps {
  url: string;
}

export default function CardMontage({ url }: CardProps) {
  return (
    <div className='group flex size-full flex-col gap-10 rounded-xl bg-slate-50 p-10 drop-shadow-xl transition-all hover:scale-105 dark:bg-neutral-800'>
      <div className='group-hover:gradText flex flex-row items-center gap-3 transition-all group-hover:text-blue-500 '>
        <svg
          height='32'
          viewBox='0 0 512.001 512.001'
          width='32'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
        >
          <g>
            <path d='m228.119 31.013c-19.51 0-35.383 21.124-35.383 47.088s15.873 47.088 35.383 47.088 35.382-21.124 35.382-47.088-15.873-47.088-35.382-47.088zm0 79.177c-10.858 0-20.383-14.995-20.383-32.088s9.525-32.088 20.383-32.088 20.382 14.995 20.382 32.088-9.524 32.088-20.382 32.088z' />
            <path d='m399.867 171.295c4.317 2.492 9.116 3.671 14.088 3.671 14.488 0 30.433-10.019 40.099-26.76 5.956-10.315 8.701-21.918 7.73-32.672-1.043-11.557-6.448-20.96-14.828-25.799-16.896-9.753-41.204.603-54.186 23.088-12.983 22.487-9.799 48.717 7.097 58.472zm5.893-50.971c6.75-11.691 17.989-19.277 27.048-19.277 2.412 0 4.67.538 6.647 1.679 4.097 2.366 6.791 7.526 7.389 14.157.685 7.59-1.422 16.273-5.781 23.824-8.546 14.804-24.29 23.029-33.696 17.598-9.403-5.429-10.154-23.177-1.607-37.981z' />
            <path d='m500.39 467.052c-36.149 23.68-74.074 32.491-119.355 27.73-40.519-4.262-82.197-19.207-122.503-33.661-83.168-29.823-169.167-60.663-255.118-4.374-3.465 2.27-4.435 6.918-2.166 10.383 2.27 3.466 6.919 4.434 10.383 2.166 36.146-23.672 74.067-32.479 119.345-27.714 40.516 4.263 82.189 19.207 122.492 33.659 49.35 17.697 99.682 35.75 150.424 35.747 34.78-.002 69.76-8.489 104.718-31.388 3.465-2.27 4.434-6.919 2.164-10.384-2.271-3.466-6.921-4.435-10.384-2.164z' />
            <path d='m3.935 429.634c1.115.603 2.342.902 3.565.902 1.435 0 2.866-.411 4.11-1.226 19.447-12.74 39.293-21.059 60.673-25.432 4.058-.83 6.675-4.792 5.845-8.851-.83-4.058-4.793-6.675-8.851-5.845-19.016 3.891-36.886 10.626-54.277 20.488l.001-147.847c62.003-38.883 124.281-30.518 198.396-5.91 3.053 1.014 5.104 3.871 5.104 7.109l-.001 133.77c0 2.417-1.118 4.62-3.068 6.046-1.955 1.43-4.402 1.829-6.715 1.092-29.282-9.319-67.991-19.839-107.778-18.458-4.14.144-7.378 3.617-7.235 7.756.145 4.14 3.649 7.376 7.756 7.235 37.481-1.307 74.578 8.807 102.708 17.76 6.923 2.206 14.256 1.01 20.118-3.276 5.856-4.282 9.215-10.899 9.215-18.155l.001-133.771c0-9.713-6.179-18.291-15.377-21.345-31.126-10.334-68.105-20.983-106.37-21.614-39.687-.648-75.127 9.613-108.363 31.385-2.116 1.386-3.39 3.745-3.39 6.274l-.002 165.315c0 2.755 1.511 5.288 3.935 6.598z' />
            <path d='m508.066 261.413c-2.423-1.31-5.37-1.185-7.675.324-60.103 39.374-119.74 31.639-170.792 17.568l1.529-6.386c1.359-5.678 1.947-11.46 1.805-17.197 21.199 5.465 45.023 9.986 70.393 9.986 33.284 0 69.214-7.781 105.284-31.409 3.465-2.27 4.434-6.919 2.164-10.384-2.271-3.466-6.921-4.435-10.384-2.164-26.292 17.224-53.799 26.565-84.094 28.558-24.023 1.58-49.639-1.376-80.229-9.274l33.062-57.265c4.41 5.458 9.724 10.032 15.739 13.505 8.897 5.137 18.723 7.569 28.722 7.568 25.088-.001 51.248-15.316 66.445-41.637 10.168-17.612 14.01-37.539 10.818-56.111-3.28-19.084-13.542-34.476-28.896-43.34-15.353-8.865-33.814-10.057-51.982-3.354-17.68 6.521-33.017 19.812-43.185 37.424l-51.252 88.77c-2.071 3.587-.842 8.174 2.745 10.245 3.587 2.07 8.174.843 10.245-2.745l51.252-88.77c8.419-14.583 20.986-25.54 35.385-30.851 13.911-5.13 27.866-4.325 39.291 2.272 11.426 6.597 19.101 18.277 21.613 32.891 2.6 15.125-.605 31.487-9.025 46.07-17.119 29.649-50.618 42.469-74.676 28.579-7.262-4.192-12.942-10.329-16.884-18.239-1.232-2.472-3.723-4.067-6.483-4.152-2.748-.077-5.344 1.355-6.725 3.747l-36 62.355c-3.247-6.799-7.628-13.089-13.063-18.523l-19.713-19.714v-111.658c0-42.507-29.331-77.088-65.382-77.088s-65.382 34.582-65.382 77.088 29.331 77.088 65.382 77.088c6.945 0 13.834-1.304 20.382-3.826v60.865c-36.574-13.068-77.291-26.993-117.216-30.994-47.699-4.778-89.529 5.103-127.871 30.213-3.465 2.27-4.435 6.918-2.166 10.383 2.27 3.466 6.919 4.435 10.383 2.166 78.832-51.628 159.137-23.693 236.869 4.164v199.253c0 7.563 3.237 14.037 9.115 18.231 3.944 2.814 8.735 4.275 13.54 4.275 2.737 0 5.479-.475 8.069-1.444 6.889-2.578 11.867-8.345 13.658-15.823l33.223-138.757c33.376 9.113 61.293 12.8 87.399 11.58 29.945-1.401 57.389-9.308 83.497-24.101v22.771c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-36.134c.001-2.755-1.51-5.289-3.934-6.599zm-229.772 167.746c-.637 2.659-2.092 4.431-4.326 5.267-2.45.919-5.521.518-7.641-.993-1.876-1.338-2.827-3.364-2.827-6.02v-288.324c0-2.762-1.518-5.3-3.951-6.607-1.112-.597-2.332-.893-3.549-.893-1.447 0-2.891.418-4.142 1.247-7.369 4.88-15.356 7.354-23.741 7.354-27.781 0-50.382-27.853-50.382-62.088 0-34.236 22.602-62.088 50.382-62.088s50.383 27.852 50.383 62.088v114.765c0 1.989.79 3.897 2.197 5.303l21.909 21.909c12.814 12.814 18.154 31.724 13.934 49.348z' />
            <path d='m504.5 326.646c-4.142 0-7.5 3.358-7.5 7.5v95.078c-63.344 39.683-126.064 28.508-184.487 10.385-3.956-1.227-8.158.985-9.385 4.941-1.228 3.956.985 8.158 4.941 9.385 37.903 11.758 67.596 17.081 95.579 17.081 1.295 0 2.591-.012 3.88-.034 36.772-.649 69.836-10.914 101.082-31.382 2.115-1.386 3.39-3.745 3.39-6.274v-99.18c0-4.142-3.357-7.5-7.5-7.5z' />
          </g>
        </svg>
        <h1 className='text-4xl'>Montage</h1>
      </div>

      <p>
        Transformez vos moments en souvenirs inoubliables avec mes services de
        montage vidéo. Expert en post-production, je sublime chaque séquence,
        ajoutant une touche artistique pour créer des vidéos exceptionnelles et
        personnalisées.
      </p>
      <Button url={url} primary aria='Monter ma vidéo' txt='Monter ma vidéo' />
    </div>
  );
}