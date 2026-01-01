import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Shield, Check, MessageCircle, Headphones, CreditCard, Settings } from 'lucide-react';

interface Car {
  id: string;
  name: string;
  model: string;
  year: number;
  color: string;
  image: string;
  images?: string[]; // Array of additional images for gallery
  priceDay: number;
  priceWeek: number;
  priceMonth: number;
  oldPrice?: number;
  specs: {
    maxSpeed: string;
    fuelConsumption: string;
    mileageLimit: string;
  };
  features: string[];
  conditions: {
    minAge: number;
    minExperience: number;
    mileageLimit: string;
  };
}

// Fallback images mapping
const getFallbackImage = (car: Car): string => {
  const model = car.model.toLowerCase();
  const color = car.color.toLowerCase();
  
  // MG 3 images
  if (model.includes('mg 3')) {
    if (color.includes('blue')) return 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop&q=80';
    if (color.includes('black')) return 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop&q=80';
    if (color.includes('grey') || color.includes('gray')) return 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop&q=80';
  }
  
  // MG 5 images
  if (model.includes('mg 5')) {
    return 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop&q=80';
  }
  
  // MG GT images
  if (model.includes('mg gt')) {
    return 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop&q=80';
  }
  
  // MG ZS images
  if (model.includes('mg zs')) {
    return 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop&q=80';
  }
  
  // MG RX5 images
  if (model.includes('mg rx5')) {
    return 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop&q=80';
  }
  
  // JETOUR T2 images
  if (model.includes('jetour') || model.includes('t2')) {
    return 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&q=80';
  }
  
  // Default fallback
  return 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop&q=80';
};

// Car Image Component with improved fallback
const CarImage: React.FC<{ car: Car; className?: string }> = ({ car, className = '' }) => {
  const fallback = getFallbackImage(car);
  // Start with the car's image (local webp file)
  const [imgSrc, setImgSrc] = useState<string>(car.image);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    // If local image fails, try fallback
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-slate-400 border-t-slate-700 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={`${car.name} ${car.color} ${car.year}`}
        className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
    </div>
  );
};

