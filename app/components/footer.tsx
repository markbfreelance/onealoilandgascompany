"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        borderTop: "1px solid rgba(0,0,0,0.1)",
        padding: "3rem clamp(1.5rem, 5vw, 4rem)",
        background: "#ffffff",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Left */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Image
            src="/logo.png"
            alt="O'Neal Oil & Gas Company"
            width={120}
            height={34}
          />
          <span
            style={{
              fontSize: "0.8rem",
              color: "#666",
            }}
          >
            © {new Date().getFullYear()} O&apos;Neal Oil &amp; Gas Company. All rights
            reserved.
          </span>
        </div>

        {/* Right */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          <a
            href="#hero"
            style={{
              color: "#666",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#666")
            }
          >
            Home
          </a>
          <a
            href="#about"
            style={{
              color: "#666",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#666")
            }
          >
            About
          </a>
          <a
            href="#contact"
            style={{
              color: "#666",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#666")
            }
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
