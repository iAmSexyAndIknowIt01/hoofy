export function Stat({
  number,
  label,
}: {
  number: string
  label: string
}) {
  return (
    <div>
      <h3 className="text-4xl font-bold text-orange-500">{number}</h3>
      <p className="mt-2 text-gray-400">{label}</p>
    </div>
  )
}