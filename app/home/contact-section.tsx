"use client";

import { useInView } from "./use-in-view";

export default function ContactSection() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 4rem" }}
          className={inView ? "animate-fade-in-up" : ""}
        >
          <span className="text-label">Get in Touch</span>
          <h2 className="heading-lg" style={{ margin: "1rem 0 1rem" }}>
            Contact <span className="text-gradient">Us</span>
          </h2>
          <div className="gold-line" style={{ margin: "0 auto 1.5rem" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {/* Address */}
          <div
            className={`card ${inView ? "animate-fade-in-up delay-200" : ""}`}
            style={{
              textAlign: "center",
              padding: "2.5rem 2rem",
              opacity: inView ? undefined : 0,
            }}
          >
            <div
              style={{
                color: "var(--color-primary)",
                marginBottom: "1rem",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path
                  d="M18 3C12.477 3 8 7.477 8 13c0 8 10 20 10 20s10-12 10-20c0-5.523-4.477-10-10-10z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="18" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <h3
              className="heading-md"
              style={{ marginBottom: 8, fontSize: "1.1rem" }}
            >
              Visit Us
            </h3>
            <p className="text-body" style={{ fontSize: "0.95rem", marginBottom: 0 }}>
              675 N. Henderson Street
              <br />
              Fort Worth, Texas 76107
            </p>
          </div>

          {/* Phone */}
          <div
            className={`card ${inView ? "animate-fade-in-up delay-400" : ""}`}
            style={{
              textAlign: "center",
              padding: "2.5rem 2rem",
              opacity: inView ? undefined : 0,
            }}
          >
            <div
              style={{
                color: "var(--color-primary)",
                marginBottom: "1rem",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path
                  d="M7 9l4-4 5 5-3 3a16 16 0 009 9l3-3 5 5-4 4A20 20 0 017 9z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3
              className="heading-md"
              style={{ marginBottom: 8, fontSize: "1.1rem" }}
            >
              Call Us
            </h3>
            <a
              href="tel:8176258246"
              id="contact-phone"
              className="text-body"
              style={{
                fontSize: "0.95rem",
                textDecoration: "none",
                color: "var(--color-primary)",
                fontWeight: 600,
              }}
            >
              (817) 625-8246
            </a>
          </div>

          {/* Email */}
          <div
            className={`card ${inView ? "animate-fade-in-up delay-600" : ""}`}
            style={{
              textAlign: "center",
              padding: "2.5rem 2rem",
              opacity: inView ? undefined : 0,
            }}
          >
            <div
              style={{
                color: "var(--color-primary)",
                marginBottom: "1rem",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="4" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 10l14 9 14-9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              className="heading-md"
              style={{ marginBottom: 8, fontSize: "1.1rem" }}
            >
              Email Us
            </h3>
            <a
              href="mailto:OwnerRelations@ONealOil.com"
              id="contact-email"
              className="text-body"
              style={{
                fontSize: "0.95rem",
                textDecoration: "none",
                color: "var(--color-primary)",
                fontWeight: 600,
              }}
            >
              OwnerRelations@ONealOil.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
