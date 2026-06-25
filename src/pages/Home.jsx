import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { company, homeServices, stats } from '../data/siteData'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 dark:bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 opacity-95" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-gold-500/5 blur-3xl" />

        <div className="section relative z-10 flex flex-col items-start gap-8 py-24 sm:py-32">
          <span className="rounded-full border border-gold-500/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold-400">
            Professional Property Management
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            บริหารจัดการนิติบุคคล<br />
            <span className="text-gold-500">อาคารชุดและหมู่บ้านจัดสรร</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-300">
            {company.tagline} — ดูแลทุกรายละเอียดด้วยทีมงานมืออาชีพ เพื่อคุณภาพชีวิตที่ดีของผู้พักอาศัย
            และมูลค่าทรัพย์สินที่ยั่งยืน
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              ติดต่อเรา
            </Link>
            <Link to="/services" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white">
              ดูบริการทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="section">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
              บริการของเรา
            </p>
            <h2 className="section-title mt-2">บริการหลักที่เราดูแลให้คุณ</h2>
            <div className="gold-divider mt-4" />
            <p className="section-subtitle">
              ครอบคลุมทุกด้านของการบริหารทรัพย์สิน ตั้งแต่งานบริหารนิติบุคคล บัญชี ไปจนถึงความปลอดภัยและภูมิทัศน์
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <div key={service.title} className="card">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-navy-900 text-gold-500 dark:bg-navy-800">
                  <Icon name={service.icon} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-navy-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-gray-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/services" className="text-sm font-semibold text-gold-600 hover:text-gold-500 dark:text-gold-400">
              ดูรายละเอียดบริการทั้งหมด &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-900 py-16 dark:bg-navy-800">
        <div className="section grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl font-bold text-gold-500 sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="section">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-gold-500/30 bg-gradient-to-r from-navy-900 to-navy-800 px-8 py-14 text-center dark:from-navy-800 dark:to-navy-900">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              พร้อมยกระดับการบริหารจัดการทรัพย์สินของคุณแล้วหรือยัง?
            </h2>
            <p className="max-w-2xl text-gray-300">
              ติดต่อทีมงานของเราเพื่อรับคำปรึกษาและใบเสนอราคา ไม่มีค่าใช้จ่ายในการประเมินเบื้องต้น
            </p>
            <Link to="/contact" className="btn-primary">
              นัดหมายปรึกษาฟรี
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
