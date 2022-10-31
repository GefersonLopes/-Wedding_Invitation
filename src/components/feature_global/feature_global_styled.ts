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

    background-color: rgba(75, 25, 47, 0.85);
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
    
    font-family: "Shadows Into Light";
    font-size: 1.7rem;
    
    line-height: ${(props) => props.title};
    letter-spacing: 5px;
    text-align: ${(props) => props.color};
    margin-top: ${(props) => props.theme};
    margin-left: ${(props) => props.id};

`;

export const H2 = styled.h2`

    color:#ffffff;
    font-family: "Alice";
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.4rem;
    letter-spacing: 2px;
    text-align: center;

    margin-top: 1.5rem;

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

export const TitleInvitation = styled.h1`
    color: #CD7D3F;
    width: 100%;
    
    font-family: "Philosopher";
    font-size: 1rem;
    
    line-height: 1rem;
    letter-spacing: 2.5px;
    text-align: center;
    margin-top:1.5rem;
    
`;

export const NameDads = styled.h1`
    color: #ffffff;
    width: 100%;
    
    font-family: "Tangerine";
    font-size: 1.5rem;
   
    
    line-height: 2rem;
    letter-spacing: 2px;
    text-align: center;
    margin-top:-2rem;
    font-weight: bolder;

    @media screen and (min-width: 780px){
        font-size: 2rem;
    }
    
`;

export const H1TitleRoutes = styled.h1`
     color: #ffffff;
    width: 100%;
    
    font-family: "Alice";
    font-size: 1.3rem;
`; 