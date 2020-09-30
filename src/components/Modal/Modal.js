import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let ModalStyle = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 50%;
    height: 50%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 16px;
    top: 20%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    margin: auto;
    border-radius: 10px;

    @media (max-width: 600px) {
        width: 80%;
    }
`

const  Modal = (props) => { 
    
    return (
        <Aux>
            <ModalStyle
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                <div
                    style={{textAlign: 'end'}}
                >
                    <FontAwesomeIcon 
                        icon={['fas', 'times']} 
                        onClick={props.closeModal}
                    />
                </div>
                {props.children}
            </ModalStyle>
        </Aux>
    );

}

export default Modal;