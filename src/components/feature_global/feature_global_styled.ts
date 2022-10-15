import styled from "styled-components";

export const Section = styled.section`
    position: relative;

    height: 25rem;
    width: 17rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    background-color: rgba(75, 25, 47, 0.6);
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.25);
     
    @media screen and (min-width: 1024px){
        height: 25rem;
        width: 20rem;
    }

    @media screen and (min-width: 1440px){
        height: 35rem;
        width: 30rem;
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
    color: #ffffff;
    width: 100%;
    
    font-family: "elsie";
    font-size: 1rem;
    
    line-height: ${(props) => props.title};
    letter-spacing: 0.5px;
    text-align: ${(props) => props.color};
    margin-top: ${(props) => props.theme};
    margin-left: ${(props) => props.id};

`;

export const H2 = styled.h2`
    color:#ffffff;
    font-family: "Tangerine";
    font-weight: bold;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 2px;
    text-align: center;

`;

export const TextShop = styled.h1`
    color: #CD7D3F;
    width: 100%;
    
    font-family: "elsie";
    font-size: 1rem;
    
    line-height: ${(props) => props.title};
    letter-spacing: 0.5px;
    text-align: ${(props) => props.color};
`;