/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

const DarkModeButton = dynamic(() => import('components/DarkModeButton'), {
  ssr: false,
});
const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Head>
        <title>Next.js + Tailwind Starter</title>
        <meta name="description" content="Next.js + Tailwind Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center text-center">

        <div>
          <Image src={theme === 'dark' ? '/nextjs-light.svg' : '/nextjs-dark.svg'} alt="Nextjs Logo" width={200} height={100} />
          <Image src={theme === 'dark' ? '/tailwindcss-light.svg' : '/tailwindcss-dark.svg'} alt="Nextjs Logo" width={300} height={100} />


        </div>
        <h1 className="text-6xl font-bold mb-10">
          Next.js + Tailwindcss Starter
        </h1>

        <div className="mb-5">
          <span className="mb-2">A starter template for your next project with&nbsp;
            <a className="hover:text-sky-600" href="https://nextjs.org">Next.js</a>,&nbsp;
            <a className="hover:text-sky-600" href="https://tailwindcss.com">Tailwindcss</a>,&nbsp;
            <a className="hover:text-sky-600" href="https://www.typescriptlang.org/"></a>TypeScript,&nbsp;
            <a className="hover:text-sky-600" href="https://emotion-icons.dev/">Emotion Icons</a>,&nbsp;
            <a className="hover:text-sky-600" href="https://github.com/pacocoursey/next-themes">next-themes</a> and pre-configured with
            <a className="hover:text-sky-600" href="https://eslint.org">Eslint</a>,
            <a className="hover:text-sky-600" href="https://typicode.github.io/husky/">Husky</a>, and&nbsp;
            <a className="hover:text-sky-600" href="https://github.com/okonet/lint-staged">Lint-staged</a>
          </span>

        </div>
        <div className="mb-5">
          <span className=" mb-2">Bonus: Dark-mode button<DarkModeButton /></span>

        </div>

        <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fanjar%2Fnextjs-tailwind-starter&project-name=nextjs-tailwind&repo-name=nextjs-tailwind">
          <img src="https://vercel.com/button" alt="Deploy with Vercel" />
        </a>
      </main>

      <footer className="absolute w-full bottom-1 items-center justify-center text-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 2022 <a href="https://anjar.my.id">Anjar Febrianto</a>, Powered by{' '}
          <span>
            <Image src={theme === 'dark' ? '/vercel-light.svg' : '/vercel-dark.svg'} alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
