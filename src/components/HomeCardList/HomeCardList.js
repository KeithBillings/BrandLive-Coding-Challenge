import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Local Components
import HomeCard from '../HomeCard/HomeCard';

// Styles
import './HomeCardList.styles.scss';

function HomeCardList() {
  const [newsResults, setNewsResults] = useState([]);
  const searchBar = useRef(null);

  function fetchNews(searchTerm) {
    axios.get(`https://content.guardianapis.com/search?q=${searchTerm}&api-key=a76c1292-798a-431d-bf44-1293eae88032&show-fields=body,thumbnail`).then((res) => {
      let news = res.data.response.results;
      setNewsResults(news.slice(0, 9));
    });
  }

  function handleSearch(e) {
    const searchTerm = e.target.value;

    if (searchTerm === '') {
      fetchNews('today');
    } else {
      fetchNews(searchTerm);
    }
  }

  useEffect(() => {
    searchBar.current.focus();
    fetchNews('today');
  }, []);

  return (
    <Col>
      <Row>
        <input type='text' id='home-search-bar' placeholder='Search For News Articles' onChange={handleSearch} ref={searchBar}></input>
      </Row>
      <Row>
        <div className='home-card-list'>
          {newsResults.map((news, index) => {
            return (
              <HomeCard
                key={index}
                index={index}
                title={news.webTitle}
                url={news.webUrl}
                date={news.webPublicationDate}
                image={news.fields.thumbnail}
                body={news.fields.body}
              />
            );
          })}
        </div>
      </Row>
    </Col>
  );
}

export default HomeCardList;
