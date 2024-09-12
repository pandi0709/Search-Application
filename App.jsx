import React, { useState } from 'react';
import './App.css';
import SearchBar from './assets./SearchBar.jsx';
import SearchResults from './assets./SearchResults.jsx';



const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);


    const mockResults = [
      'Result 1',
      'Result 2',
      'Result 3'
    ].filter(result => result.toLowerCase().includes(serachQuery.toLowerCase()));
    setResults(mockResults);
  };

  return (
    <div className="app-container">
      <h1>Searching Application</h1><br />
      <p>An app uses a Search engine as its core infrastructure
         to find the present information from your DataBase</p><br />
      <SearchBar onSearch={handleSearch} /> 
      <SearchResults results={results} />
    </div>
  );

} ;

export default App;