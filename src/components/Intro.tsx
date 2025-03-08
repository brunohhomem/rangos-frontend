import Image from 'next/image'

export default function Intro() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-blue-600 font-semibold text-xl">
          Olá, esse é o Rangos.pro
        </h1>
        <h2>
          Essa é uma ferramenta para te ajudar a ter uma vida mais saudável.
        </h2>
        <p>
          Aqui você pode comparar alimentos, calcular sua taxa metabólica basal
          e montar sua dieta de acordo com seu objetivo.
        </p>
        <p>Acesse nosso FAQ para obter instruções caso precise.</p>
      </div>

      <Image
        className="m-5 rounded-md backdrop-blur-3xl h-[245px]"
        src="/intro-banner.png"
        alt="logo"
        width={850}
        height={200}
        quality="80"
      />
    </section>
  )
}
