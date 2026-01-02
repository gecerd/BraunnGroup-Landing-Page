import React from 'react';
import { motion } from 'motion/react';
import { Clock, Shield, Star, Check } from 'lucide-react';
import { CarCard } from '../CarCard';

export function RentPage() {
  const features = [
    'Широкий выбор автомобилей премиум-класса',
    'Аренда от 1 дня до нескольких месяцев',
    'Доставка автомобиля в любую точку Дубая',
    'Полная страховка и техподдержка 24/7',
    'Без скрытых платежей',
    'Гибкие условия аренды',
  ];

  const benefits = [
    { icon: Clock, title: 'Быстро', description: 'Оформление за 30 минут' },
    { icon: Shield, title: 'Надёжно', description: 'Полная страховка включена' },
    { icon: Star, title: 'Премиум', description: 'Только новые автомобили' },
  ];

  const cars = [
    {
      name: 'MG 3',
      model: 'MG 3',
      color: 'Blue',
      year: 2024,
      image: '/carpics/mg3blue2024.JPG',
      maxSpeed: '~180 км/час',
      fuelConsumption: '7,7 литра',
      mileageLimit: '250 км/день',
      priceDay: 145,
      priceWeek: 890,
      priceMonth: 2250,
      originalPrice: 180,
      discount: 19,
    },
    {
      name: 'MG 3',
      model: 'MG 3',
      color: 'Black',
      year: 2024,
      image: '/carpics/mg3black2024.WEBP',
      maxSpeed: '~180 км/час',
      fuelConsumption: '7,7 литра',
      mileageLimit: '250 км/день',
      priceDay: 145,
      priceWeek: 890,
      priceMonth: 2250,
      originalPrice: 180,
      discount: 19,
    },
    {
      name: 'MG 3',
      model: 'MG 3',
      color: 'Grey',
      year: 2024,
      image: '/carpics/mg3grey2024.WEBP',
      maxSpeed: '~180 км/час',
      fuelConsumption: '7,7 литра',
      mileageLimit: '250 км/день',
      priceDay: 145,
      priceWeek: 890,
      priceMonth: 2250,
      originalPrice: 180,
      discount: 19,
    },
    {
      name: 'MG 5',
      model: 'MG 5',
      color: 'Silver',
      year: 2023,
      image: '/carpics/mg5silver2023.JPG',
      maxSpeed: '~170 км/час',
      fuelConsumption: '6,3 литра',
      mileageLimit: '250 км/день',
      priceDay: 160,
      priceWeek: 950,
      priceMonth: 2350,
      originalPrice: 180,
      discount: 11,
    },
    {
      name: 'MG 5',
      model: 'MG 5',
      color: 'White',
      year: 2024,
      image: '/carpics/mg5silver2023.JPG',
      maxSpeed: '~180 км/час',
      fuelConsumption: '7,7 литра',
      mileageLimit: '250 км/день',
      priceDay: 160,
      priceWeek: 950,
      priceMonth: 2350,
      originalPrice: 180,
      discount: 11,
    },
    {
      name: 'MG GT',
      model: 'MG GT',
      color: 'Blue',
      year: 2024,
      image: '/carpics/mggtblue2024.WEBP',
      maxSpeed: '~180 км/час',
      fuelConsumption: '5,9 литра',
      mileageLimit: '250 км/день',
      priceDay: 180,
      priceWeek: 1050,
      priceMonth: 2800,
      originalPrice: 220,
      discount: 18,
    },
    {
      name: 'MG GT',
      model: 'MG GT',
      color: 'Red',
      year: 2024,
      image: '/carpics/mggtred2024.WEBP',
      maxSpeed: '~180 км/час',
      fuelConsumption: '5,9 литра',
      mileageLimit: '250 км/день',
      priceDay: 180,
      priceWeek: 1050,
      priceMonth: 2800,
      originalPrice: 220,
      discount: 18,
    },
    {
      name: 'MG GT',
      model: 'MG GT',
      color: 'White',
      year: 2024,
      image: '/carpics/mggtwhite2024.WEBP',
      maxSpeed: '~180 км/час',
      fuelConsumption: '5,9 литра',
      mileageLimit: '250 км/день',
      priceDay: 180,
      priceWeek: 1050,
      priceMonth: 2800,
      originalPrice: 220,
      discount: 18,
    },
    {
      name: 'MG GT',
      model: 'MG GT',
      color: 'Black',
      year: 2024,
      image: '/carpics/mggtblack2024.JPG',
      maxSpeed: '~180 км/час',
      fuelConsumption: '5,9 литра',
      mileageLimit: '250 км/день',
      priceDay: 180,
      priceWeek: 1050,
      priceMonth: 2800,
      originalPrice: 220,
      discount: 18,
    },
    {
      name: 'MG ZS',
      model: 'MG ZS',
      color: 'Silver',
      year: 2024,
      image: '/carpics/mgzssilver2024.WEBP',
      maxSpeed: '~190 км/час',
      fuelConsumption: '7,8 литра',
      mileageLimit: '250 км/день',
      priceDay: 185,
      priceWeek: 1100,
      priceMonth: 2900,
      originalPrice: 230,
      discount: 20,
    },
    {
      name: 'MG ZS',
      model: 'MG ZS',
      color: 'White',
      year: 2024,
      image: '/carpics/mgzssilver2024.WEBP',
      maxSpeed: '~190 км/час',
      fuelConsumption: '7,8 литра',
      mileageLimit: '250 км/день',
      priceDay: 185,
      priceWeek: 1100,
      priceMonth: 2900,
      originalPrice: 230,
      discount: 20,
    },
    {
      name: 'MG RX5',
      model: 'MG RX5',
      color: 'Black',
      year: 2024,
      image: '/carpics/mgrx5black2024.WEBP',
      maxSpeed: '~180 км/час',
      fuelConsumption: '14,7 литра',
      mileageLimit: '250 км/день',
      priceDay: 235,
      priceWeek: 1380,
      priceMonth: 3950,
      originalPrice: 280,
      discount: 16,
    },
    {
      name: 'JETOUR T2',
      model: 'JETOUR T2',
      color: 'Sand',
      year: 2026,
      image: '/carpics/jetourt2sand2026.WEBP',
      maxSpeed: '~180 км/час',
      fuelConsumption: '9,3 литра',
      mileageLimit: '250 км/день',
      priceDay: 533,
      priceWeek: 3240,
      priceMonth: 8000,
      originalPrice: 600,
      discount: 11,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Luxury car rental"
            className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 tracking-tight font-bold">
              BraunNRent
            </h1>
          <div className="w-16 sm:w-24 h-px bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 px-4">
            Аренда премиальных автомобилей в Дубае
          </p>
          <motion.a
            href="https://wa.me/971585717758"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-slate-900 hover:bg-slate-800 text-white transition-all text-xs sm:text-sm tracking-wider rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Забронировать авто
          </motion.a>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-slate-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl text-slate-900 mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-slate-900">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-3 sm:mb-4 md:mb-6 font-bold">Что включено</h2>
            <div className="w-12 sm:w-16 h-px bg-slate-900 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 sm:gap-4 bg-white p-5 sm:p-7 rounded-3xl border-2 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={1.5} />
                <span className="text-sm sm:text-base text-slate-900">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Cars */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-3 sm:mb-4 md:mb-6 font-bold">Доступные автомобили</h2>
            <div className="w-12 sm:w-16 h-px bg-slate-900 mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-slate-800">Выберите автомобиль из нашего парка</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {cars.map((car, index) => (
              <CarCard 
                key={`${car.model}-${car.color}-${car.year}-${index}`}
                {...(car as any)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 sm:mt-16"
          >
            <motion.a
              href="https://wa.me/971585717758"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-4 sm:py-5 md:py-6 lg:py-7 bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 transition-all duration-200 text-sm sm:text-base md:text-lg tracking-wide font-semibold rounded-2xl shadow-lg hover:shadow-2xl w-full sm:w-auto sm:min-w-[280px] md:min-w-[320px]"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Связаться с нами
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
