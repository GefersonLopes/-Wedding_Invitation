import styled from "styled-components";

export const Ul = styled.ul`
    width: 100%;
`;

export const Li = styled.li`
    position: relative;
    height: 4.8rem;
    width: 100%;
    border-radius: 20px;
    margin-bottom: 0.5rem;

    background-color: #FFFFFF;

    display: flex;
`;

export const Img = styled.img`
    height: 90%;
    width: 4rem;
    border-radius: 20px;
    margin: 0.3rem 0 0 0.5rem;
`;

export const H2List = styled.h2`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #4B192F;
    width: 100%;
    margin-top: 1rem;
    
`;

export const Price = styled.p`
    color: #CD7D3F;
    height: 10px;
    width: 94px;
    font-size: 1rem;
    font-family: roboto;

`;

export const ButtonList = styled.button`
    position: absolute;
    bottom: 0.2rem;
    right: 1rem;

    background-color: #4B192F;
    border: none;
    border-radius: 50px;
    width: 8rem;
    height: 1.3rem;
`; 

export const TextButton = styled.span`
    color: #CD7D3F;
    font-size: 0.75rem;
`;