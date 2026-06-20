"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/lib/data"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  // Escape closes mobile menu; lock body scroll while open
  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu()
    }
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isMenuOpen, closeMenu])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between max-w-5xl">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-muted-foreground font-normal">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-flex px-4 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-[transform,opacity] duration-200 [transition-timing-function:var(--ease-out)] active:scale-[0.97]"
        >
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-[transform,color] duration-200 [transition-timing-function:var(--ease-out)] active:scale-[0.97]"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation  -  persisted node, animates open/closed */}
      <div
        id="mobile-menu"
        data-open={isMenuOpen}
        className="mobile-menu md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
      >
        <div>
          <nav className="container mx-auto px-6 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex px-4 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-[transform,opacity] duration-200 [transition-timing-function:var(--ease-out)] active:scale-[0.97]"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
