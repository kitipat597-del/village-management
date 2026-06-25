import { Link } from 'react-router-dom'
import { team, values } from '../data/siteData'

export default function About() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-navy-900 py-20 dark:bg-navy-950">
        <div className="section">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">เกี่ยวกับเรา</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
            วิลเลจ แมนเนจเม้นท์ จำกัด
          </h1>
          <div className="gold-divider mt-4" />
          <p className="mt-4 max-w-2xl text-gray-300">
            ผู้เชี่ยวชาญด้านการบริหารจัดการนิติบุคคลอาคารชุดและหมู่บ้านจัดสรร ด้วยทีมงานมืออาชีพ
            และมาตรฐานการทำงานที่โปร่งใส เชื่อถือได้
          </p>
        </div>
      </section>

      {/* Company history */}
      <section className="py-20 sm:py-28">
        <div className="section grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
              ประวัติบริษัท
            </p>
            <h2 className="section-title mt-2">เส้นทางของเรา</h2>
            <div className="gold-divider mt-4" />
            <div className="mt-6 space-y-4 text-navy-600 dark:text-gray-300">
              <p>
                บริษัท วิลเลจ แมนเนจเม้นท์ จำกัด ก่อตั้งขึ้นในปี พ.ศ. 2551 ด้วยวิสัยทัศน์ที่ต้องการยกระดับมาตรฐาน
                การบริหารจัดการนิติบุคคลอาคารชุดและหมู่บ้านจัดสรรในประเทศไทย ให้มีความเป็นมืออาชีพ โปร่งใส
                และตอบสนองความต้องการของผู้พักอาศัยได้อย่างแท้จริง
              </p>
              <p>
                จากจุดเริ่มต้นด้วยทีมงานเพียงไม่กี่คน วันนี้เราเติบโตจนมีบุคลากรกว่า 400 คน ดูแลโครงการที่อยู่อาศัย
                มากกว่า 120 โครงการทั่วกรุงเทพมหานครและปริมณฑล ครอบคลุมหน่วยที่พักอาศัยมากกว่า 35,000 ยูนิต
              </p>
              <p>
                เราพัฒนาทีมงาน ระบบงาน และเทคโนโลยีอย่างต่อเนื่อง เพื่อให้ลูกบ้านและคณะกรรมการนิติบุคคล
                ไว้วางใจให้เราเป็นผู้ดูแลทรัพย์สินอันมีค่าของพวกเขา
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 self-start">
            {[
              { year: '2551', label: 'ก่อตั้งบริษัท' },
              { year: '2557', label: 'ขยายทีมงานกว่า 100 คน' },
              { year: '2563', label: 'เปิดตัวระบบจัดเก็บค่าส่วนกลางออนไลน์' },
              { year: '2569', label: 'บริหารโครงการกว่า 120 แห่ง' },
            ].map((item) => (
              <div key={item.year} className="card text-center">
                <p className="font-serif text-3xl font-bold text-gold-500">{item.year}</p>
                <p className="mt-2 text-sm text-navy-600 dark:text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive team */}
      <section className="bg-navy-50 py-20 dark:bg-navy-900/40 sm:py-28">
        <div className="section">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
            ทีมผู้บริหาร
          </p>
          <h2 className="section-title mt-2">ผู้นำที่อยู่เบื้องหลังความสำเร็จ</h2>
          <div className="gold-divider mt-4" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="card flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-navy-900 text-2xl font-serif font-bold text-gold-500 dark:bg-navy-800">
                  {member.name.split(' ')[1]?.charAt(0) || member.name.charAt(0)}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold-600 dark:text-gold-400">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-navy-500 dark:text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 sm:py-28">
        <div className="section">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
            ค่านิยมองค์กร
          </p>
          <h2 className="section-title mt-2">หลักการที่เรายึดถือ</h2>
          <div className="gold-divider mt-4" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <div key={value.title} className="card">
                <span className="font-serif text-4xl font-bold text-gold-500/40">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/contact" className="btn-primary">
              ร่วมงานกับเรา
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
