'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const NAV = [
    { href: '/',             label: 'Tất cả' },
    { href: '/?loai=Body',  label: 'Body' },
    { href: '/?loai=Lens',  label: 'Lens' },
    { href: '/thuong-hieu', label: 'Thương hiệu' },
    { href: '/pre-order',   label: 'Pre-order' },
  ]

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(250,250,248,0.93)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(14px)',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 20px',
          height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            onClick={() => setMenuOpen(false)}>
            <span style={{ fontSize: 20 }}>📷</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700 }}>Hẻm Camera</span>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 13, fontWeight: 500 }}>
            {NAV.map(n => (
              <Link key={n.href} href={n.href}
                style={{ color: 'var(--muted)', transition: 'color .15s' }}
                onMouseOver={e => e.currentTarget.style.color = 'var(--black)'}
                onMouseOut={e => e.currentTarget.style.color = 'var(--muted)'}>
                {n.label}
              </Link>
            ))}
            <a href="https://zalo.me/0000000000" target="_blank" rel="noreferrer"
              style={{ background: 'var(--black)', color: 'var(--white)', padding: '8px 18px', borderRadius: 6, fontWeight: 600 }}>
              Liên hệ
            </a>
          </nav>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(o => !o)} className="hamburger"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, padding: 8 }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, bottom: 0,
          background: 'var(--white)', zIndex: 99,
          display: 'flex', flexDirection: 'column', padding: '24px 20px', gap: 4,
          borderTop: '1px solid var(--border)',
        }}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)}
              style={{ padding: '16px 0', fontSize: 18, fontWeight: 600, fontFamily: 'var(--font-display)', borderBottom: '1px solid var(--border)' }}>
              {n.label}
            </Link>
          ))}
          <a href="https://zalo.me/0000000000" target="_blank" rel="noreferrer"
            style={{ marginTop: 24, background: '#0068ff', color: '#fff', padding: '15px 0', borderRadius: 8, textAlign: 'center', fontWeight: 700, fontSize: 16 }}>
            💬 Zalo ngay
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  )
}
