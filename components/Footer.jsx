export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '40px 24px', marginTop: 80, background: 'var(--white)' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 20,
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700 }}>📷 Hẻm Camera</div>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 5, lineHeight: 1.6 }}>
            Máy ảnh cũ chất lượng — nhập từ Nhật<br/>
            Kiểm định kỹ · Tình trạng thật · Bảo hành rõ
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
          <a href="https://zalo.me/0000000000" target="_blank" rel="noreferrer"
            style={{ color: 'var(--muted)' }}>Zalo</a>
          <a href="https://facebook.com/hemcamera" target="_blank" rel="noreferrer"
            style={{ color: 'var(--muted)' }}>Facebook</a>
        </div>
        <div style={{ fontSize: 12, color: 'var(--muted)' }}>© 2026 Hẻm Camera</div>
      </div>
    </footer>
  )
}
