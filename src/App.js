import { useState } from 'react';
// import ArticleCard from './components/ArticleCard/ArticleCard';
import CategoryList from './components/CategoryList/CategoryList';

// styles
import './App.scss';

function App() {
  // const [articleData, setArticalData] = useState();

  return (
    <div className='App'>
      <h1> BrandLive Coding Challenge </h1>
      <CategoryList />
    </div>
  );
}

export default App;
