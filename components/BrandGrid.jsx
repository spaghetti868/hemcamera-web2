'use client'
import { useState, useEffect } from 'react'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import ProductCard from './ProductCard'

export default function BrandGrid({ brand }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(
      collection(db, 'inventory_items'),
      where('status', '==', 'Available')
    )
    const unsub = onSnapshot(q, snap => {
      const data = snap.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .filter(i => i.slug && i.product_name?.toLowerCase().includes(brand.toLowerCase()))
        .sort((a, b) => (b.created_at?.seconds || 0) - (a.created_at?.seconds || 0))
      setItems(data)
      setLoading(false)
    })
    return () => unsub()
  }, [brand])

  if (loading) return <div style={{ textAlign: 'center', padding: 80, color: 'var(--muted)', fontSize: 14 }}>Đang tải…</div>
  if (!items.length) return <div style={{ textAlign: 'center', padding: 80, color: 'var(--muted)', fontSize: 14 }}>Hiện chưa có sản phẩm {brand} nào.</div>

  return (
    <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 22 }}>
      {items.map(item => <ProductCard key={item.id} item={item} />)}
    </div>
  )
}
