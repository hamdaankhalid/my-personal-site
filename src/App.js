import './App.css';
import NavBar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './components/pages/Resume';
import Connect from './components/pages/Connect';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact  component={Home}/>
        <Route path='/resume' exact component={Resume} />
        <Route path='/connect' exact component={Connect} />
      </Switch>
      {/* <Footer children="Hamdaan Khalid"/> */}
    </Router>

    </div>
  );
}

export default App;
