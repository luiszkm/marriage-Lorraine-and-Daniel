import { SectionContent } from '@/components/sectionContent'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full  bg-black h-full p-2 flex flex-col items-center gap-4">
      <SectionContent>
        <header className="w-full  flex items-center justify-between">
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
        </header>
        <h1 className="text-7xl">Lorraine & Daniel</h1>
        <Button>
          <a href="/presence">confirme sua presença</a>
        </Button>
        <footer className="w-full flex items-center justify-between">
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
        </footer>
      </SectionContent>
      <SectionContent>
        <header className="w-full  flex items-center justify-between">
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
        </header>
        <div className="flex  gap-4">
          <p className="text-2xl">
            Aqui você pode encontrar informações sobre o casamento de Lorraine e
            Daniel
          </p>
          <img className="w-1/2 h-96 rounded-2xl" src="###" alt="fot dos noivos" />
        </div>
        <footer className="w-full flex items-center justify-between">
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
        </footer>
      </SectionContent>
      <SectionContent>
        <header className="w-full  flex items-center justify-between">
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
        </header>

        <div className="flex w-full items-center justify-evenly gap-10">
          <div>
            <h3>endereço</h3>
            <p>rua 123</p>
          </div>
          <div>
            <h2>Operação Lua de mel</h2>
            <img width={200} height={200} src="###" alt="qr-code" />
            <p>chavepix</p>
            <p>msg para lua de mel</p>
          </div>
        </div>

        <footer className="w-full flex items-center justify-between">
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
        </footer>
      </SectionContent>
    </main>
  )
}
