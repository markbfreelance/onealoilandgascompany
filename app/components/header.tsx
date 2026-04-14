"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Legacy", href: "#legacy" },
    { label: "Owner Relations", href: "#owner-relations" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        id="main-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "0.75rem 0" : "1.25rem 0",
          background: scrolled
            ? "rgba(255,255,255,0.95)"
            : "rgba(255,255,255,0.9)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.1)"
            : "1px solid transparent",
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 clamp(1.5rem, 5vw, 4rem)",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            id="nav-logo"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <Image
              src="/logo.png"
              alt="O'Neal Oil & Gas Company"
              width={180}
              height={50}
            />
          </a>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            className="desktop-nav"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  color: "#1a1a1a",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.3s",
                  position: "relative",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#1a1a1a")
                }
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: "0.625rem 1.5rem", fontSize: "0.75rem" }}>
              Get in Touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
            }}
            className="mobile-toggle"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <span
                style={{
                  width: 24,
                  height: 2,
                  background: "var(--color-primary)",
                  borderRadius: 1,
                  transition: "all 0.3s",
                  transform: mobileOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              />
              <span
                style={{
                  width: 24,
                  height: 2,
                  background: "var(--color-primary)",
                  borderRadius: 1,
                  transition: "all 0.3s",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  width: 24,
                  height: 2,
                  background: "var(--color-primary)",
                  borderRadius: 1,
                  transition: "all 0.3s",
                  transform: mobileOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                }}
              />
            </div>
          </button>
        </div>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 900px) {
            .desktop-nav { display: none !important; }
            .mobile-toggle { display: flex !important; }
          }
        `}</style>
      </nav>

      {/* Mobile menu - outside nav */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(30px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            zIndex: 1000,
            animation: "fadeIn 0.3s ease",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "none",
              border: "none",
              color: "var(--color-primary)",
              fontSize: "2rem",
              cursor: "pointer",
              zIndex: 1001,
            }}
          >
            ✕
          </button>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "#1a1a1a",
                textDecoration: "none",
                fontSize: "1.5rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.3s",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
