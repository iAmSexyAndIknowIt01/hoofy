"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar"
import { MobileBottomNav } from "@/components/dashboard/mobile-bottom-nav"
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
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <DashboardNavbar
          active={activeTab}
          setActive={setActiveTab}
          onLogout={handleLogout}
        />
      </div>

      <main className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10 pb-24 md:pb-10">
        {activeTab === "events" && <EventsSection />}
        {activeTab === "players" && <PlayersSection />}
        {activeTab === "profile" && <ProfileSection />}
      </main>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden">
        <MobileBottomNav
          active={activeTab}
          setActive={setActiveTab}
          onLogout={handleLogout}
        />
      </div>

    </div>
  )
}