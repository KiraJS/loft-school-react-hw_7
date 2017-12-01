import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/search';
import Card from '../Series/Card/Card.js';

export class Search extends PureComponent {
  handleSearch = () => {
    this.props.boundSearchRequest(this.searchInput.value);
    this.searchInput.value = '';
  };
  render() {
    const { isFetching, result, error } = this.props.search;

    if (error !== null) {
      console.error('search', error);
      return 'Возникла ошибка!';
    }

    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Название сериала"
            ref={input => (this.searchInput = input)}
          />
          <button onClick={this.handleSearch}>
            Найти
          </button>
        </div>
        <div className="search-result">
          {isFetching && 'Выполняется поиск...'}
          {result.length > 0 &&
            result.map(item => (
              <div key={item.id}>
                <Card item={item} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = {
  boundSearchRequest: searchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
