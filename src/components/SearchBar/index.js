// == Package imports
import React from 'react';
import { connect } from 'react-redux';

// == Local imports
// actions
import { autocomplete, changeField, suggest } from '../../store/actions';

const SearchBar = ({ autocompleteList, handleChangeField, handleSuggestion, searchInput }) => {
  const handleOnChange = (e) => {
    handleChangeField(e.target.value, e.target.name);
  };

  const suggestClicked = (place) => {
    handleSuggestion(place);
  };

  return (
    <div className="searchBar">
      <form>
        <input
          onChange={handleOnChange}
          name="searchInput"
          type="text"
          placeholder="City name"
          value={searchInput}
        />
        <button type="submit">Rechercher</button>
      </form>

      {!!autocompleteList.length && (
        <ul>
          {autocompleteList.map(place => {
            return <li onClick={() => {suggestClicked(place.title)}} key={place.id}>{place.title}</li>
          })}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  autocompleteList: state.search.autocompleteList,
  searchInput: state.search.searchInput
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeField: (value, name) => {
    dispatch(changeField(value, name));
    dispatch(autocomplete());
  },

  handleSuggestion: (place) => {
    dispatch(suggest(place));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default container;