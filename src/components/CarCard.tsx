import React from 'react';
import { motion } from 'motion/react';
import { Gauge, Droplet, MapPin } from 'lucide-react';

interface CarCardProps {
  name: string;
  model: string;
  color: string;
  year: number;
  image: string;
  maxSpeed: string;
  fuelConsumption: string;
  mileageLimit: string;
  priceDay: number;
  priceWeek: number;
  priceMonth: number;
  originalPrice: number;
  discount: number;
}

export function CarCard({
  name,
  model,
  color,
  year,
  image,
  maxSpeed,
  fuelConsumption,
  mileageLimit,
  priceDay,
  priceWeek,
  priceMonth,
  originalPrice,
  discount,
}: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-3xl overflow-hidden border-2 border-slate-200 hover:border-slate-900 transition-all duration-500 group shadow-lg hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={`${model} ${color} ${year}`}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            -{discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8">
        {/* Title */}
        <div className="mb-4 sm:mb-5 md:mb-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-900 mb-1 sm:mb-2 font-semibold leading-tight">
            {model} {color} {year}
          </h3>
          <p className="text-xs sm:text-sm text-slate-900 font-medium">{name}</p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8">
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-900">
            <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-slate-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-slate-900 transition-colors">
              <Gauge className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-800 font-medium mb-0.5 sm:mb-1">Максимальная скорость</div>
              <div className="font-semibold text-sm sm:text-base">{maxSpeed}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-900">
            <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-slate-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-slate-900 transition-colors">
              <Droplet className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-800 font-medium mb-0.5 sm:mb-1">Средний расход топлива</div>
              <div className="font-semibold text-sm sm:text-base">{fuelConsumption}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-900">
            <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-slate-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-slate-900 transition-colors">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-800 font-medium mb-0.5 sm:mb-1">Ограничение пробега</div>
              <div className="font-semibold text-sm sm:text-base">{mileageLimit}</div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-6 sm:mb-7 md:mb-8 pb-6 sm:pb-7 md:pb-8 border-b border-slate-200">
          <div className="flex items-end gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-3xl sm:text-4xl md:text-5xl text-slate-900 font-bold">{priceDay}</span>
            <span className="text-lg sm:text-xl text-slate-900 mb-1 sm:mb-2 font-semibold">AED</span>
            {discount > 0 && (
              <span className="text-base sm:text-lg text-slate-400 line-through mb-1 sm:mb-2">{originalPrice} AED</span>
            )}
          </div>
          <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="flex justify-between">
              <span>Сутки:</span>
              <span className="font-semibold">{priceDay} AED</span>
            </div>
            <div className="flex justify-between">
              <span>Неделя:</span>
              <span className="font-semibold">{priceWeek} AED</span>
            </div>
            <div className="flex justify-between">
              <span>Месяц:</span>
              <span className="font-semibold">{priceMonth} AED</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <motion.button
            className="flex-1 py-3 sm:py-4 px-4 sm:px-5 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 text-xs sm:text-sm tracking-wide font-semibold rounded-2xl shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Подробнее
          </motion.button>
          <motion.a
            href={`https://wa.me/971585717758?text=Здравствуйте! Меня интересует аренда ${model} ${color} ${year}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 sm:py-4 px-4 sm:px-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all duration-300 text-center text-xs sm:text-sm tracking-wide font-semibold rounded-2xl shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

