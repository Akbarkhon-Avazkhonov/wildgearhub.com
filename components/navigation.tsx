"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, Search, User } from "lucide-react"

const navLinks = [
  { label: "SUPPLY DEPOT", href: "#products" },
  { label: "SPICE ARMORY", href: "#categories" },
  { label: "FIELD REPORTS", href: "#testimonials" },
  { label: "INTEL", href: "#newsletter" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-saffron bg-jungle text-flour">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-saffron bg-saffron">
            <span className="font-heading text-lg font-bold text-jungle">W</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-saffron leading-tight">
              WildGearHub
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-flour/60 leading-tight">
              Tactical Kitchen
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-flour/80 transition-colors hover:text-saffron"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-flour/70 transition-colors hover:text-saffron">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="text-flour/70 transition-colors hover:text-saffron">
            <User className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative text-flour/70 transition-colors hover:text-saffron"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center bg-chili text-[10px] font-bold text-flour">
              0
            </span>
          </button>
          <button
            className="lg:hidden text-flour"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-flour/10 bg-jungle-dark lg:hidden">
          <ul className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block border-b border-flour/5 py-3 text-xs font-bold uppercase tracking-widest text-flour/80 transition-colors hover:text-saffron"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
