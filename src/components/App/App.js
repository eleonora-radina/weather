import './App.css';
import Header from '../Header/Header';
import CurrentInfo from '../CurrentInfo/CurrentInfo';
import Forecast from '../Forecast/Forecast';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <main className="main">
          <CurrentInfo />
          <Forecast />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
