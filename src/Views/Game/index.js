import React, { useState, useEffect } from 'react'
import Aux from '../../components/Aux/Aux'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal'

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
    width: 50%;
    text-align: center;
    font-weight: bold;
    margin: auto;
    background-color: #fff;

    @media (max-width: 600px) {
        width: 80%;
    }
`

const InputStyled = styled.input`
    display: block;
    border: 1px solid #E3E3E3;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    margin-top: 10px;
`

const ErrorMessageStyled = styled.div`
    color: red;
`

const ButtonStyled = styled.button`
    margin-top: 10px;
    padding: 10px;
    width: 100px;
    text-align: center;
    background-color: #fff;
    border: 1px solid;
    border-radius: 10px;
`

const HeaderMenu = styled.span`
    font-size: 22px;
    font-weight: bold;
    margin: 20px 0;
`

const ReturnStyled = styled.span`
    font-size: 40px;
    font-weight: bold;
    margin: 20px;
    cursor: pointer;
`

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: unset;
`

const Game = (props) => {
    const [numberUser, setNumberUser] = useState('')
    const [anwser, setAnswer] = useState('')
    const [correctNumber, setCorrectNumber] = useState(0)
    const [correctIndex, setCorrectIndex] = useState(0)
    const [messageError, setMessageError] = useState('กรุณาระบุ 4 ตัวเลขที่ไม่ซ้ำกัน')
    const [roundNumber, setRoundNumber] = useState(0);
    const [userName, setUserName] = useState('');

    const checkDupiclate = (arr) => {
        const valuesSoFar = [];
        for (const num of arr) {
          const value = num;
          if (valuesSoFar.indexOf(value) !== -1) {
            return true;
          }
          valuesSoFar.push(value);
        }
        return false;
    }

    const randomNum = () => {
        let arr = [];
        while (arr.length < 4) {
            const r = Math.floor(Math.random() * 10);
            if (arr.indexOf(r) === -1) {
              arr.push(r);
            }
        }
        console.log(arr)
        setAnswer(arr)
      }

    useEffect(() => {
        randomNum()
    }, []);

    const restartNumber = () => {
        randomNum()
        setNumberUser('')
        setCorrectNumber(0)
        setCorrectIndex(0)
        setRoundNumber(0)
        setMessageError('กรุณาระบุ 4 ตัวเลขที่ไม่ซ้ำกัน')
    }

    const calculateNum = () => {
        let correctIndex = 0;
        let correctNum = 0;

        if(!checkDupiclate(numberUser)){
            const numberUserArray = Array.from(numberUser).map(Number);
            numberUserArray.map((number, index) => {
                    anwser.map((aws, awsIndex) => {
                        if(number == aws){
                            correctNum += 1
                            if(index == awsIndex){
                                correctIndex += 1
                            }
                        }
                    })
                }
            )
            console.log(anwser)
            console.log(numberUserArray)
            setRoundNumber(prevState => prevState + 1)
            setCorrectIndex(correctIndex)
            setCorrectNumber(correctNum)
            setMessageError(
                <div style={{color: 'red', textAlign: 'center'}} >
                    ตัวเลขที่ถูกต้อง: {correctNum} ตัว  <br/>
                    ตำแหน่งตัวเลขที่ถูกต้อง: {correctIndex} ตัว
                </div>)
        }else{
            setMessageError('กรุณาระบุตัวเลขที่ไม่ซ้ำกัน')
        }
      }

    const saveHistory = () => {
        console.log('localStorage: ',JSON.parse(localStorage.getItem("gameHistory")))

        const gameHistoy = JSON.parse(localStorage.getItem("gameHistory")) || []

        const history = {
            name: userName || 'anonymous',
            round: roundNumber,
            index: gameHistoy.length + 1
        }

        gameHistoy.push(history)

        // console.log(gameHistoy)

        localStorage.setItem("gameHistory", JSON.stringify(gameHistoy));

        restartNumber()
    }

    return (
        <div>
            <LinkStyled to='/menu'>
                <ReturnStyled>{`<`}</ReturnStyled>
            </LinkStyled>
            <Card>
            <Container>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'flex-end'
                    }}
                >
                    <span>Round: </span>
                    <span>{roundNumber}</span>
                </div>
                <HeaderMenu>Game</HeaderMenu>
                <InputStyled
                    placeholder="Enter Number"
                    type="number"
                    maxLength="4"
                    value={numberUser}
                    onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 ) && e.preventDefault() }
                    onChange={e => {
                        setMessageError('กรุณาระบุ 4 ตัวเลขที่ไม่ซ้ำกัน')
                        if(e.target.value.length < 5){
                            // if(!checkDupiclate(e.target.value)){
                                setNumberUser(e.target.value)
                            // }
                        }
                    }}
                />
                {
                    messageError && messageError
                }
                <ButtonStyled
                    onClick={calculateNum}
                    disabled={numberUser.length !== 4}
                >
                    ยืนยัน
                </ButtonStyled>

                {
                    correctIndex == 4 &&
                    <Modal
                        show={correctIndex == 4}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                fontSize: '18px'
                            }}
                        >
                            <span>ยินดีด้วย</span>
                            <span>คำตอบที่ถูกต้องคือ: {anwser}</span>
                            <span>ท่านใช้ไปทั้งหมด {roundNumber} รอบ</span>   
                            
                            <div style={{marginTop: '20px' }}>
                                กรุณาระบุชื่อของท่าน
                                <InputStyled 
                                    value={userName}
                                    onChange={e => setUserName(e.target.value)}
                                    placeholder="กรุณาระบุชื่อ"
                                />
                            </div>

                            <div style={{display: 'flex'}} >
                                <ButtonStyled
                                    style={{marginRight: '5px'}}
                                    onClick={saveHistory}
                                >
                                    ยืนยัน
                                </ButtonStyled>
                                <ButtonStyled
                                    style={{marginLeft: '5px'}}
                                    onClick={restartNumber}
                                >
                                    ปิด
                                </ButtonStyled>
                            </div>
                        </div>

                    </Modal>
                }
            </Container>
            </Card>
        </div>
    )
}

export default Game;