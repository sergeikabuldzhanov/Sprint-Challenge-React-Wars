import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

export default function Buttons(props){
    const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 35%;
    `;
    return (
        <ButtonContainer>
            <Button color = 'primary' onClick={e=>{props.handleClick(0)}}>Previous page</Button>
            <Button color = 'primary' onClick={e=>{props.handleClick(1)}}>Next page</Button>
        </ButtonContainer>
    );
}