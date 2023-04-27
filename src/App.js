import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from "./components/Error";
import AllProject from "./components/About/AllProject"
import WebPorject from "./components/About/WebPorject";
import AppProject from "./components/About/AppProject";
import MlProject from "./components/About/MlProject";
import DataScience from './components/About/DataScience'
import Services from "./components/Services";
import Contact from "./components/Contact";
import './components/main.css'
import './components/About/project.css'


// UseNavigate and NavLink
// Nested Route
// Index Route default
// Dynamic Routes
// use search params 
// querry parameter 
// Lazy loading // show the loading if data doesn't show 

// context api - Prop drilling {pass the data from app.js to direct where we need}
// 1. createContext 
// 2. Provider : we provide multiple props from value={{name, age, data}}
// 3. useContext 

// useRef hook
// 1. store mutable value it does not rerender

// const AppState = createContext();


function App() {

  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route index element={<AllProject />} />
            <Route path="webProject" element={<WebPorject />} />
            <Route path="appProject" element={<AppProject />} />
            <Route path="mlProject" element={<MlProject />} />
            <Route path="dataScience" element={<DataScience />} />
          </Route>
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
