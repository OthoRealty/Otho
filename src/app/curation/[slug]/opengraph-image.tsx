import { ImageResponse } from 'next/og';
import { PROJECTS } from '@/data/projects';

export const runtime = 'edge';
export const alt = 'OTHO Realty Project Review';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return [{ id: 'og', size, contentType, alt }];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    return new ImageResponse(
      (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#0B1222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: 'white', fontSize: 48, fontFamily: 'serif' }}>Project Not Found</div>
        </div>
      ),
      { ...size }
    );
  }
  
  const loadingFactor = Math.round((1 - project.carpet / project.sba) * 100);
  
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
          padding: '64px',
          color: 'white',
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

        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* Left section: Project Details */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '55%' }}>
            <div style={{ fontSize: '24px', color: '#8A8F98', marginBottom: '16px', fontFamily: 'sans-serif' }}>
              {project.developer}
            </div>
            <div style={{ fontSize: '64px', fontWeight: 600, fontFamily: 'serif', letterSpacing: '-0.02em', marginBottom: '24px', lineHeight: 1.1 }}>
              {project.name}
            </div>
            <div style={{ fontSize: '32px', color: '#C5A25D', fontFamily: 'sans-serif' }}>
              {project.locality}
            </div>
          </div>

          {/* Right section: Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '35%', borderLeft: '1px solid #1E2636', paddingLeft: '48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '32px' }}>
              <div style={{ fontSize: '16px', textTransform: 'uppercase', color: '#8A8F98', fontFamily: 'monospace', letterSpacing: '0.06em', marginBottom: '8px' }}>
                Otho Score
              </div>
              <div style={{ fontSize: '48px', color: 'white', fontWeight: 600, fontFamily: 'serif' }}>
                {project.score}/10
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '32px' }}>
              <div style={{ fontSize: '16px', textTransform: 'uppercase', color: '#8A8F98', fontFamily: 'monospace', letterSpacing: '0.06em', marginBottom: '8px' }}>
                Loading Factor
              </div>
              <div style={{ fontSize: '36px', color: 'white', fontFamily: 'sans-serif' }}>
                {loadingFactor}%
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '16px', textTransform: 'uppercase', color: '#8A8F98', fontFamily: 'monospace', letterSpacing: '0.06em', marginBottom: '8px' }}>
                Rate
              </div>
              <div style={{ fontSize: '36px', color: 'white', fontFamily: 'sans-serif' }}>
                ₹{project.rate.toLocaleString('en-IN')}/sqft
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '64px',
            left: '64px',
            fontSize: '16px',
            fontFamily: 'monospace',
            color: '#8A8F98',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            display: 'flex',
          }}
        >
          OTHO REALTY &mdash; INDEPENDENT REVIEW
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
