import React from 'react';
import styled from 'styled-components';
import CharacterCard from './character-card';

export default function CharacterContainer(props){
    const [pageList, setPageList] = React.useState(props.chars)
    
    const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-content: space-around;
    align-items: center;
    `;
    return (
        <Container>
            {
                props.chars.map((char, index)=>{
                    return <CharacterCard character = {char} key = {char.url}/>
                })
            }
        </Container>
    );
}