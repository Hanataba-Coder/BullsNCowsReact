import React, { useEffect, useState } from 'react'
import Aux from '../../components/Aux/Aux'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: unset;
`

const ReturnStyled = styled.span`
    font-size: 40px;
    font-weight: bold;
    margin: 20px;
    cursor: pointer;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    overflow: hidden;

    & a{
        text-decoration: none;
        color: unset;
    }
`

const Card = styled.div`
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    width: 50%;
    height: 50%;
    font-weight: bold;
    margin: 0 auto;
    display: flex;
    text-align: center;
    background: #fff;
    overflow: auto;

    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`

const GameHistory = (props) => {

    const [gameHistory, setGameHistory] = useState([])

    useEffect(() => {
        const localGameHistoy = JSON.parse(localStorage.getItem("gameHistory")) || []
        const newLocal = localGameHistoy.sort(() => -1)
        setGameHistory([...newLocal])
    }, []);

    return (
        <div style={{overflow: 'hidden', width: '100vw', height: '100vh'}} >
            <LinkStyled to='/menu'>
                <ReturnStyled>{`<`}</ReturnStyled>
            </LinkStyled>
            <Container>
                <Card>
                        <span style={{flex: 1}}>
                            <span style={{marginBottom: '10px', fontSize: '20px'}}>User</span>
                            {
                                gameHistory.length > 0 && gameHistory.map(history => (<div>{history.name}</div>)) 
                            }        
                        </span>
                        <span  style={{flex: 1}}>
                            <span style={{marginBottom: '10px', fontSize: '20px'}}>Round</span>
                            {
                                gameHistory.length > 0 && gameHistory.map(history => (<div>{history.round}</div>)) 
                            }        
                        </span>
                    
                </Card>
            </Container>
        </div>
    )
}

export default GameHistory;