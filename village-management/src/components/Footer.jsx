import { Link } from 'react-router-dom'
import { company } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-900 text-gray-300 dark:border-navy-800 dark:bg-navy-950">
      <div className="section grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy-800">
              <span className="font-serif text-xl font-bold text-gold-500">V</span>
            </div>
            <div className="leading-tight">
              <p className="font-serif text-base font-bold text-white">วิลเลจ แมนเนจเม้นท์</p>
              <p className="text-[11px] uppercase tracking-widest text-gold-400">Village Management Co., Ltd.</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            ผู้นำด้านการบริหารจัดการนิติบุคคลอาคารชุดและหมู่บ้านจัดสรร ด้วยมาตรฐานมืออาชีพมากว่า 18 ปี
          </p>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold-500">เมนู</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold-400">หน้าแรก</Link></li>
            <li><Link to="/about" className="hover:text-gold-400">เกี่ยวกับเรา</Link></li>
            <li><Link to="/services" className="hover:text-gold-400">บริการของเรา</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold-400">ผลงาน</Link></li>
            <li><Link to="/contact" className="hover:text-gold-400">ติดต่อเรา</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold-500">บริการหลัก</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>บริหารจัดการนิติบุคคล</li>
            <li>บัญชีและการเงิน</li>
            <li>รักษาความปลอดภัย</li>
            <li>ดูแลความสะอาด &amp; ภูมิทัศน์</li>
            <li>วิศวกรรมและซ่อมบำรุง</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold-500">ติดต่อเรา</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>{company.address}</li>
            <li>โทร: {company.phone}</li>
            <li>มือถือ: {company.mobile}</li>
            <li>อีเมล: {company.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800 py-6">
        <p className="section text-center text-xs text-gray-500">
          © {new Date().getFullYear()} {company.name}. สงวนลิขสิทธิ์ทุกประการ
        </p>
      </div>
    </footer>
  )
}
