"use client"

import { useState } from "react"
import { Pencil, Save, PlusCircle } from "lucide-react"

export function ProfileSection() {
  const [editMode, setEditMode] = useState(false)

  const user = {
    name: "Teke",
    role: "admin", // change to "player" to hide admin section
  }

  const [profile, setProfile] = useState({
    name: "Teke",
    position: "SG",
    height: "182",
    weight: "82",
    rating: "1580",
  })

  const [events, setEvents] = useState<any[]>([])

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
  })

  const handleChange = (e: any) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleEventChange = (e: any) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value })
  }

  const handleAddEvent = () => {
    if (!newEvent.title) return
    setEvents([...events, newEvent])
    setNewEvent({ title: "", date: "", location: "" })
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-3 sm:px-4 space-y-8">

      {/* PROFILE CARD */}
      <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 sm:p-10 border border-white/10 shadow-xl">

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

          <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-orange-500 text-2xl sm:text-3xl font-bold text-black">
            {profile.name.charAt(0)}
          </div>

          <div className="mt-4 sm:mt-0 text-center sm:text-left w-full">
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

      {/* ADMIN EVENT SECTION */}
      {user.role === "admin" && (
        <div className="rounded-3xl bg-neutral-900 p-6 sm:p-8 border border-white/10 shadow-lg">

          <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
            <PlusCircle size={20} className="text-orange-500" />
            Create Event
          </h3>

          <div className="grid gap-4 sm:grid-cols-3">
            <input
              name="title"
              placeholder="Event title"
              value={newEvent.title}
              onChange={handleEventChange}
              className="rounded-lg bg-neutral-800 px-4 py-2"
            />
            <input
              name="date"
              type="date"
              value={newEvent.date}
              onChange={handleEventChange}
              className="rounded-lg bg-neutral-800 px-4 py-2"
            />
            <input
              name="location"
              placeholder="Location"
              value={newEvent.location}
              onChange={handleEventChange}
              className="rounded-lg bg-neutral-800 px-4 py-2"
            />
          </div>

          <button
            onClick={handleAddEvent}
            className="mt-4 rounded-xl bg-orange-500 px-6 py-2 font-semibold text-black active:scale-95 transition"
          >
            Add Event
          </button>

          {/* EVENT LIST */}
          <div className="mt-8">
            <h4 className="text-md font-semibold mb-3 text-neutral-300">
              Event List
            </h4>

            {events.length === 0 ? (
              <div className="rounded-xl border border-dashed border-white/20 p-6 text-center text-neutral-400">
                Event байхгүй байна
              </div>
            ) : (
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-neutral-800 p-4 border border-white/10 hover:border-orange-500 transition"
                  >
                    <p className="font-semibold text-orange-500 text-lg">
                      {event.title}
                    </p>
                    <p className="text-sm text-neutral-400 mt-1">
                      📅 {event.date}
                    </p>
                    <p className="text-sm text-neutral-400">
                      📍 {event.location}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}
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