import React from 'react';
import { Play, CheckCircle, Clock, BanknoteIcon, Phone, MessageCircle, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Чудаков Данила Евгеньевич</h1>
          <p className="text-xl text-gray-600">3D-аниматор карточек для маркетплейсов</p>
          
          {/* Contact Information */}
          <div className="mt-8 flex flex-wrap gap-6">
            <a href="https://t.me/your_username" className="flex items-center text-blue-600 hover:text-blue-800">
              <MessageCircle className="h-5 w-5 mr-2" />
              <span>Telegram</span>
            </a>
            <a href="tel:+7XXXXXXXXXX" className="flex items-center text-blue-600 hover:text-blue-800">
              <Phone className="h-5 w-5 mr-2" />
              <span>+7 (XXX) XXX-XX-XX</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Value Proposition */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Зачем вам анимации товаров?</h2>
            <p className="text-gray-700 mb-6">
              Исследования в области маркетинга показывают повышение уровня CTR на колоссальные 10-30% 
              (ссылки на исследования приведены ниже), и чем выше маржа вашего товара, тем выгоднее 
              внедрять анимацию в карточки товаров! Этот показатель по своей значимости конкурирует 
              с внедрением акции на товары!
            </p>
            <p className="text-lg font-medium text-gray-900">
              "Настоящий дизайнер – это не красивые картинки. Настоящий дизайнер – это прибыльные картинки"
            </p>
          </div>
        </section>

        {/* Compatibility Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* I'm Right For You */}
          <section className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Я вам подхожу если:</h2>
            <ul className="space-y-4">
              {[
                'У вашего бизнеса есть потребность в повышении дохода',
                'Вы ищете дизайнера с глубоким пониманием не только своей отрасли, но и связанных с ней бизнес-процессов',
                'Вы хотите платить за результат, а не за количество проведенной работы'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* You're Right For Me */}
          <section className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Вы мне подходите если:</h2>
            <ul className="space-y-4">
              {[
                'Согласны на все условия, прайс-лист и время выполнения работы',
                'Прагматичны (вместо нравится/не нравится, используете фразы работает/не работает)',
                'Пунктуальны (отвечаете на вопросы касаемо продукта в течение одного рабочего дня)'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Pricing Section with Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Стоимость услуг</h2>
          
          <div className="space-y-8">
            {/* Complex Models */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Анимации и моделирование геометрически сложных 3D моделей
              </h3>
              <p className="text-gray-700 mb-4">
                Обувь, одежда, аксессуары, техника и т.п.
              </p>
              <div className="flex items-center space-x-8 mb-6">
                <div className="flex items-center">
                  <BanknoteIcon className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-gray-900">5 000 – 15 000 ₽</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="text-gray-900">5-10 дней</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 italic">Примеры анимаций сложных моделей</p>
                {/* Add your video examples here */}
                <img src="/0000-0149_1.gif" alt="Пример анимации" className="w-full rounded-lg" />
              </div>
            </div>

            {/* Simple Models */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Анимация товаров с помощью готовых 3D моделей
              </h3>
              <p className="text-gray-700 mb-4">
                Посуда, бутылки, коробки, простейшая мебель – шкафы, тумбы и т.п.
              </p>
              <div className="flex items-center space-x-8 mb-6">
                <div className="flex items-center">
                  <BanknoteIcon className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-gray-900">2 000 – 7 000 ₽</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="text-gray-900">3-7 дней</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 italic">Примеры анимаций простых моделей</p>
                {/* Add your video examples here */}
               <img 
    src="https://drive.google.com/uc?export=view&id=1ToyTNb0IaBa2sP9gRBoIlHwFP4MtEzeD" 
    alt="Пример анимации" 
    className="w-full rounded-lg" 
  />
              </div>
            </div>

            {/* Urgency Notice */}
            <div className="bg-amber-50 rounded-2xl p-8">
              <p className="text-gray-800">
                <strong>Доплата за срочность</strong> (срок выполнения 1-3 дня и составляет 30%)
              </p>
            </div>

            {/* Revision Price */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <Play className="h-6 w-6 text-purple-500 mr-3" />
                <h3 className="text-xl font-medium text-gray-900">Правка</h3>
              </div>
              <p className="text-gray-700">400 ₽ (срок обсуждается отдельно)</p>
            </div>
          </div>
        </section>

        {/* Research Links Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Исследования и статьи</h2>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.tandfonline.com/doi/abs/10.1080/10494820.2020.1799020" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Impact of 3D Product Visualization on Online Shopping Behavior (2020)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0747563219303590" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>3D Product Visualization and Consumer Behavior: A Meta-Analysis</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.researchgate.net/publication/339956897_The_Effect_of_3D_Product_Visualization_on_E-Commerce_Conversion_Rates" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Влияние 3D-визуализации на конверсию в электронной коммерции (2021)</span>
                </a>
              </li>
            </ul>
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
