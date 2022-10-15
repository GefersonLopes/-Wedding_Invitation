import { IoMdArrowBack } from "react-icons/io";
import { INode } from "../../context/Context";
import { ButtonGlobal, ButtonStyled } from "./button_styled";

export const Button = ({ children }: INode) => {
    return (
        <div
            style={{
                width: "100%",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
            }}
        >
            <ButtonStyled>{children}</ButtonStyled>
        </div>
    );
};

export const ButtonGlobalComponent = ({ children }: INode) => {
    return (
        <div
            style={{
                width: "100%",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                
            }}
        >
            <ButtonGlobal>{children}</ButtonGlobal>
        </div>
    );
};

export const ButtonBack = () => {

    return (
        <div style={{
            position: 'absolute',
            top: '0rem',
            left: '0.2rem',
            display: 'flex',
            gap: "0.5rem",
            alignItems: "center"
        }}>
            
        <IoMdArrowBack style={{
            color: "#fff",
        }}
        />
        <p style={{
            fontFamily: "Roboto",
            fontSize: "10px",
            fontWeight: "400",
            lineHeight: "23px",
            letterSpacing: "5px",
            textAlign: "center",
            color: "#fff"
        }}>VOLTAR</p>
        </div>
    )

};