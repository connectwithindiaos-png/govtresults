import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default function handler() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1A1A2E',
        fontFamily: 'sans-serif',
      }}>
        <div style={{
          width: 120,
          height: 120,
          borderRadius: 24,
          background: '#E85D04',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 24,
          fontSize: 64,
          fontWeight: 700,
          color: 'white',
        }}>SR</div>
        <div style={{ fontSize: 48, fontWeight: 700, color: 'white', marginBottom: 8 }}>
          GovtJobsIndia.online
        </div>
        <div style={{ fontSize: 24, color: '#E85D04', marginBottom: 16 }}>
          India's No.1 Government Job Portal
        </div>
        <div style={{ fontSize: 16, color: '#888', textAlign: 'center', maxWidth: 800 }}>
          SSC CGL | UPSC | Banking | Railway | Defence | Police | Teaching | State Govt Jobs
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
