import styled from "styled-components";


export const ContainerPresece = styled.div`
    display: flex;
    align-items: center;
    margin: 0.3rem 0;
    gap: 0.3rem;
`;

export const Label = styled.label`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;
    margin: 0 auto;

`;

export const PInput = styled.p`
    color: #CD7D3F;
    font-size: 0.8rem;
    font-weight: 500;
    text-align: ${props => props.color};
    font-weight: ${props => props.theme};
`;