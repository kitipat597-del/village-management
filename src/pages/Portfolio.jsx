import { Link } from 'react-router-dom'
import { portfolio } from '../data/siteData'

const gradients = [
  'from-navy-700 to-navy-900',
  'from-navy-800 to-navy-950',
  'from-navy-600 to-navy-800',
  'from-navy-900 to-navy-950',
  'from-navy-700 to-navy-950',
  'from-navy-800 to-navy-900',
]

export default function Portfolio() {
  return (
    <div>
      <section className="bg-navy-900 py-20 dark:bg-navy-950">
        <div className="section">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">ผลงานของเรา</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
            โครงการที่ไว้วางใจให้เราดูแล
          </h1>
          <div className="gold-divider mt-4" />
          <p className="mt-4 max-w-2xl text-gray-300">
            ตัวอย่างโครงการอาคารชุดและหมู่บ้านจัดสรรที่บริษัทดูแลบริหารจัดการอยู่ในปัจจุบัน
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((project, idx) => (
              <div
                key={project.name}
                className="group overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition hover:shadow-lg dark:border-navy-800 dark:bg-navy-900"
              >
                <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${gradients[idx % gradients.length]} relative`}>
                  <span className="font-serif text-5xl font-bold text-gold-500/30">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">
                    {project.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-navy-900 dark:text-white">
                    {project.name}
                  </h3>
                  <div className="mt-3 flex flex-col gap-1 text-sm text-navy-500 dark:text-gray-400">
                    <p>จำนวนยูนิต: {project.units}</p>
                    <p>ที่ตั้ง: {project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="section">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-gold-500/30 bg-gradient-to-r from-navy-900 to-navy-800 px-8 py-14 text-center dark:from-navy-800 dark:to-navy-900">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              อยากให้โครงการของคุณเป็นโครงการต่อไปของเรา?
            </h2>
            <p className="max-w-2xl text-gray-300">
              ปรึกษาทีมงานของเราวันนี้ เพื่อรับการประเมินและข้อเสนอแผนบริหารจัดการที่เหมาะกับโครงการของคุณ
            </p>
            <Link to="/contact" className="btn-primary">
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
