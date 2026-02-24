"use client"

import { useContext } from "react"
import { LangContext } from "@/app/language-provider"

export function LanguageToggle() {
  const { lang, setLang } = useContext(LangContext)

  return (
    <button
      onClick={() =>
        setLang(lang === "mn" ? "jp" : "mn")
      }
      className="rounded-xl border px-4 py-2"
    >
      {lang === "mn" ? "JP" : "MN"}
    </button>
  )
}