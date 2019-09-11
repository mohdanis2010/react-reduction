import React, { useState } from 'react';
import {connect} from 'react-redux'
import { MdSearch } from 'react-icons/md';
import { Form, Input } from 'reactstrap';
import { getSearchTxt } from '../actions/actions';

const SearchInput = props => {
  const [searchInput, setSearchInput] = useState('');
  
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  
  const onSeachHandle = () => {
      props.getSearchTxt(searchInput)
      props.onSeachHandle();
  }
  
  return (
    <Form inline className="cr-search-form" onSubmit={e => { e.preventDefault(); }}>
      <MdSearch
        size="20"
        className="cr-search-form__icon-search text-secondary"
      />
      <Input
        type="search"
        className="cr-search-form__input"
        placeholder="Search..."
        onChange={(evt) => handleChange(evt)}
        value={searchInput}
        onKeyPress={event => {
                if (event.key === 'Enter') {
                    onSeachHandle()
                }
              }}
      />
    </Form>
  );
};


const mapDispatchToProps = {
  getSearchTxt
}

// const SearchInput = withRouter(SearchInput);
export default connect('', mapDispatchToProps)(SearchInput)

// export default SearchInput;
