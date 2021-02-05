import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Bootstrap
import { Container } from 'react-bootstrap';

// Pages
import Home from './pages/Home';
import Categories from './pages/Categories';

// Local Components
import Header from './components/Header/Header';

// Styles
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Container id='mainBody'>
          <Switch>
            <Route path='/categories'>
              <Categories />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
