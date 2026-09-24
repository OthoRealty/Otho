import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'OTHO Realty — Real Estate. With a clearer perspective.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0B1222',
          position: 'relative',
        }}
      >
        {/* Top gold accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: '#C5A25D',
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            padding: '48px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontFamily: 'serif',
              fontWeight: 600,
              color: 'white',
              letterSpacing: '-0.02em',
              margin: '0 0 24px 0',
            }}
          >
            OTHO
          </h1>
          <p
            style={{
              fontSize: '24px',
              fontFamily: 'sans-serif',
              fontWeight: 300,
              color: '#8A8F98',
              margin: '0 0 48px 0',
            }}
          >
            Real Estate. With a clearer perspective.
          </p>
          <div
            style={{
              fontSize: '16px',
              fontFamily: 'monospace',
              fontWeight: 500,
              color: '#C5A25D',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Hyderabad's Premier Advisory
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
