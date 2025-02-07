'use client'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/hooks/use-toast'
import { Copy } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/img/logo.svg'
import apoioIcon from '../../public/img/apoio.svg'
import fullPlanta from '../../public/img/full-plant.svg'
import mainhero from '@/../public/img/main-hero.svg'
import noivos from '../../public/img/noivos.svg'
import direita from '../../public/img/direita.svg'
import carro from '../../public/img/carro.svg'

const pixKey = 'suachavepix@exemplo.com'
export default function Home() {
  const { toast } = useToast()
  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey) // Copia a chave Pix para a área de transferência
      toast({
        title: 'Obrigado',
        description: 'Chave Pix copiada'
      })
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível copiar a chave Pix',
        variant: 'destructive'
      })
      console.error('Erro ao copiar a chave Pix:', error)
    }
  }

  return (
    <main className="w-full h-full p-2 flex flex-col items-center gap-4">
      <section className=" flex justify-between w-full h-screen items-center  bg-slate-50">
        <div className="w-full h-full border-4 "
        >
          <Image
            className=" w-full h-full  "
            src={mainhero}
            alt="logo"
          />
        </div>

        <div className=" w-full bgg  h-full p-10 flex flex-col items-center justify-center">
          <h1 className="text-7xl">Lorraine</h1>
          <span className="text-7xl">&</span>
          <h2 className="text-7xl">Daniel</h2>
          <Image
            className="mt-4 w-full  sm:max-w-48"
            src={noivos}
            alt="logo"
            width={200}
            height={200}
          />
        </div>

        <div className="relative">
          <Image
            className="relative bottom-0 right-0"
            src={direita}
            alt="logo"
            width={400}
            height={640}
          />
        </div>
      </section>

      <section className="flex flex-col  py-5 px-8 items-center justify-between w-full max-w-screen-lg bg-slate-50">
        <div className="flex w-full px-4 sm:px-16 flex-col-reverse  gap-4">
          <div className="flex w-full flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-4 max-w-sm">
              <h2 className="text-3xl font-bold">Um amor que floresceu.</h2>
              <p className="">
                Nos conhecemos desde sempre, melhores amigos nos melhores e
                piores dias. <br />
                Depois de décadas de incidentes e ombro amigo sempre disponível,
                percebemos que a pessoa certa estava bem diante de nossos olhos.
              </p>
            </div>
            <img
              className="w-full h-96 rounded-2xl border"
              src="###"
              alt="fot dos noivos"
            />
          </div>

          <div className=" flex items-center gap-4">
            <div className="border w-full"></div>
            <Image
              className=""
              src={logo}
              alt="logo"
              width={200}
              height={200}
            />
            <div className="border w-full"></div>
          </div>
        </div>
      </section>

      <section className="relative flex justify-center p-12  items-start w-full max-w-screen-lg bg-slate-50">
        <Image
          className="absolute top-0 left-0 rotate-180"
          src={direita}
          alt="logo"
          width={400}
          height={200}
        />
        <div className="flex relative flex-col sm:flex-row  py-5 px-8 items-center  gap-8 w-full">
          <div className="flex flex-col w-full items-center justify-evenly">
            <h2 className="font-bold text-3xl mb-5">Operação Lua de mel</h2>
            <p>
              Quer ajudar a escrever nossa história de amor em Gramado? <br />
              Mande um PIX e prometemos que vamos gastar tudo <br /> em fondue e
              vinho... e um pouquinho na viagem
            </p>
            <Image
              className="-mt-32"
              src={carro}
              alt="logo"
              width={400}
              height={200}
            />
          </div>
          <div className=" flex flex-col gap-2">
            <Image src={apoioIcon} alt="apoio" width={100} height={450} />

            <div className="h-36 w-36 border-4 border-black p-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png"
                alt=""
              />
            </div>
            <Button
              onClick={handleCopyPix}
              className="bg-slate-50 w-36 text-gray-900"
            >
              <Copy />
              copie a chave pix
            </Button>
            <div className=" flex items-center gap-2">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/pix.png"
                alt="pix"
              />
              <small>
                {' '}
                Faça um PIX e <br /> garanta nossa sobrevivência romântica!
              </small>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col  py-5 px-8 items-center justify-between w-full max-w-screen-lg bg-slate-50">
        <div className="flex flex-col w-full h-full items-center justify-evenly gap-10 bgr ">
          <div>
            <div className="relative w-full h-[360px] sm:h-[460px]">
              <Image src={fullPlanta} alt="logo" width={640} height={640} />

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-3xl shadow-lg">
                <div className="w-full flex flex-col gap-2 px-8 ">
                  <h3 className="text-xl md:text-3xl text-center">
                    Ansiosos para <br /> comemorar com você!
                  </h3>
                  <Button className=" rounded-full bg-transparent border md:text-xl px-5 md:py-8  ">
                    <Link href="/presence">confirme sua presença</Link>
                  </Button>
                  <strong className="md:text-2xl text-center">
                    Gentileza confirmar presença até <br /> 31 de Janeiro
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full flex sm:flex-row flex-col-reverse items-center justify-center  gap-4">
            <div className=" w-2/4 flex-col flex ">
              <ul>
                <li>AV Afonso vaz de melo 465, Lado B</li>
                <li>Via Shopping</li>
                <li>barreiro</li>
              </ul>
              <div className=" flex gap-3">
                <a
                  title="abrir com waze"
                  className="text-blue-500"
                  href="https://waze.com/ul?ll=-19.975409528642405,-44.019532295626284&navigate=yes"
                  target="_blank"
                >
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/waze.png"
                    alt="waze"
                  />
                </a>

                <a
                  className="text-blue-500"
                  title="abrir com google maps"
                  href="https://www.google.com/maps/dir/?api=1&destination=-19.975409528642405,-44.019532295626284"
                  target="_blank"
                >
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/google-maps.png"
                    alt="google-maps"
                  />
                </a>
              </div>
              <Image src={logo} alt="logo" width={150} height={450} />
            </div>
            <iframe
              className="w-full h-80  "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.1384092266614!2d-44.0018731242077!3d-19.968321878880087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690aace0f707d%3A0x73d13c1d169cf3cf!2sAv.%20Afonso%20Vaz%20de%20Melo%2C%20465%20-%20Barreiro%2C%20Belo%20Horizonte%20-%20MG%2C%2030620-000!5e0!3m2!1spt-BR!2sbr!4v1699802679827!5m2!1spt-BR!2sbr"
            ></iframe>
          </div>
        </div>
      </section>
      <Toaster />
    </main>
  )
}
