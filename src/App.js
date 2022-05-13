import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyRouter from './Routes/MyRouter';

function App() {

  return (
    <div className="App">

      <Header />
      <MyRouter/>
      <Footer/>
      
    </div>
  );
}

export default App;
