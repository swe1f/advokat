import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Asiya Imanbaeva</title>
        <meta name="description" content="Описание сайта для Google" />
      </Helmet>

      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
