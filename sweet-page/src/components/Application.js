import React, { useState } from 'react';
import styled from 'styled-components';

function Application() {

  const addData = [
    {
      id: 1,
      fname: 'MagdaDiaz',
      url: 'dashboard.my.sweetcloud.se',
      date: '2019-05-28'
    },
    {
      id: 2,
      fname: 'Sweet',
      url: 'hello.my.sweetcloud.se',
      date: '2019-05-28'
    }
  ]
  
  const [table, setTable] = useState(addData)

  const [formInput, setFormInput] = useState({
    id: '',
    fname: '',
  })

  const [urlInput, setUrlInput] = useState({
    id: '',
    url: '',
  })

  const handleChange = (e) => {
     e.preventDefault()

     const fieldName = e.target.name;
     const fieldValue = e.target.value;

     const newData = {...formInput};
     newData[fieldName] = fieldValue;

     setFormInput(newData);
  }

  const urlValue = '.my.sweetcloud.se';

  const handleUrl = (e) => {
    e.preventDefault()

    const fieldUrl = e.target.name;
    const fieldVal = e.target.value + urlValue;

    const addUrl = {...urlInput};
    addUrl[fieldUrl] = fieldVal;

    setUrlInput(addUrl);
 }
 
  const handleSubmit = (e) => {
    e.preventDefault();

    const newCon = {
      id: Math.random() * 1000,
      fname: formInput.fname,
      url: urlInput.url,
    }

    const newApplication = [...table, newCon];

    setTable(newApplication);
    console.log(newApplication)
  }

  const [state, setState] = useState(false);

    return (
        <Container>
          <CreateCon>
            <Create onClick={() => setState(true)}>Create new application</Create>
          </CreateCon>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Dated created</th>
                  <th>Created by</th>
                  <th>URL address</th>
                </tr>
              </thead>
              <Tbody>
              {table.map((t) => {
                return (
                  <>
                  <tr>
                  <td>{t.fname}</td>
                  <td>2019-05-28</td>
                  <td>Magda</td>
                  <td>{t.url}</td>
                </tr>
                </> 
                )
              })}
              </Tbody>
            </Table>
          
            {state ? 
              <FormContainer>
                <Formcon>
                  <Form onSubmit={handleSubmit}>
                    <Appli>
                      <h3>New application</h3>
                      <i onClick={() => setState(false)} className="fa fa-times"></i>
                    </Appli>
                    <Line></Line>

                    <label>Name</label>
                      <Input required="required" type="text" name="fname" minLength="3" maxLength="100" onChange={handleChange} />
                    <label>URL adress</label>
                      <Suffix>
                        <input required="required" type="text" name="url" onChange={handleUrl} />
                        <span>.my.sweetcloud.se</span>
                      </Suffix>
                    <label>Connect a domain you already own</label>
                      <Input type="text" onChange={handleChange} />

                    <Add>
                      <i className="fa fa-plus"></i>
                      <p>Add more</p>
                    </Add>
                    <Btn>
                      <Cancle onClick={() => setState(false)}>Cancel</Cancle>  
                      <Save type="submit">Save</Save>
                    </Btn>

                  </Form> 
                </Formcon>
            </FormContainer>
            : null
            }
        </Container>
    )
}

export default Application 

const Container = styled.div`
    margin-left: 250px;
    height: auto;
    padding-top: 30px;
`
const CreateCon = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
`
const Create = styled.button`
    background-color:  rgb(82, 194, 116);
    text-decoration: none;
    border: none;
    border-radius: 3px;
    height: 36px; 
    cursor: pointer;
`
const Table = styled.table`
    border-collapse: collapse;
    border: 1px solid lightgray;
    margin-top: 20px;
    width: 100%;
    table-layout: fixed;

    td, th {
        border-bottom: 1px solid lightgray;
        padding: 8px 10px;
        text-align: left;
}
`
const Tbody = styled.tbody`
       background-color: white;
`
//////////////////////////////////////

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`
const Formcon = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 20px 20px 20px 20px;
    width: 450px;
    height: auto;
    margin-top: 50px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Suffix = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    border: 2px solid #ccc;
    border-radius: 3px;
    height: 32px;
    margin: 15px 0 10px 0;

  span {
    padding: 6px 12px;
    color: #555;
    text-align: center;
    background-color: #eee;
    border-left: 2px solid #ccc;
  }

  input {
    width: 248px;
    height: 32px;
    border: none;
 }
`
const Input = styled.input` 
    width: 400px;
    height: 30px;
    border: 2px solid lightgray;
    border-radius: 3px;
    margin: 15px 0 10px 0;
`
const Appli = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
      cursor: pointer;
    }
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
`
const Save = styled.button`
    background-color:  rgb(82, 194, 116);
    border: none;
    border-radius: 3px;
    height: 30px;
    width: 80px;
    margin-left: 20px;
    cursor: pointer;
`
const Cancle = styled.button`
    background-color:  white;
    text-decoration: none;
    border: none;
    color: black;
    cursor: pointer;
`
const Line = styled.div`
    border-top: 2px solid lightgray;
    padding-bottom: 20px; 
`