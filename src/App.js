import { useState } from 'react';

// Bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';

// Local Components
import Header from './components/Header/Header';
import HomeCardList from './components/HomeCardList/HomeCardList';
import CategoryList from './components/CategoryList/CategoryList';

// Data
import homeText from './data/homeText';

// Styles
import './App.scss';

function App() {
  const [viewTab, setViewTab] = useState('home');

  function handleButtonClick() {
    setViewTab('categories');
  }

  return (
    <div className='App'>
      <Header />
      <Container className='homeBody'>
        {viewTab === 'home' ? (
          <Row>
            <Col>
              <h2>Home</h2>
            </Col>
            <Col>
              <Button onClick={handleButtonClick}>View Categories</Button>
            </Col>
          </Row>
        ) : null}

        {viewTab === 'home' ? (
          <>
            <Row style={{ marginTop: '1rem' }}>
              <Col>{homeText}</Col>
            </Row>
            <Row style={{ marginTop: '1rem' }}>
              <HomeCardList />
            </Row>
          </>
        ) : null}

        {viewTab === 'categories' ? (
          <Row>
            <CategoryList setViewTab={setViewTab} />
          </Row>
        ) : null}
      </Container>
    </div>
  );
}

export default App;
