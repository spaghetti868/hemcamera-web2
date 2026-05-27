import ProductGrid from '@/components/ProductGrid'

export const metadata = {
  title: 'Hẻm Camera — Máy ảnh cũ chất lượng',
  description: 'Mua bán máy ảnh cũ body, lens, phụ kiện nhập Nhật. Kiểm định kỹ, tình trạng thật, bảo hành rõ ràng.',
}

const FILTERS = [
  { label: 'Tất cả', value: null },
  { label: 'Body', value: 'Body' },
  { label: 'Lens', value: 'Lens' },
  { label: 'Flash', value: 'Flash' },
  { label: 'Tripod', value: 'Tripod' },
  { label: 'Other', value: 'Other' },
]

export default function Home({ searchParams }) {
  const loai = searchParams?.loai || null

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '52px 24px' }}>

      {/* Hero */}
      <div className="hero" style={{ marginBottom: 52, textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>
          Hàng nhập từ Nhật · Kiểm định kỹ
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 18 }}>
          Máy ảnh cũ<br />
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>chất lượng thật</em>
        </h1>
        <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
          Body · Lens · Phụ kiện — Tình trạng ghi rõ, ảnh thật, bảo hành minh bạch.
        </p>
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 36, flexWrap: 'wrap' }}>
        {FILTERS.map(f => {
          const active = loai === f.value
          return (
            <a
              key={f.label}
              href={f.value ? `/?loai=${f.value}` : '/'}
              style={{
                padding: '7px 20px', borderRadius: 24, fontSize: 13, fontWeight: 600,
                border: '1px solid var(--border)', transition: 'all .15s',
                background: active ? 'var(--black)' : 'transparent',
                color: active ? 'var(--white)' : 'var(--black)',
              }}
            >
              {f.label}
            </a>
          )
        })}
      </div>

      {/* Grid sản phẩm — real-time từ Firestore */}
      <ProductGrid loai={loai} />

      {/* CTA cuối trang */}
      <div style={{
        marginTop: 72, padding: '40px 32px', background: 'var(--black)', borderRadius: 16,
        textAlign: 'center', color: 'var(--white)',
      }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, marginBottom: 10 }}>
          Không thấy máy bạn cần?
        </h2>
        <p style={{ fontSize: 14, color: '#aaa', marginBottom: 24 }}>Nhắn mình — mình sẽ tìm hoặc báo khi có hàng về.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://zalo.me/0824397799" target="_blank" rel="noreferrer"
            style={{ background: '#0068ff', color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14 }}>
            💬 Nhắn Zalo
          </a>
          <a href="https://m.me/hemcamera" target="_blank" rel="noreferrer"
            style={{ background: '#fff', color: '#000', padding: '12px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14 }}>
            💬 Messenger
          </a>
        </div>
      </div>

    </div>
  )
}
