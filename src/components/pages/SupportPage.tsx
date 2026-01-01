import React from 'react';
import { motion } from 'motion/react';
import { FileText, Users, Scale, Check } from 'lucide-react';

export function SupportPage() {
  const services = [
    {
      icon: FileText,
      title: 'Документы',
      items: [
        'Оформление визы и Emirates ID',
        'Регистрация компании',
        'Банковские счета',
        'Лицензии и разрешения',
      ],
    },
    {
      icon: Users,
      title: 'HR и кадры',
      items: [
        'Трудовые контракты',
        'Оформление сотрудников',
        'Визы для персонала',
        'HR-консультации',
      ],
    },
    {
      icon: Scale,
      title: 'Юридические услуги',
      items: [
        'Правовое сопровождение',
        'Разрешение споров',
        'Консультации по законодательству ОАЭ',
        'Представительство в госорганах',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 tracking-tight">
            BraunNSupport
          </h1>
          <div className="w-16 sm:w-24 h-px bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-3 sm:mb-4 px-4">
            Юридическая поддержка и документы
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Полное сопровождение в решении юридических и административных вопросов в ОАЭ
          </p>
          <motion.a
            href="https://wa.me/971585717758"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-white text-slate-900 hover:bg-slate-100 transition-all text-xs sm:text-sm tracking-wider rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Получить консультацию
          </motion.a>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4 sm:mb-6">Наши услуги</h2>
            <div className="w-12 sm:w-16 h-px bg-slate-900 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 p-6 sm:p-8 rounded-3xl"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-slate-900/30 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl text-slate-900 mb-4 sm:mb-6">{service.title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-sm sm:text-base text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4 sm:mb-6 px-4">
              Нужна помощь с документами?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Наши специалисты помогут решить любые юри��ические и административные вопросы в кратчайшие сроки
            </p>
            <a
              href="https://wa.me/971585717758"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-slate-900 text-white hover:bg-slate-800 transition-all text-xs sm:text-sm tracking-wider rounded-full"
            >
              Связаться с нами
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}