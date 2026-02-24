export function EventsSection() {
  const dummyEvents = [
    { id: 1, title: "Sunday Pickup", date: "Mar 1", location: "UB Arena" },
    { id: 2, title: "3x3 Tournament", date: "Mar 10", location: "Shangri-La" },
  ]

  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold">Upcoming Events</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {dummyEvents.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl bg-linear-to-br from-neutral-900 to-neutral-800 p-6 border border-white/10 hover:border-orange-500 transition"
          >
            <h3 className="text-xl font-semibold text-orange-500">
              {event.title}
            </h3>

            <p className="mt-3 text-neutral-400">
              📅 {event.date}
            </p>
            <p className="text-neutral-400">
              📍 {event.location}
            </p>

            <button className="mt-5 rounded-lg bg-orange-500 px-4 py-2 font-semibold text-black hover:scale-105 transition">
              Join Game
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}