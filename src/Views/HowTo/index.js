import React from 'react'
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
    align-items: center;
    // padding-top: 100px;

    & a{
        text-decoration: none;
        color: unset;
    }
`

const Card = styled.div`
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    margin: 10px 20px;
    background: #fff;
`

const TextHeader = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`

const HowTo = (props) => {
    return (
        <Aux>
            <LinkStyled to='/menu'>
                <ReturnStyled>{`<`}</ReturnStyled>
            </LinkStyled>
            <Container>
                <Card>
                    <TextHeader>How To</TextHeader>
                    <div>
                        <p style={{fontSize: '18px'}} >
                            Guess 4 digits number between 0 to 9  in order to match all number in each position of answer 
                            and the digits must be all different 
                        </p>
                    </div>
                </Card>
            </Container>
        </Aux>
    )
}

export default HowTo;