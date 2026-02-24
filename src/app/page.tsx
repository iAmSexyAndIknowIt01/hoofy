"use client"

import { MoveRight, Users, Calendar, Trophy, Menu } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { LangContext } from "./language-provider"
import { useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { FeatureCard } from "@/components/feature-card"
import { Stat } from "@/components/stat"

export default function Home() {
  const { t } = useContext(LangContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) setIsLoggedIn(true)
  }, [])

  const handleJoin = () => {
    if (isLoggedIn) {
      router.push("/dashboard")
    } else {
      router.push("/auth")
    }
  }

  return (
    <main className="min-h-screen">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <div className="text-xl font-bold tracking-wide">
            🏀 Hoopy
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:text-orange-500 transition">
              Features
            </a>
            <a href="#stats" className="hover:text-orange-500 transition">
              Stats
            </a>
            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            {/* <ThemeToggle /> */}
            <button onClick={handleJoin} className="rounded-xl bg-orange-500 px-4 py-2 text-black font-semibold hover:opacity-90">
              {t.join}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-4 bg-black/90">
            <a href="#features" className="block">
              Features
            </a>
            <a href="#stats" className="block">
              Stats
            </a>
            <LanguageToggle />
            <ThemeToggle />
            <button onClick={handleJoin} className="w-full rounded-xl bg-orange-500 px-4 py-2 text-black font-semibold">
              {t.join}
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center pt-32">
        <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black" />
        <div className="relative z-10 max-w-4xl">
          
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            {t.heroTitle}
            <span className="block text-orange-500">
              {t.heroTitle_lastHalf}
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            {t.heroDesc}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button onClick={handleJoin} className="rounded-2xl bg-orange-500 px-8 py-3 font-semibold text-black transition hover:scale-105">
              {t.join}
            </button>
            <button className="flex items-center gap-2 rounded-2xl border border-white/30 px-8 py-3 font-semibold transition hover:bg-white/10">
              {t.more} <MoveRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Яагаад манай community вэ?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Calendar size={28} />}
              title="Game Scheduling"
              description="Pickup game үүсгэж, бусдыг урьж, оролцогчдыг хялбар удирдана."
            />
            <FeatureCard
              icon={<Users size={28} />}
              title="Player Matching"
              description="Баг бүрдүүлэх, эсвэл тоглогч хайх процессийг автоматжуулна."
            />
            <FeatureCard
              icon={<Trophy size={28} />}
              title="Tournament Hub"
              description="Тэмцээн зарлах, bracket удирдах, leaderboard үүсгэх."
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="px-6 py-20 text-center">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <Stat number="2,300+" label="Active Players" />
          <Stat number="121+" label="Weekly Games" />
          <Stat number="45+" label="Teams" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-orange-500 px-6 py-20 text-center text-black">
        <h2 className="text-3xl font-bold md:text-4xl">
          Дараагийн тоглолтондоо бэлэн үү?
        </h2>
        <p className="mt-4 text-lg">
          Өнөөдөр нэгдээд, court дээр уулзъя.
        </p>
        <button className="mt-8 rounded-2xl bg-black px-8 py-3 font-semibold text-white transition hover:scale-105">
          Одоо нэгдэх
        </button>
      </section>
    </main>
  )
}