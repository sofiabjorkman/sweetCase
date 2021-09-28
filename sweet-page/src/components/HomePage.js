import React from 'react'
import styled from 'styled-components';
import Cloud from '../img/cloud.png';
import Invite from '../img/invite.png';
import Wp from '../img/wp.png'


function HomePage() {
    return (
        <Container>
        <StartText>
            <h2>Let's Get Started</h2>
            <p>Lorem psudo let shs holla hdiuf did duud ddudu dudud</p>
        </StartText>
        <Content>
            <Cards>
                <img src={Cloud} alt="" />
                <h3>Connect data sources</h3>
                <p>You can build custom applications and make work easier</p>
                <button>Connect</button>
            </Cards>
            <Cards>
                <img src={Invite} alt="" />
                <h3>Invite users</h3>
                <p>You can build custom applications and make work easier</p>
                <button>Invite</button>
            </Cards>
            <Cards>
                <img src={Wp} alt="" />
                <h3>Build your own application</h3>
                <p>You can build custom applications and make work easier</p>
                <button>Create</button>
            </Cards>
            </Content>
        </Container>
    )
}

export default HomePage

const Container = styled.div`
    margin-left: 250px;
`
const StartText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`
const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px;
    padding: 20px;
    background-color: white;
    justify-content: space-between;

    p {
        font-size: 12px;
    }
    button {
        width: 100px;
        height: 30px;
        border: none;
        border-radius: 3px;
        background-color:  rgb(82, 194, 116);
    }
    img {
        width: 150px;
        height: auto;
    }
    
`