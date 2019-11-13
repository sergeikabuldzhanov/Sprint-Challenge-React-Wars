import React from 'react';
import styled from 'styled-components';

export default function CharacterCard(props){
    const Span = styled.span`
    font-family: sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    `;
    const P = styled.p`
    font-family: 'Star Jedi', arial;
    text-transform: uppercase;
    text-align: justify;

    `;
    const Card = styled.div`
        font-family: sans-serif;
        max-width: 300px;
        width: 100%;
        box-sizing: border-box;
        border: 2px solid black;
        border-radius: 10px;
        margin: 20px;
        padding: 10px;
        color: white;
        background: black;
    `;
    return (
    <Card>
        <h2>{props.character.name}</h2>
        <P><Span>Height: </Span>{props.character.height}</P>
        <P><Span>Mass: </Span>{props.character.mass}</P>
        <P><Span>Hair color: </Span>{props.character.hair_color}</P>
        <P><Span>Skin color: </Span>{props.character.skin_color}</P>
        <P><Span>Eye color: </Span>{props.character.eye_color}</P>
        <P><Span>Birth year: </Span>{props.character.birth_year}</P>
    </Card>
    );
}