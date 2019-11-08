import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CharacterContainer from './components/character-container';
import { Spinner } from 'reactstrap';
import Buttons from './components/buttons';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
 const [charList, setCharList] = useState();
 const [currentPage, setCurrentPage] = useState(1);
 const [currentSearch, setCurrentSearch] = useState('');

 // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
 // side effect in a component, you want to think about which state and/or props it should
 // sync up with, if any.
 useEffect(()=>{
   
    fetchData(currentPage, currentSearch);
 }, [currentPage, currentSearch]);
 
 //Get request function
 function fetchData(page, search){
   let finalQuery = `?page=${page ? page : 1 }&search=${search}`;
   console.log(finalQuery);
   
   axios.get(`https://swapi.co/api/people/${finalQuery}`)
   .then(response=>{
     setCharList(response.data);
    })
    .catch(error=>{
      console.log(error);
    });
  }
  
  function changePage(direction){
    
    direction ? setCurrentPage(currentPage+1) : setCurrentPage(currentPage-1);
  };

  function searchHandler(value){
    setCurrentSearch(value);    
  }
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Buttons handleClick = {changePage} handleSearch = {searchHandler} curPage = {currentPage}/>
      {
        charList ? <CharacterContainer chars = {charList.results}/> : <Spinner type="grow" color="success" />
      }
    </div>
  );
}

export default App;
