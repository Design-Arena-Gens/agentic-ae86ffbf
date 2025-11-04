export default function HomePage() {
  return (
    <main style={{
      minHeight: '100svh',
      display: 'grid',
      placeItems: 'center',
      padding: '2rem'
    }}>
      <section style={{
        maxWidth: 720,
        width: '100%',
        background: 'white',
        color: '#0f172a',
        borderRadius: 16,
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(2, 6, 23, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.25rem', lineHeight: 1.2, margin: 0 }}>Hello ??</h1>
        <p style={{ marginTop: '0.75rem', fontSize: '1.125rem', opacity: 0.8 }}>
          Your Next.js app is live. Deployed on Vercel.
        </p>
        <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer" style={{
            padding: '0.675rem 0.9rem', borderRadius: 12, background: '#0ea5e9', color: 'white', textDecoration: 'none'
          }}>Next.js Docs</a>
          <a href="https://vercel.com/docs" target="_blank" rel="noreferrer" style={{
            padding: '0.675rem 0.9rem', borderRadius: 12, background: '#22c55e', color: 'white', textDecoration: 'none'
          }}>Vercel Docs</a>
        </div>
      </section>
      <svg aria-hidden width="0" height="0">
        <filter id="bg">
          <feTurbulence type="fractalNoise" baseFrequency="0.007" numOctaves="2" />
          <feColorMatrix type="saturate" values="0.3" />
          <feBlend mode="screen" />
        </filter>
      </svg>
      <div style={{
        position: 'fixed', inset: 0, zIndex: -1,
        background: 'radial-gradient(1200px 600px at 10% -10%, #dbeafe 0%, transparent 40%), radial-gradient(1200px 600px at 100% 0%, #fee2e2 0%, transparent 40%), radial-gradient(1200px 600px at 50% 110%, #dcfce7 0%, transparent 40%)',
        filter: 'url(#bg)'
      }} />
    </main>
  );
}
