import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Application() {

    return (
        <Container>
          <CreateLink to="/create"><button>Create new application</button></CreateLink>
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
                <tr>
                  <td>Dashboard</td>
                  <td>2019-05-28</td>
                  <td>Magica Dimitrova</td>
                  <td>dashboard.my.sweetcloud.se</td>
                </tr>
              </Tbody>
            </Table>
        </Container>
    )
}

export default Application

const Container = styled.div`
    margin-left: 250px;
    height: auto;
    padding-top: 30px;
`
const CreateLink = styled(Link)`
    display: flex; 
    justify-content: flex-end;
    padding-right: 40px;
    text-decoration: none;
    button{
        background-color:  rgb(82, 194, 116);
        border: none;
        border-radius: 3px;
        height: 36px; 
    }
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