"use client"

import { Calendar, Users, User, LogOut } from "lucide-react"

type Props = {
  active: string
  setActive: (value: string) => void
  onLogout: () => void
}

export function MobileBottomNav({ active, setActive, onLogout }: Props) {
  const items = [
    { id: "events", icon: <Calendar size={20} /> },
    { id: "players", icon: <Users size={20} /> },
    { id: "profile", icon: <User size={20} /> },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-neutral-900 backdrop-blur-md">

      <div className="flex items-center justify-around py-3">

        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex flex-col items-center gap-1 transition ${
              active === item.id
                ? "text-orange-500"
                : "text-neutral-400"
            }`}
          >
            {item.icon}
          </button>
        ))}

        <button
          onClick={onLogout}
          className="flex flex-col items-center text-red-500"
        >
          <LogOut size={20} />
        </button>

      </div>
    </div>
  )
}