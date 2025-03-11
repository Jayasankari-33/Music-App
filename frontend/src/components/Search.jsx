// Search.jsx
import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function Search() {


  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4 text-center">Search</h2>
      <InputGroup className="mb-3">
        <InputGroup.Text id="search-icon">
          <FaSearch />
        </InputGroup.Text>
        <Form.Control
          type="search"
          placeholder="Search by singer, genre, or song name (Functionality in Songs Component)"
          disabled
          style={{ outline: 'none', boxShadow: 'none', border: '1px solid #ced4da', borderRadius: '0.25rem' }}
          className="search-input"
        />
      </InputGroup>
      <br />
      <div>
        {/* Search results are displayed in Songs.jsx */}
      </div>
    </div>
  );
}

export default Search;