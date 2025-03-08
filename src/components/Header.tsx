import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="">
      <Image
        className="fixed top-0 m-6 ml-10"
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        quality="80"
      />
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
      dark:bg-blue-950 dark:border-black/40"
      ></div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-gray-50">
          <li>
            <Link href="#">Início</Link>
          </li>
          <li>
            <Link href="#">Alimentos</Link>
          </li>
          <li>
            <Link href="#">Ferramentas</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
          <li>
            <Link href="#">Contato</Link>
          </li>
          <li>
            <Link href="#">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
