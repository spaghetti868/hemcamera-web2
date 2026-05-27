import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase'
import { notFound } from 'next/navigation'

const fmt = n => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n || 0)

// SEO metadata động
export async function generateMetadata({ params }) {
  const snap = await getDocs(query(collection(db, 'inventory_items'), where('slug', '==', params.slug)))
  if (snap.empty) return { title: 'Không tìm thấy' }
  const item = snap.docs[0].data()
  return {
    title: `${item.product_name} — Hẻm Camera`,
    description: item.description_public || `Mua ${item.product_name} cũ tại Hẻm Camera. Tình trạng: ${item.tinh_trang}. Giá: ${fmt(item.expected_price)}.`,
  }
}

export default async function ProductPage({ params }) {
  const snap = await getDocs(query(collection(db, 'inventory_items'), where('slug', '==', params.slug)))
  if (snap.empty) notFound()

  const item = { id: snap.docs[0].id, ...snap.docs[0].data() }
  if (item.status !== 'Available') notFound()

  const zaloMsg = encodeURIComponent(`Hỏi về: ${item.product_name}`)
  const messengerMsg = encodeURIComponent(`Hỏi về: ${item.product_name}`)

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 24px' }}>

      {/* Breadcrumb */}
      <a href="/" style={{ fontSize: 13, color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 32 }}>
        ← Tất cả sản phẩm
      </a>

      <div className="product-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>

        {/* Ảnh */}
        <div style={{ aspectRatio: '4/3', background: '#f2f2f0', borderRadius: 14, overflow: 'hidden' }}>
          {item.image_url ? (
            <img
              src={item.image_url}
              alt={item.product_name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, opacity: 0.2 }}>📷</div>
          )}
        </div>

        {/* Thông tin */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 6 }}>
              {item.loai} · {item.nguon_mua}
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, lineHeight: 1.2, marginBottom: 12 }}>
              {item.product_name}
            </h1>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, color: 'var(--gold)' }}>
              {fmt(item.expected_price)}
            </div>
          </div>

          {/* Specs */}
          <div style={{ background: '#f7f6f4', borderRadius: 10, padding: '14px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', fontSize: 13 }}>
            {[
              ['Tình trạng', item.tinh_trang],
              ['Phụ kiện', item.phu_kien],
              ['Serial', item.serial_number ? item.serial_number.slice(0, -3) + '***' : '—'],
              ['Nguồn', item.nguon_mua],
            ].map(([label, val]) => (
              <div key={label}>
                <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8 }}>{label}</div>
                <div style={{ fontWeight: 600, marginTop: 3 }}>{val || '—'}</div>
              </div>
            ))}
          </div>

          {/* Mô tả */}
          {item.description_public && (
            <p style={{ fontSize: 14, lineHeight: 1.75, color: '#555', borderLeft: '3px solid var(--gold)', paddingLeft: 14 }}>
              {item.description_public}
            </p>
          )}

          {/* CTA */}
          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            <a
              href={`https://zalo.me/0000000000?text=${zaloMsg}`}
              target="_blank" rel="noreferrer"
              style={{ flex: 1, background: '#0068ff', color: '#fff', padding: '14px 0', borderRadius: 8, textAlign: 'center', fontWeight: 700, fontSize: 15 }}>
              💬 Hỏi qua Zalo
            </a>
            <a
              href={`https://m.me/hemcamera?text=${messengerMsg}`}
              target="_blank" rel="noreferrer"
              style={{ flex: 1, background: 'var(--black)', color: 'var(--white)', padding: '14px 0', borderRadius: 8, textAlign: 'center', fontWeight: 700, fontSize: 15 }}>
              💬 Messenger
            </a>
          </div>

          <div style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>
            Giá đã bao gồm kiểm định · Bảo hành theo từng sản phẩm
          </div>
        </div>
      </div>
    </div>
  )
}
