'use client'
import { CardAvatar } from '@/components/cardAvatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import guestsLists from '@/../guestsLists.json'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { SectionContent } from '@/components/sectionContent'

export default function Presence() {
  const guestList = guestsLists.guests
  const [search, setSearch] = useState('')
  const [filteredGuests, setFilteredGuests] = useState(guestList)

  useEffect(() => {
    const filteredGuests = guestList.filter(guest =>
      guest.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredGuests(filteredGuests)
  }, [search])
  return (
    <main className="p-2 flex flex-col items-center gap-2">
      <SectionContent>
        <h1 className="font-bold text-2xl">Confirme sua presença</h1>

        <p>
          Para confirmar sua presença, por favor, Digite a Palavra magica
        </p>

        <Input
          onChange={e => setSearch(e.target.value)}
          placeholder="Pesquise seu nome"
          className="w-[350px]"
        />
        <ScrollArea className="h-[500px] max-h-full w-[350px] p-2 rounded-md border  flex">
          {filteredGuests &&
            filteredGuests.map((guest, index) => (
              <CardAvatar
                key={index}
                id={guest.id}
                companions={guest.companions}
                name={guest.name}
                confirmed={guest.confirmed}
                photoUrl=""
              />
            ))}
        </ScrollArea>
      </SectionContent>
    </main>
  )
}
