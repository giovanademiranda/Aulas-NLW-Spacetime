import Image from 'next/image'
import nlwLogo from '../assets/nlwLogo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime Logo" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="mt-">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-bold uppercase leading-none text-black hover:bg-green-600"
        href="/memories/new "
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}
