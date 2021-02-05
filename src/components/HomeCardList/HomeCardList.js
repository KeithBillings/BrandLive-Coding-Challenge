import { useState, useEffect } from 'react';
import axios from 'axios';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Local Components
import HomeCard from '../HomeCard/HomeCard';

// Styles
import './HomeCardList.styles.scss';

function HomeCardList() {
  const [newsResults, setNewsResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('today');

  function handleSearch() {
    const userSearchTerm = document
      .getElementById('home-search-bar')
      .value.toLowerCase();
    setSearchTerm(userSearchTerm);

    fetchNews();
  }

  function fetchNews() {
    axios
      .get(
        `https://content.guardianapis.com/search?q=${searchTerm}&api-key=a76c1292-798a-431d-bf44-1293eae88032&show-fields=body,thumbnail`
      )
      .then((res) => {
        console.log('response is: ', res);

        let news = res.data.response.results;
        setNewsResults(news.slice(0, 9));
      });
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Row>
      <Col>
        <input
          id='home-search-bar'
          placeholder='Search'
          onChange={handleSearch}
          defaultValue=''
        ></input>
      </Col>
      <Col>
        <div className='home-card-list'>
          {newsResults.map((news, index) => {
            return (
              <HomeCard
                key={index}
                title={news.webTitle}
                url={news.webUrl}
                date={news.webPublicationDate}
                image={news.fields.thumbnail}
                body={news.fields.body}
              />
            );
          })}
        </div>
      </Col>
    </Row>
  );
}

export default HomeCardList;
