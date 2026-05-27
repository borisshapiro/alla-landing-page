import { ImageResponse } from 'next/og';

export const alt = 'Alla Shapiro — Fractional VP R&D & Advisory | RNDQueen';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0b1120 0%, #1a2344 55%, #0b1120 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '68px 80px',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Decorative right-side orb (solid, no filter in satori) */}
        <div
          style={{
            position: 'absolute',
            right: 180,
            top: 80,
            width: 340,
            height: 340,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(127,92,198,0.35) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Brand label */}
        <div
          style={{
            color: '#9b86e9',
            fontSize: 15,
            letterSpacing: '0.28em',
            fontWeight: 600,
            marginBottom: 28,
            display: 'flex',
          }}
        >
          RNDQUEEN
        </div>

        {/* Name */}
        <div
          style={{
            color: '#ffffff',
            fontSize: 66,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 18,
            display: 'flex',
          }}
        >
          Alla Shapiro
        </div>

        {/* Title */}
        <div
          style={{
            color: '#c4b5fd',
            fontSize: 28,
            fontWeight: 600,
            marginBottom: 32,
            display: 'flex',
          }}
        >
          Fractional VP R&D & Advisory
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#94a3b8',
            fontSize: 19,
            lineHeight: 1.7,
            display: 'flex',
          }}
        >
          20+ years leading global engineering teams · Israel & worldwide
        </div>

        {/* Stat pills */}
        <div style={{ display: 'flex', gap: 16, marginTop: 44 }}>
          {[
            { value: '20+ yrs', label: 'R&D experience' },
            { value: '< 2 weeks', label: 'Start time' },
            { value: '3 continents', label: 'Coverage' },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 14,
                padding: '14px 22px',
              }}
            >
              <span style={{ color: '#ffffff', fontSize: 20, fontWeight: 800 }}>
                {s.value}
              </span>
              <span style={{ color: '#64748b', fontSize: 12, marginTop: 4 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div
          style={{
            position: 'absolute',
            bottom: 52,
            left: 80,
            background: '#7f5cc6',
            color: '#ffffff',
            borderRadius: 999,
            padding: '13px 30px',
            fontSize: 16,
            fontWeight: 600,
            display: 'flex',
          }}
        >
          Book a free intro call
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 80,
            color: '#9b86e9',
            fontSize: 17,
            display: 'flex',
          }}
        >
          rndqueen.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
