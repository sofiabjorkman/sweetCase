import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';


function Create() {

    let history = useHistory();

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [connect, setConnect] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const info = { name, url, connect }
        console.log(info)
        history.push("/application")
    }


    return (
        <Container>
        <Formcon>
        <Form onSubmit={handleSubmit}>
            <Application>
               <h3>New application</h3>
               <i className="fa fa-times"></i>
            </Application>
            <Line></Line>
              <label>Name</label>
                 <input required type="text" value={name} minLength="3" maxLength="100" onChange={(e) => setName(e.target.value)} />
              <label>URL adress</label>
                 <input required type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
              <label>Connect a domain you already own</label>
                 <input type="text" value={connect} onChange={(e) => setConnect(e.target.value)} />
                 <Add>
                    <i className="fa fa-plus"></i>
                    <p>Add more</p>
                 </Add>
              <Btn>
                  <CancleLink to="/application">Cancel</CancleLink>  
                  <button>Save</button>
              </Btn>
            </Form>
        </Formcon>
        </Container>
    )
}

export default Create

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 250px;
    height: auto;
`
const Formcon = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 60px 20px 60px 20px;
    width: 450px;
    height: auto;
    margin-top: 50px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    input {
        width: 400px;
        height: 30px;
        border: 2px solid lightgray;
        border-radius: 3px;
        margin: 15px 0 5px 0;
    }
`
const Application = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Add = styled.div`
    display: flex;
    align-items: center;
    color:  rgb(82, 194, 116);

    i {
        margin-right: 10px;
    }
`
const Btn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
        background-color:  rgb(82, 194, 116);
        border: none;
        border-radius: 3px;
        height: 30px;
        width: 80px;
        margin-left: 20px;
    }
`
const CancleLink = styled(Link)`
   text-decoration: none;
   color: black;
`
const Line = styled.div`
   border-top: 2px solid lightgray;
   padding-bottom: 20px; 
`
