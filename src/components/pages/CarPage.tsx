import React from 'react';
import { motion } from 'motion/react';
import { Search, FileText, Key, Check } from 'lucide-react';

export function CarPage() {
  const features = [
    'Подбор автомобиля по вашим критериям',
    'Проверка истории и технического состояния',
    'Помощь в переговорах с продавцом',
    'Юридическое сопровождение сделки',
    'Оформление всех документов',
    'Регистрация автомобиля в RTA',
  ];

  const steps = [
    { icon: Search, title: 'Подбор', description: 'Находим идеальный автомобиль под ваши требования' },
    { icon: FileText, title: 'Проверка', description: 'Полная проверка документов и технического состояния' },
    { icon: Key, title: 'Покупка', description: 'Оформление сделки и регистрация на ваше имя' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1684965747763-9b8fc4f721f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZWFsZXJzaGlwJTIwbHV4dXJ5fGVufDF8fHx8MTc2NzA4ODI4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury car dealership"
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
            BraunNCar
          </h1>
          <div className="w-16 sm:w-24 h-px bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 px-4">
            Подбор и покупка автомобилей в ОАЭ
          </p>
          <motion.a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-white text-slate-900 hover:bg-slate-100 transition-all text-xs sm:text-sm tracking-wider rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Начать подбор
          </motion.a>
        </motion.div>
      </section>

      {/* Process Steps */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4 sm:mb-6">Как это работает</h2>
            <div className="w-12 sm:w-16 h-px bg-slate-900 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-slate-300"></div>
                )}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 border-2 border-slate-900/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-white">
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-slate-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl text-slate-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 px-4">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4 sm:mb-6">Что мы делаем</h2>
            <div className="w-12 sm:w-16 h-px bg-slate-900 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/50"
              >
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={1.5} />
                <span className="text-sm sm:text-base text-slate-700">{feature}</span>
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
            <a
              href="https://wa.me/"
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