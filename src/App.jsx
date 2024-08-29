import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Home/Headers.jsx';
import Shop from './Components/Shop/Shop.jsx';

function App() {

  return (
    <>
      <div className="rootDiv">
        <BrowserRouter>
          <Header />
          <Shop />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
