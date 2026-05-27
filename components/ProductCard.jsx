import Link from 'next/link'

const fmt = n => new Intl.NumberFormat('vi-VN').format(n || 0) + ' ₫'

// Condition badge color based on tinh_trang text
function conditionStyle(tinh_trang = '') {
  const t = tinh_trang.toLowerCase()
  if (t.includes('new') || t.includes('98') || t.includes('99')) 
    return { bg: '#dcfce7', color: '#15803d' }
  if (t.includes('95') || t.includes('96') || t.includes('97') || t.includes('đẹp'))
    return { bg: '#dbeafe', color: '#1d4ed8' }
  if (t.includes('90') || t.includes('tốt'))
    return { bg: '#fef9c3', color: '#854d0e' }
  return { bg: '#f3f4f6', color: '#4b5563' }
}

export default function ProductCard({ item }) {
  const cStyle = conditionStyle(item.tinh_trang)

  return (
    <Link href={`/san-pham/${item.slug}`}>
      <article style={{
        background: 'var(--white)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r)',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        cursor: 'pointer',
      }}
        onMouseOver={e => { e.currentTarget.style.boxShadow = 'var(--shadow)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
        onMouseOut={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
      >
        {/* Image */}
        <div style={{ position: 'relative', aspectRatio: '3/2', background: '#f0ede8', overflow: 'hidden' }}>
          {item.image_url ? (
            <img src={item.image_url} alt={item.product_name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.35s ease' }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity="0.2">
                <rect x="4" y="12" width="40" height="28" rx="4" stroke="#1c1b18" strokeWidth="2"/>
                <circle cx="24" cy="26" r="8" stroke="#1c1b18" strokeWidth="2"/>
                <rect x="16" y="8" width="8" height="5" rx="1.5" stroke="#1c1b18" strokeWidth="2"/>
              </svg>
            </div>
          )}

          {/* Condition badge — top left, like MPB */}
          {item.tinh_trang && (
            <div style={{
              position: 'absolute', top: 10, left: 10,
              background: cStyle.bg, color: cStyle.color,
              fontSize: 11, fontWeight: 700,
              padding: '3px 9px', borderRadius: 20,
              letterSpacing: 0.3,
            }}>
              {item.tinh_trang.split(' ').slice(0, 3).join(' ')}
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: '12px 14px 14px' }}>
          <div style={{ fontSize: 10.5, color: 'var(--faint)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 4 }}>
            {item.loai}{item.nguon_mua ? ` · ${item.nguon_mua}` : ''}
          </div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 15.5, fontWeight: 600, lineHeight: 1.35, marginBottom: 10, color: 'var(--ink)' }}>
            {item.product_name}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', letterSpacing: -0.3 }}>
              {fmt(item.expected_price)}
            </span>
            <span style={{ fontSize: 11, color: 'var(--green)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 6, height: 6, background: 'var(--green)', borderRadius: '50%', display: 'inline-block' }}/>
              Còn hàng
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}