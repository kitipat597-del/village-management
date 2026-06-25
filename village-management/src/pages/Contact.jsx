import { useState } from 'react'
import Icon from '../components/Icon'
import { company } from '../data/siteData'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', project: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="bg-navy-900 py-20 dark:bg-navy-950">
        <div className="section">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">ติดต่อเรา</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
            พร้อมให้คำปรึกษาทุกข้อสงสัย
          </h1>
          <div className="gold-divider mt-4" />
          <p className="mt-4 max-w-2xl text-gray-300">
            ติดต่อทีมงานของเราเพื่อสอบถามข้อมูลบริการ ขอใบเสนอราคา หรือนัดหมายเข้าพบที่สำนักงาน
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section grid gap-12 lg:grid-cols-5">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <h2 className="section-title">ส่งข้อความถึงเรา</h2>
            <div className="gold-divider mt-4" />

            {submitted ? (
              <div className="mt-8 rounded-xl border border-gold-500/40 bg-gold-50 p-6 text-navy-800 dark:bg-navy-800 dark:text-gold-300">
                <p className="font-semibold">ขอบคุณสำหรับข้อความของคุณ!</p>
                <p className="mt-1 text-sm">ทีมงานของเราจะติดต่อกลับโดยเร็วที่สุด</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-navy-700 dark:text-gray-200">ชื่อ-นามสกุล</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
                    placeholder="ชื่อของคุณ"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy-700 dark:text-gray-200">เบอร์โทรศัพท์</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
                    placeholder="08X-XXX-XXXX"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-navy-700 dark:text-gray-200">อีเมล</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-navy-700 dark:text-gray-200">ชื่อโครงการ / นิติบุคคล</label>
                  <input
                    type="text"
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
                    placeholder="เช่น คอนโดมิเนียม ABC"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-navy-700 dark:text-gray-200">รายละเอียดที่ต้องการสอบถาม</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
                    placeholder="บอกเราเกี่ยวกับโครงการของคุณ..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    ส่งข้อความ
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Office info & map */}
          <div className="lg:col-span-2">
            <h2 className="section-title">ข้อมูลสำนักงาน</h2>
            <div className="gold-divider mt-4" />

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-navy-900 text-gold-500 dark:bg-navy-800">
                  <Icon name="pin" className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 dark:text-white">ที่อยู่</p>
                  <p className="mt-1 text-sm text-navy-500 dark:text-gray-400">{company.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-navy-900 text-gold-500 dark:bg-navy-800">
                  <Icon name="phone" className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 dark:text-white">โทรศัพท์</p>
                  <p className="mt-1 text-sm text-navy-500 dark:text-gray-400">
                    {company.phone} (สำนักงาน) / {company.mobile} (มือถือ)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-navy-900 text-gold-500 dark:bg-navy-800">
                  <Icon name="mail" className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 dark:text-white">อีเมล</p>
                  <p className="mt-1 text-sm text-navy-500 dark:text-gray-400">{company.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-navy-900 text-gold-500 dark:bg-navy-800">
                  <Icon name="clock" className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 dark:text-white">เวลาทำการ</p>
                  <p className="mt-1 text-sm text-navy-500 dark:text-gray-400">{company.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-navy-100 dark:border-navy-800">
              <iframe
                title="แผนที่สำนักงานวิลเลจ แมนเนจเม้นท์"
                src="https://maps.google.com/maps?q=สุขุมวิท%20กรุงเทพมหานคร&z=14&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
