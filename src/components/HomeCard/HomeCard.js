// local component
import { Card } from 'react-bootstrap';

function HomeCard({ title, url, date }) {
  const handleOnClick = () => {
    window.open(url, '_blank');
  };

  return (
    <Card onClick={handleOnClick}>
      <p>Date: {date.substring(0, date.length - 1).replace('T', ' Time: ')} </p>
      <Card.Header as='h2'>{title}</Card.Header>
    </Card>
  );
}

export default HomeCard;
