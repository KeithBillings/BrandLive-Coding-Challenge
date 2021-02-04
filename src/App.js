import { useState, useEffect } from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';

// Local Components
import CategoryList from './components/CategoryList/CategoryList';
import Header from './components/Header/Header';

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
