import { useState, useEffect } from 'react';
import axios from 'axios';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Local Components
import HomeCard from '../HomeCard/HomeCard';

function HomeCardList() {
  const [newsResults, setNewsResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch() {
    const userSearchTerm = document
      .getElementById('home-search-bar')
      .value.toLowerCase();
    setSearchTerm(userSearchTerm);
    fetchNews().then((res) => {
      setNewsResults(res.data.response.results);
    });
  }

  function fetchNews() {
    return axios.get(
      `https://content.guardianapis.com/search?q=${searchTerm}&api-key=a76c1292-798a-431d-bf44-1293eae88032`
    );
  }

  useEffect(() => {
    fetchNews().then((response) => {
      setNewsResults(response.data.response.results);
    });
  }, []);

  return (
    <Row>
      <Col>
        <input
          id='home-search-bar'
          placeholder='Search'
          onChange={handleSearch}
        ></input>
      </Col>
      <Col>
        {newsResults.map((news, index) => {
          return (
            <HomeCard
              key={index}
              title={news.webTitle}
              url={news.webUrl}
              date={news.webPublicationDate}
            />
          );
        })}
      </Col>
    </Row>
  );
}

export default HomeCardList;
