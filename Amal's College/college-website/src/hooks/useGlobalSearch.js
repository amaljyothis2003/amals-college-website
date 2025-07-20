import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';

export const useGlobalSearch = () => {
  const navigate = useNavigate();
  const { setSearchQuery, performSearch } = useSearch();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Handle Ctrl+K or Cmd+K for quick search
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
          searchInput.focus();
        } else {
          navigate('/search');
        }
      }
      
      // Handle ESC to clear search
      if (event.key === 'Escape') {
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput && document.activeElement === searchInput) {
          searchInput.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  const quickSearch = (query) => {
    setSearchQuery(query);
    performSearch(query);
    navigate('/search');
  };

  return { quickSearch };
};
