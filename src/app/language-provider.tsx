"use client"

import { createContext, useState, useEffect } from "react"
import { dictionary } from "@/lib/dictionary"

export const LangContext = createContext<any>(null)

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [lang, setLang] = useState<"mn" | "jp">("mn")

  // 🔥 Page load үед хадгалсан хэл уншина
  useEffect(() => {
    const saved = localStorage.getItem("lang") as "mn" | "jp" | null
    if (saved) setLang(saved)
  }, [])

  // 🔥 Хэл солих үед localStorage-д хадгална
  const changeLang = (value: "mn" | "jp") => {
    setLang(value)
    localStorage.setItem("lang", value)
  }

  return (
    <LangContext.Provider
      value={{ lang, setLang: changeLang, t: dictionary[lang] }}
    >
      {children}
    </LangContext.Provider>
  )
}