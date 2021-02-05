import { Card } from 'react-bootstrap';

function HomeCard({ title, url, date }) {
  const handleOnClick = () => {
    window.open(url, '_blank');
  };

  return (
    <Card onClick={handleOnClick}>
      <Card.Header as='h3'>{title}</Card.Header>
    </Card>
  );
}

export default HomeCard;
