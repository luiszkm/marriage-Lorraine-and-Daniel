'use client'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { SectionContent } from '@/components/sectionContent'
import { Button } from '@/components/ui/button'
import eventDataJson from '@/../marriageList.json'
import { useRouter } from 'next/navigation'

export default function Presence() {
  const guestList = eventDataJson.passwords
  const [password, setPassword] = useState('')

  const {push} = useRouter()

  function VerifyPassword (){
    const guest = guestList.find(i => i.password === password.toLowerCase())
    if(guest){
      push(`/${password.toLowerCase()}`)
     
    }else{
      alert('senha incorreta')
    }


  }


  useEffect(() => {

  }, [password])
  return (
    <main className="p-2 flex flex-col items-center gap-2">
      <SectionContent>
        <h1 className="font-bold text-2xl">Confirme sua presença</h1>
password{password}
        <p>Para confirmar sua presença, por favor, Digite a Palavra magica</p>

        <div className='flex gap-4 items-center'>
          <Input
            onChange={e => setPassword(e.target.value)}
            placeholder="Digite sua palavra chave"
            className="w-[350px]"
          />
          <Button onClick={VerifyPassword}
           className=''>Confirmar</Button>
        </div>
      </SectionContent>
    </main>
  )
}
