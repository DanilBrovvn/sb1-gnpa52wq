import React from 'react';
import { Play, CheckCircle, Clock, BanknoteIcon, Phone, ExternalLink, Star, AlertCircle, Shield, Zap } from 'lucide-react';

function App() {
  const handleContactClick = () => {
    window.location.href = 'tel:+89997827258';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Профессиональная 3D-анимация для карточек товаров на Ozon</h1>
          <p className="text-xl text-gray-600 mb-8">
            3D-анимация помогает покупателям лучше рассмотреть товар. По статистике Ozon, такие карточки получают в среднем на 20-30% больше просмотров.
          </p>
          
          {/* Contact Information */}
          <div className="mt-8 inline-block bg-blue-50 px-6 py-4 rounded-xl border-2 border-blue-200">
            <a href="tel:+89997827258" className="flex items-center text-blue-700 hover:text-blue-900 text-xl font-semibold">
              <Phone className="h-6 w-6 mr-3" />
              <span>+7 (999) 782-72-58</span>
            </a>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleContactClick}
            className="mt-8 bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Получить расчёт за 5 минут
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Value Proposition */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Что вы получаете?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6">
                  3D-анимация — это конкурентное преимущество, которое помогает выделить ваш товар среди конкурентов. 
                  Итоговый рост продаж зависит от множества факторов: цены, спроса, сезонности и других рыночных условий.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    Работаю с продавцами из ТОП-100 Ozon, которые понимают важность качественной визуализации товара
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">В стоимость входит:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>3D-анимация товара (360° или сцена использования)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Адаптация под требования Ozon</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>2 бесплатных правки</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Готовность за 1-3 дня</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Гарантии и условия работы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <Shield className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Гарантия возврата</h3>
              <p className="text-gray-700">
                Если анимация технически не подходит под требования Ozon — вернём деньги
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <Zap className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Тестовый заказ</h3>
              <p className="text-gray-700">
                Первая анимация за полцены. Если понравится — продолжим сотрудничество
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <AlertCircle className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Честные условия</h3>
              <p className="text-gray-700">
                50% предоплата, 50% после проверки результата и загрузки на Ozon
              </p>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Примеры работ и результаты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img src="/0000-0149_1.gif" alt="Пример анимации" className="w-full h-full object-cover" />
              </div>
              <p className="text-green-600 font-semibold">+37% увеличение просмотров карточки</p>
              <p className="text-gray-600">Категория: Электроника</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img src="https://i.imgur.com/OMRfvvS.gif" alt="Пример анимации" className="w-full h-full object-cover" />
              </div>
              <p className="text-green-600 font-semibold">+45% больше переходов в корзину</p>
              <p className="text-gray-600">Категория: Товары для дома</p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="mb-16">
          <div className="bg-amber-50 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-amber-900 mb-4">Важно понимать</h2>
            <div className="space-y-4 text-amber-800">
              <p>
                Я создаю профессиональную 3D-анимацию, но не гарантирую конкретный рост продаж, так как на это влияет множество факторов (цена, спрос, сезонность и т.д.).
              </p>
              <p>
                Вы получаете визуально привлекательную карточку товара — это важное конкурентное преимущество, но не "волшебная таблетка" для мгновенного роста продаж.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Заказал анимацию для чайника — покупатели стали лучше понимать функционал. Конверсия в корзину выросла."
              </p>
              <p className="font-semibold">Иван К., магазин техники</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Качественная визуализация помогла выделить товар среди конкурентов. Очень доволен результатом!"
              </p>
              <p className="font-semibold">Михаил С., бренд домашнего декора</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Стоимость услуг</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Стоимость рассчитывается индивидуально после анализа вашей карточки
              </h3>
              <p className="text-gray-700 mb-4">
                Цена зависит от сложности модели, количества анимаций и сроков выполнения
              </p>
              <div className="flex items-center space-x-8 mb-6">
                <div className="flex items-center">
                  <BanknoteIcon className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-gray-900">от 5 000 ₽</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="text-gray-900">1-3 дня</span>
                </div>
              </div>
              <button 
                onClick={handleContactClick}
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Обсудить проект
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © 2024 Чудаков Данила Евгеньевич. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
