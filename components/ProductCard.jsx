import Link from 'next/link'

const fmt = n => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n || 0)

export default function ProductCard({ item }) {
  return (
    <Link href={`/san-pham/${item.slug}`}>
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
      }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'translateY(-5px)'
          e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.1)'
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Ảnh */}
        <div style={{ aspectRatio: '4/3', background: '#f2f2f0', overflow: 'hidden', position: 'relative' }}>
          {item.image_url ? (
            <img
              src={item.image_url}
              alt={item.product_name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, opacity: 0.3 }}>📷</div>
          )}
        </div>

        {/* Nội dung */}
        <div style={{ padding: '13px 15px 15px' }}>
          <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 4 }}>
            {item.loai}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, lineHeight: 1.3, marginBottom: 5, color: 'var(--black)' }}>
            {item.product_name}
          </div>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 11, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {item.tinh_trang || '—'}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--gold)' }}>
              {fmt(item.expected_price)}
            </span>
            <span style={{ fontSize: 10, background: '#f0fdf4', color: '#15803d', padding: '3px 9px', borderRadius: 20, fontWeight: 700 }}>
              Còn hàng
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
