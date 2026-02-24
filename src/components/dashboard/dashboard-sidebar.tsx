"use client"

import { Calendar, Users, User, LogOut } from "lucide-react"

type Props = {
  active: string
  setActive: (value: string) => void
  onLogout: () => void
}

export function DashboardSidebar({ active, setActive, onLogout }: Props) {
  const items = [
    { id: "events", label: "Events", icon: <Calendar size={18} /> },
    { id: "players", label: "Players", icon: <Users size={18} /> },
    { id: "profile", label: "Profile", icon: <User size={18} /> },
  ]

  return (
    <aside className="w-64 border-r border-white/10 bg-neutral-900 p-6 flex flex-col justify-between">

      <div>
        <h1 className="mb-10 text-2xl font-bold text-orange-500">
          🏀 Hoopy
        </h1>

        <nav className="space-y-3">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
                active === item.id
                  ? "bg-orange-500 text-black font-semibold"
                  : "text-neutral-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <button
        onClick={onLogout}
        className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 font-semibold text-white"
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  )
}