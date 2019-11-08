import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import Search from './searchform';

export default function Buttons(props){
    
    const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30%;
    color: white;
    `;

    return (
        <ButtonContainer>
            <Button color = 'primary' disabled = {props.curPage == 1 ? true : false} onClick={e=>{props.handleClick(0)}}>Previous page</Button>
            <span>Page: {props.curPage}</span>
            <Search handleSearch = {props.handleSearch}/>
            <Button color = 'primary' onClick={e=>{props.handleClick(1)}}>Next page</Button>
        </ButtonContainer>
    );
}