
import './App.css';
import ContactMe from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Layout position="sticky"/>
     

     <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <ContactMe />
            </Route>
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
