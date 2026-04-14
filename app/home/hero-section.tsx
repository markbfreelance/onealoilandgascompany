"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/hero-bg.png"
          alt="Oil rig at sunset"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          preload
          quality={85}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,12,16,0.4) 0%, rgba(10,12,16,0.6) 40%, rgba(10,12,16,0.95) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "8rem clamp(1.5rem, 5vw, 4rem) 4rem",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <div
            className={loaded ? "animate-fade-in-up" : ""}
            style={{ opacity: loaded ? undefined : 0 }}
          >
            <span className="text-label" style={{ marginBottom: 16, display: "inline-block" }}>
              Established 1948 · Fort Worth, Texas
            </span>
          </div>

          <h1
            className={`heading-xl ${loaded ? "animate-fade-in-up delay-200" : ""}`}
            style={{
              margin: "0 0 1.5rem",
              opacity: loaded ? undefined : 0,
            }}
          >
            Pioneering{" "}
            <span className="text-gradient">Energy Excellence</span>{" "}
            for Over 75 Years
          </h1>

          <p
            className={`text-body ${loaded ? "animate-fade-in-up delay-400" : ""}`}
            style={{
              maxWidth: 540,
              marginBottom: "2.5rem",
              fontSize: "1.25rem",
              lineHeight: 1.7,
              color: "#ffffff",
              opacity: loaded ? undefined : 0,
            }}
          >
            An independent, family-owned company dedicated to the acquisition,
            exploration, development, and production of oil and natural gas
            properties across America&apos;s legacy basins.
          </p>

          <div
            className={loaded ? "animate-fade-in-up delay-600" : ""}
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              opacity: loaded ? undefined : 0,
            }}
          >
            <a href="#about" className="btn-primary" id="hero-cta-primary">
              Discover Our Story
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className="btn-outline" id="hero-cta-secondary">
              Contact Us
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={loaded ? "animate-fade-in-up delay-800" : ""}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1px",
            marginTop: "5rem",
            background: "var(--color-border-subtle)",
            border: "1px solid var(--color-border-subtle)",
            opacity: loaded ? undefined : 0,
          }}
        >
          {[
            { value: "75+", label: "Years of Heritage" },
            { value: "1948", label: "Year Founded" },
            { value: "TX", label: "Headquartered" },
            { value: "∞", label: "Commitment" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(10,12,16,0.7)",
                backdropFilter: "blur(10px)",
                padding: "1.5rem 2rem",
                textAlign: "center",
              }}
            >
              <div
                className="text-gradient"
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
