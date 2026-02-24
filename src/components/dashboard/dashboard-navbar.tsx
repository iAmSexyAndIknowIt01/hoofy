"use client"

type Props = {
  active: string
  setActive: (value: string) => void
  onLogout: () => void
}

export function DashboardNavbar({ active, setActive, onLogout }: Props) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-neutral-900 px-6 py-4">
      <div className="text-xl font-bold text-orange-500">🏀 Hoopy</div>

      <div className="flex gap-6">
        {["events", "players", "profile"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`capitalize transition ${
              active === tab
                ? "text-orange-500 font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <button
        onClick={onLogout}
        className="rounded-lg bg-orange-500 px-4 py-2 text-black font-semibold"
      >
        Logout
      </button>
    </div>
  )
}