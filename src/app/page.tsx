import Intro from '@/components/Intro'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div className="max-w-[70rem] text-center leading-8 scroll-mt-28">
        <Intro />
      </div>
    </main>
  )
}
