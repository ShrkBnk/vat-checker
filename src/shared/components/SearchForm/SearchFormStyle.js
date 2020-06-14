import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 50px auto auto;
    max-width: 600px;
    padding: 35px;
    box-shadow: 0 0 1rem rgba(0,0,0,.1);
    border-radius: 5px;
    overflow: hidden;
`;

export const Form = styled.form`
    position: relative;
    width: 100%;
    margin:auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;


export const Input = styled.input`
    margin: 5px;
    padding: 15px;
    width: 70%;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.17);
    box-sizing: border-box;
    &:hover {
      border: 1px solid rgba(0,0,0,0.69);
    }
    
     @media screen and (max-width: 579px) {
        width: 100%;
     }
    
`;

export const Button = styled.button`
    
    margin:5px;
    box-sizing: border-box;
    flex:2;
    border:0;
    position:relative;
    width:30%;
    padding: 15px;
    right: 0;
    font-size: 0.8em;
    border-radius: 0.25rem;
    background-color: #3f51b5;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
 

    -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    -moz-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    -ms-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    -o-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    
    &:hover {
        cursor: pointer;
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    }
    
    @media screen and (max-width: 579px) {
        width: 100%;
     }
   
    
`;




