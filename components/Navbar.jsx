
'use client'
import { useState } from 'react'
import Link from 'next/link'

const NAV = [
  { href: '/',             label: 'Tất cả' },
  { href: '/?loai=Body',  label: 'Body' },
  { href: '/?loai=Lens',  label: 'Lens' },
  { href: '/thuong-hieu', label: 'Thương hiệu' },
  { href: '/pre-order',   label: 'Pre-order' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 200,
        background: 'rgba(247,245,242,0.96)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(16px)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 58, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{ width: 28, height: 28, background: 'var(--ink)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3.5" stroke="white" strokeWidth="1.5"/>
                <path d="M2 5.5h1.5L5 3.5h6l1.5 2H14a1 1 0 011 1v5a1 1 0 01-1 1H2a1 1 0 01-1-1v-5a1 1 0 011-1z" stroke="white" strokeWidth="1.2" fill="none"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600, letterSpacing: 0.2 }}>Hẻm Camera</span>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {NAV.map(n => (
              <Link key={n.href} href={n.href}
                style={{ padding: '6px 14px', fontSize: 13.5, fontWeight: 500, color: 'var(--muted)', borderRadius: 20, transition: 'all .15s' }}
                onMouseOver={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.background = 'rgba(0,0,0,0.06)' }}
                onMouseOut={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'transparent' }}>
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a href="https://zalo.me/0000000000" target="_blank" rel="noreferrer"
              className="desktop-only"
              style={{ background: 'var(--ink)', color: '#fff', padding: '8px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600, letterSpacing: 0.2, transition: 'opacity .15s' }}
              onMouseOver={e => e.currentTarget.style.opacity = '.8'}
              onMouseOut={e => e.currentTarget.style.opacity = '1'}>
              Liên hệ Zalo
            </a>
            <button onClick={() => setOpen(o => !o)} className="hamburger"
              style={{ display: 'none', background: 'none', border: '1px solid var(--border)', padding: '6px 10px', borderRadius: 6, fontSize: 18, lineHeight: 1 }}>
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="mobile-menu" style={{
          position: 'fixed', inset: '58px 0 0 0', background: 'var(--bg)',
          zIndex: 199, display: 'flex', flexDirection: 'column',
          padding: '8px 0', borderTop: '1px solid var(--border)',
          overflowY: 'auto',
        }}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
              style={{ padding: '16px 24px', fontSize: 17, fontWeight: 500, borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-serif)' }}>
              {n.label}
            </Link>
          ))}
          <div style={{ padding: '20px 24px' }}>
            <a href="https://zalo.me/0000000000" target="_blank" rel="noreferrer"
              style={{ display: 'block', background: '#0068ff', color: '#fff', padding: '14px', borderRadius: 8, textAlign: 'center', fontWeight: 700 }}>
              💬 Zalo ngay
            </a>
          </div>
        </div>
      )}
    </>
  )
}