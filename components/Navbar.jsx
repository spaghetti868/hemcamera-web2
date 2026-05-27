'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(250,250,248,0.92)',
      borderBottom: '1px solid var(--border)',
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <span style={{ fontSize: 20 }}>📷</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700, letterSpacing: 0.3 }}>
            Hẻm Camera
          </span>
        </Link>

        {/* Nav links */}
        <nav className="navbar-nav" style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 13, fontWeight: 500 }}>
          <Link href="/" style={{ color: 'var(--muted)', transition: 'color .15s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--black)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--muted)'}>Tất cả</Link>
          <Link href="/?loai=Body" style={{ color: 'var(--muted)', transition: 'color .15s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--black)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--muted)'}>Body</Link>
          <Link href="/?loai=Lens" style={{ color: 'var(--muted)', transition: 'color .15s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--black)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--muted)'}>Lens</Link>
          <a href="https://zalo.me/0824397799" target="_blank" rel="noreferrer"
            style={{
              background: 'var(--black)', color: 'var(--white)',
              padding: '8px 20px', borderRadius: 6, fontSize: 13, fontWeight: 600,
              transition: 'opacity .15s',
            }}
            onMouseOver={e => e.currentTarget.style.opacity = '.8'}
            onMouseOut={e => e.currentTarget.style.opacity = '1'}>
            Liên hệ
          </a>
        </nav>
      </div>
    </header>
  )
}
