import React from 'react';
import { motion } from 'motion/react';
import { Car, Home, Wrench, LifeBuoy, MapPin, Sparkles } from 'lucide-react';
import { PageType } from '../App';

interface HeroProps {
  onNavigate: (page: PageType) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const services = [
    { id: 'rent' as PageType, icon: Car, title: 'BraunNRent', description: 'Аренда автомобилей' },
    { id: 'car' as PageType, icon: Sparkles, title: 'BraunNCar', description: 'Подбор и покупка авто' },
    { id: 'autocare' as PageType, icon: Wrench, title: 'BraunNAutoCare', description: 'Обслуживание по подписке' },
    { id: 'support' as PageType, icon: LifeBuoy, title: 'BraunNSupport', description: 'Юридическая поддержка' },
    { id: 'living' as PageType, icon: Home, title: 'BraunNLiving', description: 'Аренда апартаментов' },
    { id: 'tours' as PageType, icon: MapPin, title: 'BraunNTours', description: 'Туры по ОАЭ' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1628155092735-d1146f19cd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBidXJqJTIwa2hhbGlmYXxlbnwxfHx8fDE3NjcwODgyODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Dubai skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-slate-500 uppercase">Premium Services in UAE</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-slate-900 mb-4 sm:mb-6 tracking-tight px-4">
              BraunnGroup
            </h1>
            
            <div className="w-16 sm:w-24 h-px bg-slate-900 mx-auto mb-6 sm:mb-8"></div>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 max-w-3xl mx-auto mb-2 sm:mb-4 px-4">
              Помощь экспатам под ключ
            </p>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
              Комплексные решения для комфортной жизни в ОАЭ
            </p>

            <motion.a
              href="https://wa.me/971585717758"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-slate-900 hover:bg-slate-800 text-white transition-all text-xs sm:text-sm tracking-wider rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Получить консультацию
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 sm:mb-6">Наши сервисы</h2>
            <div className="w-12 sm:w-16 h-px bg-slate-900 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => onNavigate(service.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white p-6 sm:p-8 lg:p-10 border border-slate-200/50 hover:border-slate-900/50 transition-all duration-300 text-left rounded-3xl"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-slate-900/30 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-900 group-hover:text-white transition-all duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl text-slate-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-600">{service.description}</p>
                <div className="mt-4 sm:mt-6 flex items-center gap-2 text-slate-900">
                  <span className="text-xs sm:text-sm tracking-wider uppercase">Подробнее</span>
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200/50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              BRAUNN
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              © 2025 BRAUNN. Все права защищены.
            </p>
            <p className="text-base sm:text-lg text-slate-700 font-medium">
              Ваш надежный партнер в Объединенных Арабских Эмиратах
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-sm sm:text-base text-slate-600">
                Телефон: <a href="tel:+971585717758" className="text-slate-900 hover:text-slate-700 font-medium">+971 58 571 7758</a>
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Телефон: <a href="tel:+971561570703" className="text-slate-900 hover:text-slate-700 font-medium">+971 56 157 0703</a>
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}