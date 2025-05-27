import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactsModal, setShowContactsModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show !== isScrolled) {
        setIsScrolled(show);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Отступ сверху для шапки
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false); // Закрываем мобильное меню после клика
  };

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      window.scrollTo({
        top: footer.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleContactsClick = () => {
    setShowContactsModal(true);
    setMobileMenuOpen(false);
  };

  const closeModal = () => {
    setShowContactsModal(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <div className="logo">Асия Иманбаева</div>
          <div className="profession">Адвокат</div>
        </div>
        
        <button 
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a 
            href="#!" 
            className="nav-link" 
            onClick={() => scrollToSection('main-banner')}
          >
            Главная
          </a>
          <a 
            href="#!" 
            className="nav-link" 
            onClick={() => scrollToSection('counters-section')}
          >
            Достижения
          </a>
          <a 
            href="#!" 
            className="nav-link" 
            onClick={() => scrollToSection('services-section')}
          >
            Наши услуги
          </a>
          <a 
            href="#!" 
            className="nav-link" 
            onClick={scrollToFooter}
          >
            Нужная информация
          </a>
          <a 
            href="#!" 
            className="nav-link" 
            onClick={handleContactsClick}
          >
            Контакты
          </a>
        </nav>
      </header>

      {/* Модальное окно контактов */}
    {showContactsModal && (
        <div className="contacts-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-header">
              <h3>Контакты связи со мной</h3>
              <p>Я отвечу вам в ближайшее время</p>
            </div>
            <div className="contact-buttons">
              <a
                href="https://wa.me/77073295354"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn whatsapp"
              >
                <i className="icon-whatsapp"></i> WhatsApp
              </a>
              <a
                href="tel:+77073295354"
                className="contact-btn phone"
              >
                <i className="icon-phone"></i> Позвонить
              </a>
            </div>
            <div className="contact-info">
              <p>Рабочие часы: Пн-Пт, 8:00 - 21:00</p>
              <p>Сб-Вс, 10:00 - 18:00</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default Header;