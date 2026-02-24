"use client"

import { Calendar, Users, User, LogOut } from "lucide-react"

type Props = {
  active: string
  setActive: (value: string) => void
  onLogout: () => void
}

export function DashboardNavbar({ active, setActive, onLogout }: Props) {
  const items = [
    { id: "events", label: "Events", icon: <Calendar size={18} /> },
    { id: "players", label: "Players", icon: <Users size={18} /> },
    { id: "profile", label: "Profile", icon: <User size={18} /> },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-xl font-bold text-orange-500">
          🏀 Hoopy
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 transition ${
                active === item.id
                  ? "bg-orange-500 text-black font-semibold"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 font-semibold text-white hover:scale-105 transition"
        >
          <LogOut size={16} />
          Logout
        </button>

      </div>
    </header>
  )
}