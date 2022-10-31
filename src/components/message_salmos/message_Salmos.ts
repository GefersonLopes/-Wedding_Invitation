import styled from "styled-components";

export const H3 = styled.h3`
    font-family: 'Shadows Into Light';
    font-size: 0.7rem;
    font-weight: ${props => props.color};
    line-height: 16px;
    letter-spacing: 3px;
    text-align: center;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.25);
    

    @media screen and (min-width: 1024px) {
        font-size: 1rem;
    }

    @media screen and (min-width: 1440px) {
        font-size: 1.2rem;
        line-height: 1.5rem;
    }
`;

export const Div_message = styled.div`
    position: absolute;
    bottom: 0rem;

    width: 100%;

    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media screen and (min-width: 1440px) {
        gap: 3rem;
        
    }
    @media screen and (min-width: 768px) {
        bottom: 1.2rem;
    }
`;