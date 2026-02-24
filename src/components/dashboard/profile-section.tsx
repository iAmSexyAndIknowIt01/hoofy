"use client"

import { useState } from "react"
import { Pencil, Save } from "lucide-react"

export function ProfileSection() {
  const [editMode, setEditMode] = useState(false)

  const [profile, setProfile] = useState({
    name: "Teke",
    position: "SG",
    height: "182",
    weight: "82",
    rating: "1580",
  })

  const handleChange = (e: any) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  return (
    <div className="max-w-3xl">

      {/* PROFILE CARD */}
      <div className="rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-10 border border-white/10 shadow-xl">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 text-3xl font-bold text-black">
              {profile.name.charAt(0)}
            </div>

            <div>
              {editMode ? (
                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="text-2xl font-bold bg-neutral-800 px-3 py-1 rounded-lg"
                />
              ) : (
                <h2 className="text-3xl font-bold">
                  {profile.name}
                </h2>
              )}

              {editMode ? (
                <input
                  name="position"
                  value={profile.position}
                  onChange={handleChange}
                  className="mt-2 bg-neutral-800 px-3 py-1 rounded-lg"
                />
              ) : (
                <p className="text-orange-500 mt-1 font-semibold">
                  {profile.position}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={() => setEditMode(!editMode)}
            className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2 font-semibold text-black hover:scale-105 transition"
          >
            {editMode ? <Save size={18} /> : <Pencil size={18} />}
            {editMode ? "Save" : "Edit"}
          </button>
        </div>

        {/* STATS SECTION */}
        <div className="mt-10 grid grid-cols-3 gap-6">

          <StatCard
            label="Height"
            value={profile.height}
            unit="cm"
            editMode={editMode}
            name="height"
            onChange={handleChange}
          />

          <StatCard
            label="Weight"
            value={profile.weight}
            unit="kg"
            editMode={editMode}
            name="weight"
            onChange={handleChange}
          />

          <StatCard
            label="Rating"
            value={profile.rating}
            unit=""
            editMode={editMode}
            name="rating"
            onChange={handleChange}
          />

        </div>
      </div>
    </div>
  )
}

function StatCard({
  label,
  value,
  unit,
  editMode,
  name,
  onChange,
}: any) {
  return (
    <div className="rounded-2xl bg-neutral-900 p-6 text-center border border-white/10 hover:border-orange-500 transition">

      <p className="text-sm text-neutral-400 mb-2">
        {label}
      </p>

      {editMode ? (
        <input
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-neutral-800 px-3 py-2 rounded-lg text-center text-xl font-bold"
        />
      ) : (
        <p className="text-2xl font-bold text-orange-500">
          {value} {unit}
        </p>
      )}
    </div>
  )
}