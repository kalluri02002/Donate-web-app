
import './App.css';
import { Navbar } from './componets/Navbar/Navbar';
import { Home } from './componets/Home/Home';
import{Children1} from "./componets/Children/children"
import { Rights } from './componets/Rights/Rights';
import { Footer } from './componets/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Children1/>
      <Rights/>
      <Footer/>
      
    </div>
  );
}

export default App;
