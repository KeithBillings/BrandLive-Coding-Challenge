import { useState, useEffect } from 'react';
import axios from 'axios';

// Bootstrap
import Button from 'react-bootstrap/Button';

// Local Components
import CategoryCard from '../CategoryCard/CategoryCard';

// Styles
import './CategoryList.styles.scss';

function CategoryList(props) {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  function filterCategories() {
    const userSearchTerm = document
      .getElementById('category-search-bar')
      .value.toLowerCase();
    let filteredCategories = categories.filter((category) => {
      return category.webTitle.toLowerCase().includes(userSearchTerm);
    });

    setFilteredCategories(filteredCategories);
  }

  function handleButtonClick() {
    props.setViewTab('home');
  }

  useEffect(() => {
    axios
      .get(
        'https://content.guardianapis.com/sections?section=about&api-key=a76c1292-798a-431d-bf44-1293eae88032'
      )
      .then((response) => {
        setCategories(response.data.response.results);
        setFilteredCategories(response.data.response.results);
      });
  }, []);

  return (
    <>
      <h2>Categories</h2>
      <input
        id='category-search-bar'
        placeholder='Search Categories'
        onChange={filterCategories}
      ></input>
      <p>Click on a category box to open in a new window.</p>
      <Button onClick={handleButtonClick}>Home</Button>
      <div className='category-list'>
        {filteredCategories.map((category, index) => {
          return (
            <CategoryCard
              key={index}
              title={category.webTitle}
              url={category.webUrl}
            />
          );
        })}
      </div>
    </>
  );
}

export default CategoryList;
