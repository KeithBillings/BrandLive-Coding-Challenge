// local component
import { Card, Accordion, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { Markup } from 'interweave';

function HomeCard({ title, url, date, image, body, index }) {
  return (
    <Accordion >
      <Card>
        <Accordion.Toggle as='div' eventKey='0'>
          {
            <OverlayTrigger
              key={'bottom'}
              placement={'bottom'}
              overlay={<Tooltip id={`tooltip1`}>Click to learn more</Tooltip>}
            >
              <div>
                <h2>{title}</h2>
                <p>
                  Date:{' '}
                  {date.substring(0, date.length - 1).replace('T', ' Time: ')}{' '}
                </p>
                <Card.Img src={image} alt='news_image' />
              </div>
            </OverlayTrigger>
          }
        </Accordion.Toggle>
        <Card.Body>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <Markup content={body} />
            </Card.Body>
          </Accordion.Collapse>
        </Card.Body>
      </Card>
    </Accordion>
  );
}

export default HomeCard;
