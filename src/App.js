
import './App.css';
import 'animate.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Fullpage from './components/Fullpage';
import Projects from './components/Projects'
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
     <Router>
     
      
     <Routes>
     <Route path="/" element={<Fullpage/>}/>
     <Route path="/projects" element={<Projects/>} />
     <Route path="/tech" element={<Technologies/>} />
     <Route path="/contact" element={<Contact/>} />
     </Routes>
     
    </Router>
    </div>
  );
}

export default App;
