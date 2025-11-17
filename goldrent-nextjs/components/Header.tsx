"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);

  return (
    <header className="header sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-link">
              Home
            </Link>

            {/* Offerte Noleggio Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOffersOpen(true)}
              onMouseLeave={() => setOffersOpen(false)}
            >
              <button className="nav-link flex items-center">
                Offerte Noleggio
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {offersOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link
                    href="/prodotti?category=lungo-termine"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    Noleggio Lungo Termine
                  </Link>
                  <Link
                    href="/prodotti?category=pronta-consegna"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    Pronta Consegna
                  </Link>
                  <Link
                    href="/prodotti?category=no-crif"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    No Crif
                  </Link>
                  <Link
                    href="/prodotti?category=be-free"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    Be Free
                  </Link>
                  <Link
                    href="/prodotti?category=miles"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    Miles
                  </Link>
                  <Link
                    href="/prodotti?category=veicoli-commerciali"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    Veicoli Commerciali
                  </Link>
                </div>
              )}
            </div>

            <Link href="/chi-siamo" className="nav-link">
              Chi Siamo
            </Link>
            <Link href="/news" className="nav-link">
              News
            </Link>
            <Link
              href="/convenzione-leonardo"
              className="bg-accent-red text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all font-semibold text-sm"
            >
              CONVENZIONE LEONARDO
            </Link>
            <Link href="/contatti" className="nav-link">
              Contattaci
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+393290092394" className="text-white hover:text-gray-300">
              <span className="text-sm">📞 329 00 92 394</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/prodotti"
              className="block py-2 nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tutti i Prodotti
            </Link>
            <Link
              href="/chi-siamo"
              className="block py-2 nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chi Siamo
            </Link>
            <Link
              href="/news"
              className="block py-2 nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="/convenzione-leonardo"
              className="block py-2 bg-accent-red text-white px-3 rounded font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONVENZIONE LEONARDO
            </Link>
            <Link
              href="/contatti"
              className="block py-2 nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contattaci
            </Link>
            <a href="tel:+393290092394" className="block py-2 text-gray-300">
              📞 329 00 92 394
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
