import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Hẻm Camera — Máy ảnh cũ chất lượng',
  description: 'Mua bán máy ảnh cũ body, lens, phụ kiện nhập Nhật. Kiểm định kỹ, tình trạng thật, bảo hành rõ ràng.',
  keywords: 'máy ảnh cũ, mua máy ảnh cũ, sony cũ, fuji cũ, lens cũ, hẻm camera',
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
