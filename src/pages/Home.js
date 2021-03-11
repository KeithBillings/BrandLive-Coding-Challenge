import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Local Components
import HomeCardList from '../components/HomeCardList/HomeCardList';

// Data
import homeText from '../data/homeText';

function Home() {
  return (
    <>
      <Row>
        <Col>
          <h2>Home</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to='/categories'>
            <Button variant='light'>View Categories</Button>
          </Link>
        </Col>
      </Row>
      <Row style={{ marginTop: '1rem' }}>
        <Col>{homeText}</Col>
      </Row>
      <Row style={{ marginTop: '1rem' }}>
        <HomeCardList />
      </Row>
    </>
  );
}

export default Home;
