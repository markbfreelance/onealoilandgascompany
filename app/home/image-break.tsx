"use client";

import Image from "next/image";

export default function ImageBreak() {
  return (
    <section
      style={{
        position: "relative",
        height: "50vh",
        minHeight: 300,
        overflow: "hidden",
      }}
    >
      <Image
        src="/services-bg.png"
        alt="Pipeline infrastructure"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, var(--color-bg-dark), rgba(10,12,16,0.4), var(--color-bg-dark))",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <blockquote
          style={{
            maxWidth: 600,
            textAlign: "center",
            padding: "0 2rem",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 500,
              fontStyle: "italic",
              color: "var(--color-text-primary)",
              lineHeight: 1.5,
              marginBottom: "1rem",
            }}
          >
            &ldquo;An entrepreneurial vision and perpetual focus on increasing
            the value and life of our production.&rdquo;
          </p>
          <div className="gold-line" style={{ margin: "0 auto 1rem" }} />
          <cite
            style={{
              fontStyle: "normal",
              fontSize: "0.85rem",
              color: "var(--color-primary)",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            O&apos;Neal Oil &amp; Gas
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
