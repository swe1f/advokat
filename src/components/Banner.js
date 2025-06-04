import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // 🔹 добавляем для карусели
import '../styles/Banner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const [year, setYear] = useState(0);
  const [cases, setCases] = useState(0);
  const [clients, setClients] = useState(0);
  const [repeats, setRepeats] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // 🔹

  const animateCounter = (target, setter, duration = 2000) => {
    const startTime = performance.now();
    const updateCounter = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      setter(value);
      if (progress < 1) requestAnimationFrame(updateCounter);
    };
    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    animateCounter(2000, setYear);
    animateCounter(850, setCases);
    animateCounter(1200, setClients);
    animateCounter(92, setRepeats);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const servicesData = [
    {
      title: "Юридические консультации",
      items: ["Устные консультации", "Юр. заключения", "Анализ документов"],
      icon: "gavel"
    },
    {
      title: "Банкротство физических лиц",
      items: ["Внесудебное банкротство", "Судебное банкротство", "Сопровождение дела"],
      icon: "account_balance"
    },
    {
      title: "Отмена исполнительной надписи",
      items: ["Споры с нотариусом", "Снятие ареста со счетов", "Защита имущества"],
      icon: "description"
    },
    {
      title: "Возмещение ущерба",
      items: ["От заливов квартиры", "От пожаров", "Действий третьих лиц"],
      icon: "home"
    },
    {
      title: "Досудебное урегулирование",
      items: ["Подготовка претензий", "Медиация", "Долговые споры"],
      icon: "handshake"
    },
    {
      title: "Представительство в суде",
      items: ["Гражданские дела", "Арбитражные споры", "Административные дела", "Алиментные споры"],
      icon: "account_balance_wallet"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const renderServiceCard = (service, index) => (
    <div key={index} className="service-card">
      <div className="service-icon">
        <span className="material-icons">{service.icon}</span>
      </div>
      <div className="service-content">
        <h3>{service.title}</h3>
        <ul className="service-features">
          {service.items.map((item, i) => (
            <li key={i}>
              <span className="material-icons">check_circle</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/77073295354"
          target="_blank"
          rel="noopener noreferrer"
          className="service-btn"
        >
          Обсудить услугу
        </a>
      </div>
    </div>
  );

  return (
    <div className="banner-container" id="main-banner">
      <div className="banner">
        <div className="banner-content">
          <h1>Профессиональная защита ваших прав и интересов</h1>
          <p className="subtitle">
          Моя цель — обеспечить эффективную защиту ваших прав и интересов на каждом этапе правового процесса. Я придерживаюсь принципов честности, добросовестности и профессиональной этики, что подтверждается многолетним доверием клиентов.  <br />
          </p>
          <div className="banner-buttons">
            <a
              href="https://wa.me/77073295354"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Записаться на консультацию
            </a>
            <button
              className="btn-secondary"
              onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="material-icons">work</span>
              Наши услуги
            </button>
          </div>
        </div>
      </div>

   <div className="counters-section" id="counters-section">
  <div className="container">
    {isMobile ? (
      <Slider
        {...{
          dots: true,
          arrows: false,
          infinite: false,
          speed: 400,
          slidesToShow: 1,
          slidesToScroll: 1,
        }}
      >
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
      </Slider>
    ) : (
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
    )}
  </div>
</div>


      <div className="services-section" id="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="services-title">Наши услуги</h2>
            <p className="services-subtitle">Комплексный юридический подход для решения любых вопросов</p>
          </div>

          {isMobile ? (
            <Slider {...sliderSettings}>
              {servicesData.map(renderServiceCard)}
            </Slider>
          ) : (
            <div className="services-grid">
              {servicesData.map(renderServiceCard)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
