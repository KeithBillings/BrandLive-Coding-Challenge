// local component
import { Card } from 'react-bootstrap';

import { Markup } from 'interweave';

function HomeCard({ title, url, date, image, body }) {
  const handleOnClick = () => {
    window.open(url, '_blank');
  };

  return (
    <Card onClick={handleOnClick}>
      <p>Date: {date.substring(0, date.length - 1).replace('T', ' Time: ')} </p>
      <img src={image} alt='news_image' />
      <Card.Header as='h2'>{title}</Card.Header>
      <Card.Body>
        <Markup content={body} />
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
