import { IoMdArrowBack } from "react-icons/io";
import { INode } from "../../context/Context";
import { ButtonGlobal, ButtonStyled } from "./button_styled";
import { motion } from "framer-motion";

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
                fontFamily: "Elsie",
                cursor: "pointer",
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
                cursor: "pointer",
            }}
        >
            <ButtonGlobal>{children}</ButtonGlobal>
        </div>
    );
};

export const ButtonBack = () => {
    return (
        <motion.div
            style={{
                position: "absolute",
                top: "0rem",
                left: "0.2rem",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                cursor: "pointer",
            }}
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 1000, damping: 13 }}
        >
            <IoMdArrowBack
                style={{
                    color: "#fff",
                }}
            />
            <p
                style={{
                    fontFamily: "Roboto",
                    fontSize: "10px",
                    fontWeight: "400",
                    lineHeight: "23px",
                    letterSpacing: "5px",
                    textAlign: "center",
                    color: "#fff",
                }}
            >
                VOLTAR
            </p>
        </motion.div>
    );
};
