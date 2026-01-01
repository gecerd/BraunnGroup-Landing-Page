import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Wrench, Shield, Check } from 'lucide-react';

export function AutoCarePage() {
  const plans = [
    {
      name: 'Basic',
      price: 'от 299 AED',
      period: 'в месяц',
      features: [
        'Плановое ТО по графику',
        'Замена масла и фильтров',
        'Проверка тормозной системы',
        'Консультации механика 24/7',
      ],
    },
    {
      name: 'Premium',
      price: 'от 599 AED',
      period: 'в месяц',
      features: [
        'Всё из Basic +',
        'Замена расходников',
        'Шиномонтаж и балансировка',
        'Приоритетная запись',
        'Мойка автомобиля',
      ],
    },
    {
      name: 'VIP',
      price: 'от 999 AED',
      period: 'в месяц',
      features: [
        'Всё из Premium +',
        'Любые ремонтные работы',
        'Подменный автомобиль',
        'Выездной сервис',
        'Детейлинг 2 раза в месяц',
      ],
    },
  ];

  const benefits = [
    { icon: Calendar, title: 'Без забот', description: 'Мы сами напомним о ТО и запишем в сервис' },
    { icon: Wrench, title: 'Качество', description: 'Работаем только с официальными сервисами' },
    { icon: Shield, title: 'Гарантия', description: 'Полная гарантия на все работы и запчасти' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1605822167835-d32696aef686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzZXJ2aWNlJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzY2OTc3MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Car service"
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
            BraunNAutoCare
          </h1>
          <div className="w-16 sm:w-24 h-px bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 px-4">
            Подписка на обслуживание автомобиля
          </p>
          <motion.a
            href="https://wa.me/971585717758"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-white text-slate-900 hover:bg-slate-100 transition-all text-xs sm:text-sm tracking-wider rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Выбрать тариф
          </motion.a>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-slate-900/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-slate-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl text-slate-900 mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4 sm:mb-6">Тарифы</h2>
            <div className="w-12 sm:w-16 h-px bg-slate-900 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-white p-6 sm:p-8 rounded-3xl border-2 ${
                  index === 1 ? 'border-slate-900/50' : 'border-slate-200/50'
                }`}
              >
                <h3 className="text-xl sm:text-2xl text-slate-900 mb-3 sm:mb-4">{plan.name}</h3>
                <div className="mb-6 sm:mb-8">
                  <span className="text-3xl sm:text-4xl text-slate-900">{plan.price}</span>
                  <span className="text-sm sm:text-base text-slate-600 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-sm sm:text-base text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/971585717758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 text-center transition-all text-xs sm:text-sm tracking-wider rounded-full ${
                    index === 1
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'border-2 border-slate-900/50 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900'
                  }`}
                >
                  Оформить
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}