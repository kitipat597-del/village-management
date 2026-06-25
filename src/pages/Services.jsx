import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { services } from '../data/siteData'

export default function Services() {
  return (
    <div>
      <section className="bg-navy-900 py-20 dark:bg-navy-950">
        <div className="section">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">บริการของเรา</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
            บริการบริหารจัดการครบวงจร
          </h1>
          <div className="gold-divider mt-4" />
          <p className="mt-4 max-w-2xl text-gray-300">
            ออกแบบแผนบริการให้เหมาะกับขนาดและความต้องการของแต่ละโครงการ พร้อมราคาที่โปร่งใส
            ปรับเปลี่ยนได้ตามขอบเขตงานจริง
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section space-y-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="grid gap-8 rounded-2xl border border-navy-100 bg-white p-8 shadow-sm dark:border-navy-800 dark:bg-navy-900 lg:grid-cols-3"
            >
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-gold-500 dark:bg-navy-800">
                    <Icon name={['building', 'finance', 'shield', 'building', 'shield', 'finance'][idx % 6]} className="h-6 w-6" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-navy-900 dark:text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="mt-4 text-navy-600 dark:text-gray-400">{service.desc}</p>
                <ul className="mt-5 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-navy-600 dark:text-gray-300">
                      <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start justify-center rounded-xl bg-navy-50 p-6 dark:bg-navy-800/60 lg:items-center lg:text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 dark:text-gray-400">
                  อัตราค่าบริการ
                </p>
                <p className="mt-2 font-serif text-2xl font-bold text-gold-600 dark:text-gold-400">
                  {service.price}
                </p>
                <p className="mt-1 text-xs text-navy-400 dark:text-gray-500">*ราคาขึ้นอยู่กับขนาดและขอบเขตของโครงการ</p>
                <Link to="/contact" className="btn-primary mt-5 w-full lg:w-auto">
                  ขอใบเสนอราคา
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="section">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-gold-500/30 bg-gradient-to-r from-navy-900 to-navy-800 px-8 py-14 text-center dark:from-navy-800 dark:to-navy-900">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              ไม่แน่ใจว่าโครงการของคุณต้องการบริการแบบใด?
            </h2>
            <p className="max-w-2xl text-gray-300">
              ทีมงานของเราพร้อมลงพื้นที่สำรวจและจัดทำแผนบริการพร้อมใบเสนอราคาที่เหมาะสมกับโครงการของคุณโดยไม่มีค่าใช้จ่าย
            </p>
            <Link to="/contact" className="btn-primary">
              ติดต่อขอคำปรึกษา
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
