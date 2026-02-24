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
    <div className="mx-auto w-full max-w-3xl px-2 sm:px-4">

      <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 sm:p-10 border border-white/10 shadow-xl">

        {/* EDIT BUTTON */}
        <button
          onClick={() => setEditMode(!editMode)}
          className="absolute right-4 top-4 flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black active:scale-95 transition"
        >
          {editMode ? <Save size={16} /> : <Pencil size={16} />}
          <span className="hidden sm:inline">
            {editMode ? "Save" : "Edit"}
          </span>
        </button>

        {/* HEADER */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-6">

          {/* AVATAR */}
          <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-orange-500 text-2xl sm:text-3xl font-bold text-black">
            {profile.name.charAt(0)}
          </div>

          {/* INFO */}
          <div className="mt-4 sm:mt-0 text-center sm:text-left">

            {editMode ? (
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="text-xl sm:text-2xl font-bold bg-neutral-800 px-3 py-2 rounded-lg w-full sm:w-auto text-center sm:text-left"
              />
            ) : (
              <h2 className="text-2xl sm:text-3xl font-bold">
                {profile.name}
              </h2>
            )}

            {editMode ? (
              <input
                name="position"
                value={profile.position}
                onChange={handleChange}
                className="mt-2 bg-neutral-800 px-3 py-2 rounded-lg w-full sm:w-auto text-center sm:text-left"
              />
            ) : (
              <p className="text-orange-500 mt-1 font-semibold">
                {profile.position}
              </p>
            )}
          </div>
        </div>

        {/* STATS */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">

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
    <div className="rounded-2xl bg-neutral-900 p-4 sm:p-6 text-center border border-white/10 active:scale-95 transition">

      <p className="text-xs sm:text-sm text-neutral-400 mb-1">
        {label}
      </p>

      {editMode ? (
        <input
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-neutral-800 px-3 py-2 rounded-lg text-center text-lg sm:text-xl font-bold"
        />
      ) : (
        <p className="text-xl sm:text-2xl font-bold text-orange-500">
          {value} {unit}
        </p>
      )}
    </div>
  )
}