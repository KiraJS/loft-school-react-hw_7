import React, { PureComponent } from 'react';

class Page extends PureComponent {
  render() {
    const { name, image, summary, _embedded } = this.props.item;
    const people = _embedded.cast;
    return (
      <div>
        <div>
          <p>{name}</p>
          {image && <img src={image.medium} alt={name} />}
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <div>
          {people.map((people, index) =>
            this.renderPerson(people.person, index),
          )}
        </div>
      </div>
    );
  }

  renderPerson = (person, key) => {
    const { name, image } = person;
    return (
      <div key={key}>
        <p>{name}</p>
        {image && image.medium && <img src={image.medium} alt={name} />}
      </div>
    );
  };
}

export default Page;
