import styled from "styled-components";

export const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: center;

    width: 6.5rem;
    height: 1.5rem;
    
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 50px;

`;

export const ButtonGlobal = styled.button`
    display: flex;
    align-items: center;
    margin: center;
    gap: 0.5rem;

    width: 13rem;
    height: 1.5rem;
    padding: 0.2rem 1.1em;
    
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
        background-color: rgba(75,25,47,0.7);
    }
`;

export const P = styled.p`
    font-family: "Elise";
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-align: center;
`;
