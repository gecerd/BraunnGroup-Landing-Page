import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Shield, Star, Check, Gauge, Fuel, Route, MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

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

// Helper function to get local image path
const getLocalImagePath = (carId: string, index: number = 0): string | null => {
  // Try to load from local images
  try {
    // In production, these will be in public/cars/
    const imagePath = `/cars/${carId}${index > 0 ? `-${index}` : ''}.jpg`;
    return imagePath;
  } catch {
    return null;
  }
};

// Car Image Component with fallback
const CarImage: React.FC<{ car: Car; className?: string }> = ({ car, className = '' }) => {
  // Try local image first, then remote, then fallback
  const localImage = getLocalImagePath(car.id);
  const [imgSrc, setImgSrc] = useState(localImage || car.image);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Try remote image if local failed
      if (localImage && imgSrc === localImage) {
        setImgSrc(car.image);
      } else {
        // Use fallback
        setImgSrc(getFallbackImage(car));
      }
    }
  };

  return (
    <img
      src={imgSrc}
      alt={`${car.name} ${car.color} ${car.year}`}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

// Car Modal Component
const CarModal: React.FC<{ car: Car | null; isOpen: boolean; onClose: () => void }> = ({ car, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!car) return null;

  const allImages = car.images && car.images.length > 0 ? car.images : [car.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <X className="w-5 h-5 text-slate-900" />
              </button>

              <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-hidden">
                {/* Image Gallery */}
                <div className="relative lg:w-1/2 bg-slate-100">
                  <div className="relative h-64 sm:h-96 lg:h-full aspect-square lg:aspect-auto">
                    <img
                      src={allImages[currentImageIndex]}
                      alt={`${car.name} ${car.color} ${car.year} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {allImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                        >
                          <ChevronLeft className="w-5 h-5 text-slate-900" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                        >
                          <ChevronRight className="w-5 h-5 text-slate-900" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {allImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  {/* Thumbnail Gallery */}
                  {allImages.length > 1 && (
                    <div className="flex gap-2 p-4 overflow-x-auto bg-white border-t border-slate-200">
                      {allImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            idx === currentImageIndex ? 'border-slate-900' : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Car Details */}
                <div className="lg:w-1/2 overflow-y-auto">
                  <div className="p-6 sm:p-8">
                    <div className="mb-6">
                      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                        {car.name} {car.color} {car.year}
                      </h2>
                      <p className="text-lg text-slate-500">{car.model}</p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6 pb-6 border-b border-slate-200">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-slate-900">{car.priceDay} AED</span>
                        <span className="text-lg text-slate-500">/ день</span>
                        {car.oldPrice && (
                          <span className="text-lg text-slate-400 line-through ml-2">{car.oldPrice} AED</span>
                        )}
                      </div>
                      <div className="flex gap-6 text-sm text-slate-600">
                        <div>
                          <span className="font-semibold">Неделя:</span> {car.priceWeek} AED
                        </div>
                        <div>
                          <span className="font-semibold">Месяц:</span> {car.priceMonth} AED
                        </div>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="mb-6 pb-6 border-b border-slate-200">
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">Характеристики</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <Gauge className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">{car.specs.maxSpeed}</p>
                        </div>
                        <div className="text-center">
                          <Fuel className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">{car.specs.fuelConsumption}</p>
                        </div>
                        <div className="text-center">
                          <Route className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">{car.specs.mileageLimit}</p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6 pb-6 border-b border-slate-200">
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">Особенности</h3>
                      <ul className="space-y-2">
                        {car.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Conditions */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">Условия аренды</h3>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>Возраст арендатора: от {car.conditions.minAge} года</li>
                        <li>Стаж вождения: от {car.conditions.minExperience} года</li>
                        <li>Ограничение пробега: {car.conditions.mileageLimit}</li>
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/971585717758?text=Здравствуйте! Меня интересует аренда ${car.name} ${car.color} ${car.year}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-200 text-base font-semibold"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Забронировать в WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export function RentPage() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carImagesMap, setCarImagesMap] = useState<Record<string, string[]>>({});

  // Load images.json if available
  React.useEffect(() => {
    fetch('/cars/images.json')
      .then(res => res.json())
      .then(data => setCarImagesMap(data))
      .catch(() => {
        // File doesn't exist or failed to load, that's okay
        console.log('images.json not found, using default images');
      });
  }, []);

  const openModal = (car: Car) => {
    // Load local images if available
    const localImages = carImagesMap[car.id];
    const carWithImages = localImages && localImages.length > 0
      ? { ...car, images: localImages }
      : car;
    
    setSelectedCar(carWithImages);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCar(null), 300);
  };

  const cars: Car[] = [
    {
      id: 'mg3-blue',
      name: 'MG 3',
      model: 'MG 3',
      year: 2024,
      color: 'Blue',
      image: 'https://brauncar.com/images/cars/mg3-blue.jpg',
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
      image: 'https://brauncar.com/images/cars/mg3-black.jpg',
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
      image: 'https://brauncar.com/images/cars/mg3-grey.jpg',
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
      image: 'https://brauncar.com/images/cars/mg5-silver.jpg',
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
      image: 'https://brauncar.com/images/cars/mg5-white.jpg',
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
      image: 'https://brauncar.com/images/cars/mg-gt-blue.jpg',
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
        'Внедорожный дизайн',
        'Полный привод и повышенная проходимость',
        'Просторный салон с премиальной отделкой',
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
    { icon: Clock, title: 'Быстро', description: 'Оформление за 30 минут' },
    { icon: Shield, title: 'Надёжно', description: 'Полная страховка включена' },
    { icon: Star, title: 'Премиум', description: 'Только новые автомобили' },
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/50 hover:border-slate-900/50 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer"
                onClick={() => openModal(car)}
              >
                {/* Car Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
                  <CarImage
                    car={car}
                    className="w-full h-full object-cover"
                  />
                  {car.oldPrice && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      -{Math.round((1 - car.priceDay / car.oldPrice) * 100)}%
                    </div>
                  )}
                </div>

                {/* Car Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                      {car.name} {car.color} {car.year}
                    </h3>
                    <p className="text-sm text-slate-500">{car.model}</p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-slate-200">
                    <div className="text-center">
                      <Gauge className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                      <p className="text-xs text-slate-600">{car.specs.maxSpeed}</p>
                    </div>
                    <div className="text-center">
                      <Fuel className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                      <p className="text-xs text-slate-600">{car.specs.fuelConsumption}</p>
                    </div>
                    <div className="text-center">
                      <Route className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                      <p className="text-xs text-slate-600">{car.specs.mileageLimit}</p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl sm:text-3xl font-bold text-slate-900">
                        {car.priceDay} AED
                      </span>
                      <span className="text-sm text-slate-500">/ день</span>
                      {car.oldPrice && (
                        <span className="text-sm text-slate-400 line-through ml-2">
                          {car.oldPrice} AED
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4 text-xs text-slate-600">
                      <span>Неделя: {car.priceWeek} AED</span>
                      <span>Месяц: {car.priceMonth} AED</span>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {car.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-slate-900 flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/971585717758?text=Здравствуйте! Меня интересует аренда ${car.name} ${car.color} ${car.year}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-200 text-sm font-semibold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Забронировать в WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Modal */}
      <CarModal car={selectedCar} isOpen={isModalOpen} onClose={closeModal} />

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