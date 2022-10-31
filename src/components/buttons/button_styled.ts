import styled from "styled-components";

export const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: center;

    width: 40%;
    height: 2rem;
    
    background-color: transparent;
    border: 1px solid #cd7d3f;
    color: #000;
    border-radius: 50px;

    &:hover {
        border: 1px solid #ffffff
    }
`;

export const ButtonGlobal = styled.button`
    display: flex;
    align-items: center;
    margin: center;
    gap: 0.5rem;

    width: 90%;
    height: 2rem;
    padding: 0.2rem 1.1em;
    margin: 0 auto;
    
    background-color: #fff;
    color: #000;
    border: 0.5px solid transparent;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
        background-color: rgba(75,25,47,0.7);
        border: 0.5px solid #ffffff;
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
