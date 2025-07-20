import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Searchable content data
  const searchableContent = [
    // About Section
    {
      id: 'about-1',
      title: 'About Amal\'s College',
      content: 'Welcome to AMAL\'S College, a premier institution dedicated to fostering academic excellence, innovation, and leadership. Established in 1985, ABC College has grown to become a beacon of higher education, known for its rigorous academic programs and vibrant campus life.',
      category: 'About',
      page: '/',
      section: '#about'
    },
    {
      id: 'about-2',
      title: 'Campus Facilities',
      content: 'Our campus is spread across 20 hectares of lush greenery, providing a serene and inspiring environment. Features include: Classrooms and Laboratories equipped with latest technology, Extensive Library with thousands of books, Sports Complex with gymnasium, swimming pool, tennis and basketball courts, On-Campus Housing with comfortable accommodation, Dining Facilities with multiple cafeterias.',
      category: 'Campus',
      page: '/',
      section: '#about'
    },
    
    // Courses
    {
      id: 'course-1',
      title: 'Bachelor\'s Degree Programs',
      content: 'Bachelor of Science in Computer Science, Bachelor of Arts in English Literature, Bachelor of Business Administration, Bachelor of Engineering in Electrical',
      category: 'Courses',
      page: '/',
      section: '#courses'
    },
    {
      id: 'course-2',
      title: 'Master\'s Degree Programs',
      content: 'Master of Science in Data Science, Master of Business Administration, Master of Arts in History, Master of Engineering in Mechanical',
      category: 'Courses',
      page: '/',
      section: '#courses'
    },
    {
      id: 'course-3',
      title: 'Ph.D. Programs',
      content: 'Ph.D. in Computer Science, Ph.D. in Engineering, Ph.D. in Business Management, Ph.D. in Literature',
      category: 'Courses',
      page: '/',
      section: '#courses'
    },
    
    // Student Life
    {
      id: 'student-1',
      title: 'Student Life at Amal\'s College',
      content: 'Campus life, student activities, clubs, sports, events, cultural programs, extracurricular activities, student organizations, societies, volunteer programs, leadership opportunities',
      category: 'Student Life',
      page: '/',
      section: '#student-life'
    },
    {
      id: 'student-2',
      title: 'Sports and Recreation',
      content: 'Sports Complex with gymnasium, swimming pool, tennis courts, basketball courts, football field, cricket ground, athletics track, fitness center, recreational activities',
      category: 'Student Life',
      page: '/',
      section: '#student-life'
    },
    {
      id: 'student-3',
      title: 'Clubs and Societies',
      content: 'Drama club, music society, debate team, literary club, science club, robotics club, photography club, art society, environmental club, volunteer groups',
      category: 'Student Life',
      page: '/',
      section: '#student-life'
    },
    
    // Login Services
    {
      id: 'login-1',
      title: 'Student Login Portal',
      content: 'Access student portal, grades, course materials, assignments, academic records, timetable',
      category: 'Services',
      page: '/student-login',
      section: ''
    },
    {
      id: 'login-2',
      title: 'Faculty Login Portal',
      content: 'Faculty access, teaching materials, grade management, course administration, faculty resources',
      category: 'Services',
      page: '/faculty-login',
      section: ''
    },
    {
      id: 'login-3',
      title: 'Staff Login Portal',
      content: 'Staff portal, administrative access, staff resources, management tools',
      category: 'Services',
      page: '/staff-login',
      section: ''
    },
    {
      id: 'login-4',
      title: 'Candidate Registration',
      content: 'New student registration, admission application, candidate portal, enrollment process',
      category: 'Admissions',
      page: '/candidate-login',
      section: ''
    },
    
    // Library
    {
      id: 'library-1',
      title: 'College Library',
      content: 'Digital library, books, journals, research materials, study resources, online databases, academic resources, e-books, research papers, thesis collection',
      category: 'Library',
      page: '/library',
      section: ''
    },
    {
      id: 'library-2',
      title: 'Library Services',
      content: 'Book lending, reference services, interlibrary loans, research assistance, study rooms, group study areas, computer access, printing services, photocopying',
      category: 'Library',
      page: '/library',
      section: ''
    },
    {
      id: 'library-3',
      title: 'Digital Resources',
      content: 'Online databases, digital journals, e-learning platforms, virtual library, remote access, digital archives, multimedia resources, software access',
      category: 'Library',
      page: '/library',
      section: ''
    },
    
    // General Information
    {
      id: 'general-1',
      title: 'Contact Information',
      content: 'Amal\'s College, Hosur Road, Bangalore, Karnataka 560068, India. Email: info@amalscollege.com, Website: www.amalscollege.com',
      category: 'Contact',
      page: '/',
      section: '#contact'
    },
    {
      id: 'general-2',
      title: 'Principal\'s Message',
      content: 'Welcome message from principal, college vision, mission, values, leadership, academic excellence',
      category: 'About',
      page: '/',
      section: '#principal'
    },
    {
      id: 'general-3',
      title: 'Alumni Network',
      content: 'Alumni association, former students, alumni achievements, networking, career opportunities',
      category: 'Alumni',
      page: '/',
      section: '#alumni'
    }
  ];

  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
      
      const results = searchableContent
        .map(item => {
          let score = 0;
          const titleLower = item.title.toLowerCase();
          const contentLower = item.content.toLowerCase();
          const categoryLower = item.category.toLowerCase();
          
          // Exact title match gets highest score
          if (titleLower === query.toLowerCase()) {
            score += 100;
          }
          
          // Title contains search terms
          searchTerms.forEach(term => {
            if (titleLower.includes(term)) {
              score += 50;
            }
            if (categoryLower.includes(term)) {
              score += 30;
            }
            if (contentLower.includes(term)) {
              score += 10;
            }
          });
          
          // Boost score for partial matches
          if (titleLower.includes(query.toLowerCase())) {
            score += 25;
          }
          if (contentLower.includes(query.toLowerCase())) {
            score += 15;
          }
          
          return { ...item, score };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  const value = {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    performSearch,
    clearSearch
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
