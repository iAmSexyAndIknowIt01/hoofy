"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Fake login/register
    localStorage.setItem("user", "demo-user")

    router.push("/dashboard")
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 text-white px-6">
      <div className="w-full max-w-md rounded-2xl bg-neutral-900 p-8 shadow-lg">

        <h2 className="text-3xl font-bold text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-xl bg-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-xl bg-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-black hover:opacity-90"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-neutral-400">
          {isLogin ? "No account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-orange-500 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </main>
  )
}