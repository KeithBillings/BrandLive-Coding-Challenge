import { useState, useEffect } from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';

// Local Components
import CategoryList from './components/CategoryList/CategoryList';

// Styles
import './App.scss';

function App() {
  const [viewTab, setViewTab] = useState('home');

  // useEffect(()=>{

  // })

  function handleButtonClick() {
    setViewTab('categories');
  }

  return (
    <div className='App'>
      <h1> BrandLive Coding Challenge </h1>
      {viewTab === 'home' ? (
        <Button onClick={handleButtonClick}>View Categories</Button>
      ) : (
        ''
      )}
      {viewTab === 'categories' ? <CategoryList setViewTab={setViewTab} /> : ''}
    </div>
  );
}

export default App;
