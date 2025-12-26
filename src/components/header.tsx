"use client"

import { useState } from "react"
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
          className="hidden md:inline-flex px-4 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
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
                  className="inline-flex px-4 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
