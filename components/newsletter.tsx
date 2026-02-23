"use client"

import { useState } from "react"
import { Send, Crosshair } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="newsletter" className="relative overflow-hidden bg-jungle py-20">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,159,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,159,0,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <div className="mb-6 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center border-2 border-saffron">
            <Crosshair className="h-6 w-6 text-saffron" />
          </div>
        </div>
        <h2 className="mb-4 font-heading text-3xl font-bold uppercase tracking-tight text-flour md:text-4xl">
          JOIN THE OPERATION
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-flour/60">
          Subscribe to receive classified intel on new deployments, exclusive
          deals, and kitchen warfare strategies. Be the first operator to know.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 border border-saffron/30 bg-saffron/10 px-6 py-4">
            <span className="h-2 w-2 bg-saffron" />
            <span className="text-xs font-bold uppercase tracking-widest text-saffron">
              INTEL LINK ESTABLISHED. STANDBY FOR DISPATCH.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="email-input" className="sr-only">
              Email address
            </label>
            <input
              id="email-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-2 border-flour/20 bg-jungle-light px-4 py-3 text-xs uppercase tracking-widest text-flour placeholder:text-flour/30 focus:border-saffron focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-saffron px-6 py-3 text-xs font-bold uppercase tracking-widest text-jungle transition-colors hover:bg-saffron/90"
            >
              <Send className="h-3 w-3" />
              ENLIST
            </button>
          </form>
        )}

        <p className="mt-4 text-[10px] text-flour/30">
          NO SPAM. ONLY CLASSIFIED INTEL. UNSUBSCRIBE ANYTIME.
        </p>
      </div>
    </section>
  )
}
