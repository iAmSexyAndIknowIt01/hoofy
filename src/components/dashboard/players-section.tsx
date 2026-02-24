export function PlayersSection() {
  const players = [
    { id: 1, name: "Teke", wins: 32, rating: 1580 },
    { id: 2, name: "Batsa", wins: 28, rating: 1490 },
    { id: 3, name: "Anar", wins: 24, rating: 1420 },
  ]

  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold">Player Rankings</h2>

      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left">
          <thead className="bg-neutral-900">
            <tr>
              <th className="p-4">Rank</th>
              <th className="p-4">Player</th>
              <th className="p-4">Wins</th>
              <th className="p-4">Rating</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p, i) => (
              <tr
                key={p.id}
                className="border-t border-white/10 hover:bg-white/5"
              >
                <td className="p-4 text-orange-500 font-bold">
                  #{i + 1}
                </td>
                <td className="p-4">{p.name}</td>
                <td className="p-4">{p.wins}</td>
                <td className="p-4">{p.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}