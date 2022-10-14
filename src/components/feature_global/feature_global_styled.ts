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
        width: 60vw;
        height: 65vw;   
    }

    @media screen and (min-width: 650px) {
        width: 40vw;
        height: 35vw;   
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 80vh;
    padding-top: 2rem;

`;

export const ImgAnimateTop = styled.img`
    position: absolute;

    bottom: 0;
    width: 6rem;
    height: 6rem;
`;

export const ImgAnimateBottom = styled.img`
    position: absolute;
    
    top: 0.3rem;
    width: 6rem;
    height: 6rem;
`;

export const H1 = styled.h1`
    color:#ffffff;
    width: 100%;
    font-weight: bold;
    font-family: Alice;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: ${(props) => props.title};
    letter-spacing: 0.5px;
    text-align: ${(props) => props.color};
    margin-top: ${(props) => props.theme};

`;

export const H2 = styled.h2`
    color:#ffffff;
    font-family: "Shadows Into Light";
    font-weight: bold;
    font-size: 1rem;
    font-weight: 800;
    line-height: 23px;
    letter-spacing: 2px;
    text-align: center;
    font-family: Shadows Into Light;


`;