export function RentPage() {

  const cars: Car[] = [
    {
      id: 'mg3-blue',
      name: 'MG 3',
      model: 'MG 3',
      year: 2024,
      color: 'Blue',
      image: '/cars/MG3Blue2024.webp',
      priceDay: 145,
      priceWeek: 890,
      priceMonth: 2250,
      oldPrice: 180,
      specs: {
        maxSpeed: '~180 км/час',
        fuelConsumption: '7,7 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        'Кондиционер',
        'Экономичный двигатель 1.5L',
        'Камера заднего вида',
        'Apple CarPlay & Bluetooth',
        'Система Isofix',
        'Электропакет',
        'USB-порт',
        'Стильный дизайн',
        'Маневренность',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
    {
      id: 'mg3-black',
      name: 'MG 3',
      model: 'MG 3',
      year: 2024,
      color: 'Black',
      image: '/cars/MG3Black2024.webp',
      priceDay: 145,
      priceWeek: 890,
      priceMonth: 2250,
      oldPrice: 180,
      specs: {
        maxSpeed: '~180 км/час',
        fuelConsumption: '7,7 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        'Кондиционер',
        'Экономичный двигатель 1.5L',
        'Камера заднего вида',
        'Apple CarPlay & Bluetooth',
        'Система Isofix',
        'Электропакет',
        'USB-порт',
        'Стильный дизайн',
        'Маневренность',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
    {
      id: 'mg3-grey',
      name: 'MG 3',
      model: 'MG 3',
      year: 2024,
      color: 'Grey',
      image: '/cars/MG3Grey2024.webp',
      priceDay: 145,
      priceWeek: 890,
      priceMonth: 2250,
      oldPrice: 180,
      specs: {
        maxSpeed: '~180 км/час',
        fuelConsumption: '7,7 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        'Кондиционер',
        'Экономичный двигатель 1.5L',
        'Камера заднего вида',
        'Apple CarPlay & Bluetooth',
        'Система Isofix',
        'Электропакет',
        'USB-порт',
        'Стильный дизайн',
        'Маневренность',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
    {
      id: 'mg5-silver',
      name: 'MG 5',
      model: 'MG 5',
      year: 2023,
      color: 'Silver',
      image: '/cars/MG5SILVER2023.webp',
      priceDay: 160,
      priceWeek: 950,
      priceMonth: 2350,
      oldPrice: 180,
      specs: {
        maxSpeed: '~170 км/час',
        fuelConsumption: '6,3 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        'Кондиционер',
        'Экономичный двигатель 1.5L',
        'Камера заднего вида',
        'Apple CarPlay & Bluetooth',
        'Система Isofix',
        'Электропакет',
        'USB-порт',
        'Стильный дизайн',
        'Маневренность',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
    {
      id: 'mg5-white',
      name: 'MG 5',
      model: 'MG 5',
      year: 2024,
      color: 'White',
      image: '/cars/MG5WHITE2024.webp',
      priceDay: 160,
      priceWeek: 950,
      priceMonth: 2350,
      oldPrice: 180,
      specs: {
        maxSpeed: '~180 км/час',
        fuelConsumption: '7,7 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        'Мощный кондиционер',
        'Вместительный седан',
        'Экономичный двигатель 1.5L',
        'Камера заднего вида',
        'Apple CarPlay & Bluetooth',
        'Электропакет',
        'Система Isofix',
        'USB-порт',
        'Стильный и элегантный дизайн',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
    {
      id: 'mg-gt-blue',
      name: 'MG GT',
      model: 'MG GT',
      year: 2024,
      color: 'Blue',
      image: '/cars/MGGTBLUE.webp',
      priceDay: 180,
      priceWeek: 1050,
      priceMonth: 2800,
      oldPrice: 220,
      specs: {
        maxSpeed: '~180 км/час',
        fuelConsumption: '5,9 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        'Мощный кондиционер',
        'Спортивный дизайн',
        'Двигатель 1.5L Turbo',
        'Камера заднего вида',
        'Apple CarPlay & Android Auto',
        'Bluetooth и USB',
        'Электрические стеклоподъемники',
        'Система Isofix',
        'Спортивный интерьер',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
    {
      id: 'mg-gt-red',
      name: 'MG GT',
      model: 'MG GT',
      year: 2024,
      color: 'Red',
      image: 'https://brauncar.com/images/cars/mg-gt-red.jpg',
      priceDay: 180,
      priceWeek: 1050,
      priceMonth: 2800,
      oldPrice: 220,
      specs: {
        maxSpeed: '~180 км/час',
        fuelConsumption: '5,9 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        'Мощный кондиционер',
        'Спортивный дизайн',
        'Двигатель 1.5L Turbo',
        'Камера заднего вида',
        'Apple CarPlay & Android Auto',
        'Bluetooth и USB',
        'Электрические стеклоподъемники',
        'Система Isofix',
        'Спортивный интерьер',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
    {
      id: 'mg-gt-white',
      name: 'MG GT',
      model: 'MG GT',
      year: 2024,
      color: 'White',
      image: 'https://brauncar.com/images/cars/mg-gt-white.jpg',
      priceDay: 180,
      priceWeek: 1050,
      priceMonth: 2800,
      oldPrice: 220,
      specs: {
        maxSpeed: '~180 км/час',
        fuelConsumption: '5,9 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        'Мощный кондиционер',
        'Спортивный дизайн',
        'Двигатель 1.5L Turbo',
        'Камера заднего вида',
        'Apple CarPlay & Android Auto',
        'Bluetooth и USB',
        'Электрические стеклоподъемники',
        'Система Isofix',
        'Спортивный интерьер',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
    {
      id: 'mg-gt-black',
      name: 'MG GT',
      model: 'MG GT',
      year: 2024,
      color: 'Black',
      image: 'https://brauncar.com/images/cars/mg-gt-black.jpg',
      priceDay: 180,
      priceWeek: 1050,
      priceMonth: 2800,
      oldPrice: 220,
      specs: {
        maxSpeed: '~180 км/час',
        fuelConsumption: '5,9 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        'Мощный кондиционер',
        'Спортивный дизайн',
        'Двигатель 1.5L Turbo',
        'Камера заднего вида',
        'Apple CarPlay & Android Auto',
        'Bluetooth и USB',
        'Электрические стеклоподъемники',
        'Система Isofix',
        'Спортивный интерьер',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
    {
      id: 'mg-zs-silver',
      name: 'MG ZS',
      model: 'MG ZS',
      year: 2024,
      color: 'Silver',
      image: 'https://brauncar.com/images/cars/mg-zs-silver.jpg',
      priceDay: 185,
      priceWeek: 1100,
      priceMonth: 2900,
      oldPrice: 230,
      specs: {
        maxSpeed: '~190 км/час',
        fuelConsumption: '7,8 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        'Просторный салон и багажник',
        'Экономичный двигатель 1.5L',
        'Мощный кондиционер',
        'Большой мультимедийный экран',
        'Apple CarPlay и Android Auto',
        'Камера заднего вида',
        'Bluetooth & USB',
        'Электропакет',
        'Система Isofix',
        'Стильный современный дизайн',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
    {
      id: 'mg-zs-white',
      name: 'MG ZS',
      model: 'MG ZS',
      year: 2024,
      color: 'White',
      image: 'https://brauncar.com/images/cars/mg-zs-white.jpg',
      priceDay: 185,
      priceWeek: 1100,
      priceMonth: 2900,
      oldPrice: 230,
      specs: {
        maxSpeed: '~190 км/час',
        fuelConsumption: '7,8 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        'Просторный салон и багажник',
        'Экономичный двигатель 1.5L',
        'Мощный кондиционер',
        'Большой мультимедийный экран',
        'Apple CarPlay и Android Auto',
        'Камера заднего вида',
        'Bluetooth & USB',
        'Электропакет',
        'Система Isofix',
        'Стильный современный дизайн',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
    {
      id: 'mg-rx5',
      name: 'MG RX5',
      model: 'MG RX5',
      year: 2024,
      color: '',
      image: 'https://brauncar.com/images/cars/mg-rx5.jpg',
      priceDay: 235,
      priceWeek: 1380,
      priceMonth: 3950,
      oldPrice: 280,
      specs: {
        maxSpeed: '~180 км/час',
        fuelConsumption: '14,7 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        'Просторный салон и багажник',
        'Экономичный двигатель 1.5L Turbo',
        'Мощный кондиционер',
        'Большой сенсорный экран',
        'Apple CarPlay и Android Auto',
        'Камера заднего вида',
        'Bluetooth & USB',
        'Электропакет',
        'Система Isofix',
        'Современный дизайн',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
    {
      id: 'jetour-t2',
      name: 'JETOUR T2',
      model: 'JETOUR T2',
      year: 2026,
      color: 'Sand',
      image: 'https://brauncar.com/images/cars/jetour-t2.jpg',
      priceDay: 533,
      priceWeek: 3240,
      priceMonth: 8000,
      oldPrice: 600,
      specs: {
        maxSpeed: '~180 км/час',
        fuelConsumption: '9,3 литра',
        mileageLimit: '250 км/день',
      },
      features: [
        '~180 км/час',
        '9,3 литра',
        '250 км/день',
        'Мощный турбированный двигатель 2.0L',
        'Панорамная камера 360°',
        'Большой сенсорный экран',
        'Apple CarPlay и Android Auto',
        'Продвинутые системы безопасности (ADAS)',
        'Мощный климат-контроль',
        'Беспроводная зарядка',
        'Система Isofix',
      ],
      conditions: {
        minAge: 21,
        minExperience: 1,
        mileageLimit: '4500 км/месяц ; 250 км/день',
      },
    },
  ];

  const features = [
    'Широкий выбор автомобилей премиум-класса',
    'Аренда от 1 дня до нескольких месяцев',
    'Доставка автомобиля в любую точку Дубая',
    'Полная страховка и техподдержка 24/7',
    'Без скрытых платежей',
    'Гибкие условия аренды',
  ];

  const benefits = [
    { icon: Headphones, title: 'Быстро', description: 'Поддержка клиентов 24/7' },
    { icon: CreditCard, title: 'Надежно', description: 'Расчеты с клиентами максимально просты и удобны.' },
    { icon: Settings, title: 'Удобно', description: 'Гибкие условия аренды' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1687993320725-c4c2708ef074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzY3MDcwMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury car rental"
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
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-white text-slate-900 hover:bg-slate-100 transition-all text-xs sm:text-sm tracking-wider rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Забронировать авто
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

      {/* Cars Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 sm:mb-6">Наш автопарк</h2>
            <div className="w-12 sm:w-16 h-px bg-slate-900 mx-auto"></div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-6">
              Выберите автомобиль, который идеально подходит для ваших потребностей
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-lg group flex flex-col"
                whileHover={{ y: -4 }}
              >
                {/* Car Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <CarImage
                    car={car}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {car.oldPrice && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md">
                      -{Math.round((1 - car.priceDay / car.oldPrice) * 100)}%
                    </div>
                  )}
                </div>

                {/* Additional Car Image */}
                <div className="relative h-32 sm:h-36 overflow-hidden bg-slate-100">
                  <CarImage
                    car={car}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Car Info */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 leading-tight">
                      {car.name} {car.color && <span className="text-slate-600">{car.color}</span>} {car.year}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">{car.model}</p>
                  </div>

                  {/* Pricing - Compact */}
                  <div className="mb-3 flex-1">
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="text-2xl sm:text-3xl font-bold text-slate-900">
                        {car.priceDay}
                      </span>
                      <span className="text-sm sm:text-base text-slate-600 font-medium">AED</span>
                      <span className="text-xs text-slate-500">/день</span>
                      {car.oldPrice && (
                        <span className="text-xs text-slate-400 line-through ml-1.5">
                          {car.oldPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2 text-xs text-slate-600">
                      <span>Неделя: <strong className="text-slate-900">{car.priceWeek}</strong></span>
                      <span>•</span>
                      <span>Месяц: <strong className="text-slate-900">{car.priceMonth}</strong></span>
                    </div>
                  </div>

                  {/* Features Preview - Compact */}
                  <div className="mb-3">
                    <ul className="space-y-1">
                      {car.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="leading-tight line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/971585717758?text=Здравствуйте! Меня интересует аренда ${car.name} ${car.color} ${car.year}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-200 text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Забронировать
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4 sm:mb-6">Что включено</h2>
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