import React from 'react';
import '../styles/Footer.css';
import { FaWhatsapp, FaEnvelope, FaClock, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
<footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">Асия Иманбаева</h3>
            <p className="footer-text">Профессиональный адвокат с 25-летним опытом работы в уголовных и гражданских делах.</p>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Контакты</h3>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href="tel:+77073295354" className="contact-link">+7 (707) 329-53-54</a>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:asiyaimanbaeva@mail.ru" className="contact-link">asiyaimanbaeva@mail.ru</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Часы работы</h3>
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <span>Пн-Пт: 8:00 - 21:00</span>
            </div>
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <span>Сб-Вс: 10:00 - 18:00</span>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Быстрая связь</h3>
            <a 
              href="https://wa.me/77073295354" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <FaWhatsapp className="whatsapp-icon" />
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            © {new Date().getFullYear()} Асия Иманбаева. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;