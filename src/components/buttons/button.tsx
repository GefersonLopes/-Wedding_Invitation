import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

export const Back = () => {
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

export const Shop = () => {
    return (
        <motion.div
            style={{
                position: "absolute",
                bottom: "0rem",
                right: "0.2rem",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                cursor: "pointer",
            }}
            initial={{ y: -15 }}
            animate={{ y: 0}}
            exit={{ y: -15 }}
            transition={{ type: "spring", stiffness: 500, damping: 20, duration: 0.8, repeat: Infinity }}
        >
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
                PRESENTEAR
            </p>
            <IoMdArrowForward
                style={{
                    color: "#fff",
                }}
            />
        </motion.div>
    );
};
