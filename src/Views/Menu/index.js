import React from 'react'
import Aux from '../../components/Aux/Aux'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import { Input, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    padding-top: 100px;

    & a{
        text-decoration: none;
        color: unset;
    }

`

const Card = styled.div`
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    width: auto;
    text-align: center;
    font-weight: bold;
    margin: 10px 0px;
    background: #fff;
`

const HeaderMenu = styled.span`
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #fff;
    margin-bottom: 50px;
`

const Menu = (props) => {
    return (
        <Container>
            <Row
                style={{padding: '20px'}}
            >
                <Col span={24}>
                    <HeaderMenu>
                        Bulls and Cows
                    </HeaderMenu>
                </Col>
                <Col span={24} >
                    <Link
                        to='/game'
                        style={{
                            marginBottom: '20px'
                        }}
                    >
                        <Card>
                            Start
                        </Card>
                    </Link>
                </Col>
                <Col span={24}>
                    <Link
                        to='/howTo'
                    >
                            <Card>
                                How To
                            </Card>
                        </Link>
                </Col>
                <Col span={24}>
                    <Link
                        to='/history'
                    >
                            <Card>
                                History
                            </Card>
                        </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Menu;