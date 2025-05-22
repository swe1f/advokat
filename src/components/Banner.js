import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';

const Banner = () => {
  const [year, setYear] = useState(0);
  const [cases, setCases] = useState(0);
  const [clients, setClients] = useState(0);
  const [repeats, setRepeats] = useState(0);

  const animateCounter = (target, setter, duration = 2000) => {
    const startTime = performance.now();

    const updateCounter = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      setter(value);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    animateCounter(2000, setYear);
    animateCounter(850, setCases);
    animateCounter(1200, setClients);
    animateCounter(92, setRepeats);
  }, []);

  const servicesData = [
    {
      title: "Юридические консультации",
      items: ["Устные консультации", "Письменные заключения", "Анализ документов"],
      icon: "consultation"
    },
    {
      title: "Банкротство физических лиц",
      items: ["Внесудебное банкротство", "Судебное банкротство", "Сопровождение процедуры"],
      icon: "bankruptcy"
    },
    {
      title: "Отмена исполнительной надписи",
      items: ["Оспаривание действий нотариуса", "Снятие ареста со счетов", "Защита имущества"],
      icon: "notary"
    },
    {
      title: "Возмещение ущерба",
      items: ["От заливов квартиры", "От пожаров", "От действий третьих лиц"],
      icon: "flood"
    },
    {
  title: "Досудебное урегулирование",
  items: ["Переговоры с контрагентами", "Подготовка претензий", "Медиация", "Долговые споры"],
  icon: "negotiation"
},

    {
  title: "Представительство в суде",
  items: ["Гражданские дела", "Арбитражные споры", "Административные дела", "Алиментные споры"],
  icon: "court"
}

  ];

  return (
    <div className="banner-container" id="main-banner">
      <div className="banner">
        <div className="banner-content">
          <h1>Профессиональная защита ваших прав и интересов</h1>
          <p className="subtitle">
            Адвокат с 20-летним опытом работы в уголовных и гражданских делах.<br />
            Индивидуальный подход к каждому клиенту и гарантированная конфиденциальность.
          </p>
          <div className="banner-buttons">
            <a
              href="https://wa.me/77073295354"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <i className="icon-whatsapp"></i> Записаться на консультацию
            </a>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="icon-services"></i> Наши услуги
            </button>
          </div>
        </div>
      </div>

      <div className="counters-section" id="counters-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">{year}</div>
              <div className="stat-label">Год начала практики</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{cases}+</div>
              <div className="stat-label">Успешных дел</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{clients}+</div>
              <div className="stat-label">Довольных клиентов</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{repeats}%</div>
              <div className="stat-label">Клиентов возвращаются</div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section" id="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="services-title">Наши услуги</h2>
            <p className="services-subtitle">Комплексный юридический подход для решения любых вопросов</p>
          </div>
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={`icon-${service.icon}`}></i>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  {service.items.length > 0 && (
                    <ul className="service-features">
                      {service.items.map((item, i) => (
                        <li key={i}>
                          <i className="icon-check"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
href="https://wa.me/77073295354"
  target="_blank"
  rel="noopener noreferrer"
  className="service-btn"
  style={{ display: 'inline-block', position: 'relative', zIndex: 1 }}
                  >
                    <i className="icon-whatsapp"></i> Обсудить услугу
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;