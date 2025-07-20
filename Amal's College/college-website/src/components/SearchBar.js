import React, { useState, useRef, useEffect } from 'react';
import { Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';

const SearchBar = ({ onClose }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const { setSearchQuery, performSearch } = useSearch();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  // Sample suggestions based on searchable content
  const allSuggestions = [
    'courses', 'admissions', 'library', 'faculty', 'student life', 'contact',
    'bachelor degree', 'master degree', 'phd programs', 'computer science',
    'engineering', 'business administration', 'campus facilities',
    'student login', 'faculty login', 'staff login', 'registration',
    'principal message', 'alumni', 'about college', 'bangalore',
    'hosur road', 'sports complex', 'dining facilities', 'accommodation'
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (localSearchQuery.trim()) {
      setSearchQuery(localSearchQuery);
      performSearch(localSearchQuery);
      navigate('/search');
      setShowSuggestions(false);
      if (onClose) onClose();
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocalSearchQuery(value);
    
    if (value.length > 0) {
      const filteredSuggestions = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setLocalSearchQuery(suggestion);
    setSearchQuery(suggestion);
    performSearch(suggestion);
    navigate('/search');
    setShowSuggestions(false);
    if (onClose) onClose();
  };

  const handleInputFocus = () => {
    if (localSearchQuery.length > 0 && suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <div className="search-container" ref={searchRef} style={{ position: 'relative' }}>
      <Form className="d-flex" onSubmit={handleSearch}>
        <FormControl 
          type="search" 
          placeholder="Search courses, admissions, faculty..." 
          className="me-2" 
          aria-label="Search"
          style={{ 
            width: 'min(250px, 70vw)', 
            maxWidth: '100%',
            minWidth: '200px'
          }}
          value={localSearchQuery}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <Button variant="outline-light" size="sm" type="submit">
          <i className="fas fa-search"></i>
        </Button>
      </Form>
      
      {showSuggestions && suggestions.length > 0 && (
        <Dropdown.Menu 
          show 
          style={{ 
            position: 'absolute', 
            top: '100%', 
            left: 0, 
            right: '50px',
            zIndex: 1000,
            maxHeight: '200px',
            overflowY: 'auto'
          }}
        >
          {suggestions.map((suggestion, index) => (
            <Dropdown.Item 
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{ cursor: 'pointer' }}
            >
              <i className="fas fa-search me-2 text-muted"></i>
              {suggestion}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      )}
    </div>
  );
};

export default SearchBar;
