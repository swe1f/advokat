import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Юрист и адвокат №1 в Казахстане | Опыт 25 лет</title>
        <meta name="description" content="Адвокат Асия Иманбаева. Адвокат. Адвокат Казахстан. Адвокат Астана. Адвокат Алмата" />
      </Helmet>

      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
