import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Bootstrap
import { Button, Row, Col } from 'react-bootstrap';

// Local Components
import CategoryCard from '../CategoryCard/CategoryCard';

// Styles
import './CategoryList.styles.scss';

function CategoryList(props) {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const searchBar = useRef(null);

  function filterCategories(e) {
    const searchTerm = e.target.value;

    let filteredCategories = categories.filter((category) => {
      return category.webTitle.toLowerCase().includes(searchTerm);
    });

    setFilteredCategories(filteredCategories);
  }

  function fetchCategories() {
    axios.get('https://content.guardianapis.com/sections?section=about&api-key=a76c1292-798a-431d-bf44-1293eae88032').then((response) => {
      setCategories(response.data.response.results);
      setFilteredCategories(response.data.response.results);
    });
  }

  useEffect(() => {
    searchBar.current.focus();
    fetchCategories();
  }, []);

  return (
    <>
      <h2>Categories</h2>
      <Link to='/'>
        <Button variant='light'>Home</Button>
      </Link>
      <Row>
        <Col>
          <input id='category-search-bar' placeholder='Search Categories' onChange={filterCategories} ref={searchBar}></input>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Click on a category box to open in a new window.</p>

          <div className='category-list'>
            {filteredCategories.map((category, index) => {
              return <CategoryCard key={index} title={category.webTitle} url={category.webUrl} />;
            })}
          </div>
        </Col>
      </Row>
    </>
  );
}

export default CategoryList;
