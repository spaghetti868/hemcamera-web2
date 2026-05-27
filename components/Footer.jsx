
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--white)', marginTop: 80 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '44px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40, marginBottom: 40 }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600, marginBottom: 10 }}>Hẻm Camera</div>
            <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 280 }}>
              Mua bán máy ảnh cũ nhập từ Nhật. Tình trạng ghi rõ, ảnh thật, kiểm định kỹ trước khi bán.
            </p>
          </div>

          {/* Pages */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 14 }}>Danh mục</div>
            {[
              ['/', 'Tất cả sản phẩm'],
              ['/?loai=Body', 'Body'],
              ['/?loai=Lens', 'Lens'],
              ['/thuong-hieu', 'Thương hiệu'],
              ['/pre-order', 'Pre-order'],
            ].map(([href, label]) => (
              <Link key={href} href={href}
                style={{ display: 'block', fontSize: 13.5, color: 'var(--muted)', marginBottom: 8, transition: 'color .15s' }}
                onMouseOver={e => e.currentTarget.style.color = 'var(--ink)'}
                onMouseOut={e => e.currentTarget.style.color = 'var(--muted)'}>
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 14 }}>Liên hệ</div>
            {[
              ['https://zalo.me/0000000000', 'Zalo'],
              ['https://m.me/hemcamera', 'Messenger'],
              ['https://facebook.com/hemcamera', 'Facebook'],
            ].map(([href, label]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ display: 'block', fontSize: 13.5, color: 'var(--muted)', marginBottom: 8, transition: 'color .15s' }}
                onMouseOver={e => e.currentTarget.style.color = 'var(--ink)'}
                onMouseOut={e => e.currentTarget.style.color = 'var(--muted)'}>
                {label} ↗
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <span style={{ fontSize: 12, color: 'var(--faint)' }}>© 2026 Hẻm Camera. Hàng nhập khẩu từ Nhật Bản.</span>
          <span style={{ fontSize: 12, color: 'var(--faint)' }}>hemcamera.com</span>
        </div>
      </div>
    </footer>
  )
}