"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { EventsSection } from "@/components/dashboard/events-section"
import { PlayersSection } from "@/components/dashboard/players-section"
import { ProfileSection } from "@/components/dashboard/profile-section"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("events")
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  return (
    <div className="flex min-h-screen bg-neutral-950 text-white">

      <DashboardSidebar
        active={activeTab}
        setActive={setActiveTab}
        onLogout={handleLogout}
      />

      <main className="flex-1 p-10">
        {activeTab === "events" && <EventsSection />}
        {activeTab === "players" && <PlayersSection />}
        {activeTab === "profile" && <ProfileSection />}
      </main>
    </div>
  )
}