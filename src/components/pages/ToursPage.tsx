import React from 'react';
import { motion } from 'motion/react';
import { Palmtree, Mountain, Ship, Check } from 'lucide-react';

export function ToursPage() {
  const tours = [
    {
      icon: Palmtree,
      title: 'Сафари в пустыне',
      description: 'Захватывающее путешествие по дюнам с ужином под звёздами',
      duration: 'Полдня',
      highlights: ['Джип-сафари', 'Катание на верблюдах', 'Барбекю', 'Шоу-программа'],
    },
    {
      icon: Ship,
      title: 'Круиз на яхте',
      description: 'Прогулка вдоль побережья Дубая на роскошной яхте',
      duration: '2-4 часа',
      highlights: ['Панорамные виды', 'Ужин на борту', 'Музыка', 'Купание'],
    },
    {
      icon: Mountain,
      title: 'Тур в горы',
      description: 'Путешествие в горные районы ОАЭ с посещением вади',
      duration: 'Целый день',
      highlights: ['Хаджарские горы', 'Оазисы', 'Исторические форты', 'Обед'],
    },
  ];

  const cityTours = [
    'Обзорная экскурсия по Дубаю',
    'Посещение Burj Khalifa',
    'Тур по Dubai Mall и фонтанам',
    'Старый город и рынки',
    'Абу-Даби - столица ОАЭ',
    'Шарджа - культурная столица',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1677935688755-7418d1819591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGRlc2VydCUyMHRvdXJ8ZW58MXx8fHwxNzY3MDg2ODExfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Dubai desert tour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-white"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 tracking-tight">
            BraunNTours
          </h1>
          <div className="w-16 sm:w-24 h-px bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 px-4">
            Незабываемые туры по ОАЭ
          </p>
          <motion.a
            href="https://wa.me/971585717758"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-white text-slate-900 hover:bg-slate-100 transition-all text-xs sm:text-sm tracking-wider rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Забронировать тур
          </motion.a>
        </motion.div>
      </section>

      {/* Popular Tours */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4 sm:mb-6">Популярные туры</h2>
            <div className="w-12 sm:w-16 h-px bg-slate-900 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate-50 rounded-3xl p-6 sm:p-8"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-slate-900/30 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <tour.icon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl text-slate-900 mb-2 sm:mb-3">{tour.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">{tour.description}</p>
                <div className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6">
                  Продолжительность: {tour.duration}
                </div>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900" strokeWidth={1.5} />
                      <span className="text-xs sm:text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/971585717758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 sm:py-3 text-center bg-slate-900 text-white hover:bg-slate-800 transition-all text-xs sm:text-sm tracking-wider rounded-full"
                >
                  Забронировать
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* City Tours */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4 sm:mb-6">Городские экскурсии</h2>
            <div className="w-12 sm:w-16 h-px bg-slate-900 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {cityTours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/50"
              >
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={1.5} />
                <span className="text-sm sm:text-base text-slate-700">{tour}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 px-4">
              Все туры проводятся на русском языке с опытными гидами
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