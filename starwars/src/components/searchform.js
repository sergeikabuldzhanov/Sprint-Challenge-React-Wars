import React from 'react';
import { Button } from 'reactstrap';

const Search = (props) => {
    const [searchValue, setSearchValue] = React.useState('');
    return (
        <form>
            <input type="text" name="search" value = {searchValue} onInput={event => {
                setSearchValue(event.target.value);
                console.log(searchValue);
                
                }}/>
            <Button onClick={event=>{
                props.handleSearch(searchValue);
                console.log(searchValue);
                
                }}>Find</Button>
        </form>
    );
}
  
export default Search;