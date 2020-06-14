import styled from "styled-components";

export const Data = styled.div`
    position:relative;
    margin: 10px auto auto;
    //overflow: hidden;
    height: 100%;
    overflow-x: auto;
`;

export const Table = styled.table`
    position:relative;
    width: 100%;
    margin: 10px auto auto;
    table-layout: auto;
    border: none;
    border-collapse: collapse;
    caption-side: bottom;
    
    
    td,
    th {
        padding: 1rem;
        font-size:0.9rem;
    }
    
  
    td {
        padding: 5px 10px;
    }
    
    tbody tr {
        :nth-of-type(odd) {
            background-color: #efefef;
        }
        :hover {
            //background-color: lightpink;
        }
        
        font-size:0.8rem;
    }
   
    thead > tr {
        background-color: #c2c2c2;
    }
    
    thead > th {
        background-color: cornflowerblue;
    }
    
  
`;

