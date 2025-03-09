import TMB from '@/components/TMB'

export default function Ferramentas() {
  return (
    <main className="flex flex-col items-center px-4 gap-4">
      <h1 className="text-blue-600 font-semibold text-xl">
        Selecione uma das ferramentas
      </h1>
      <div className="flex gap-4">
        <TMB />
      </div>
    </main>
  )
}
