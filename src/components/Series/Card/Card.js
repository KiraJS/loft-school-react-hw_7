import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Card extends PureComponent {
  render() {
    const { id, image, name, summary } = this.props.item;
    return (
      <div>
        <div>
          <Link to={`/shows/${id}`}>{name}</Link>
        </div>
        {image && image.medium && <img src={image.medium} alt={name} />}
        {summary && <div dangerouslySetInnerHTML={{ __html: summary }} />}
      </div>
    );
  }
}
export default Card;
