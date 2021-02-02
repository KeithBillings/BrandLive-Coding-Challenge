import { useState, useEffect } from 'react';
import axios from 'axios';

import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryList.styles.scss';

function CategoryList(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://content.guardianapis.com/sections?section=about&api-key=a76c1292-798a-431d-bf44-1293eae88032'
      )
      .then((response) => {
        setCategories(response.data.response.results);
        // console.log('category list data is: ', categories);
      });
  }, []);

  return (
    <div className='category-list'>
      {categories.map((category, index) => {
        return (
          <CategoryCard
            key={index}
            title={category.webTitle}
            url={category.webUrl}
          />
        );
      })}
    </div>
  );
}

export default CategoryList;