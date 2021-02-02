import { Card } from 'react-bootstrap';
import './CategoryCard.styles.scss';

function CategoryCard({ title, url }) {
  const handleOnClick = () => {
    window.open(url, '_blank');
  };

  return (
    <Card onClick={handleOnClick}>
      <Card.Header as='h3'>{title}</Card.Header>
    </Card>
  );
}

export default CategoryCard;
