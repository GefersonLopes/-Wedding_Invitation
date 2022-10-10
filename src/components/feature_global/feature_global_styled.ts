import styled from "styled-components";

export const Section = styled.section`
    position: relative;

    height: 80%;
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    background-color: rgba(75, 25, 47, 0.6);
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.25);

    @media screen and (min-width: 425px) {
        width: 40%;
        height: 80%;   
    }

    @media screen and (min-width: 650px) {
        width: 25%;
        height: 80%;   
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 80vh;
    padding-top: 2rem;

`;

export const ImgAnimate = styled.img`
    position: absolute;
    right: ${props => props.width};
    top: ${props => props.color};
    left: ${props => props.sizes};
    bottom: 0.3rem;
    width: 6rem;
    height: 6rem;
`;