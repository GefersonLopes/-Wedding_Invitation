import { motion } from "framer-motion";
import { INode } from "../context/Context";

export const TransitionRoutesTop = ({ children }: INode) => {
    return (
        <motion.div
        initial={{ x: -30, y: 190 }}
        style={{
            position: "absolute",
            top: "-6rem",
            right: "2.5rem",
            width: "6rem",
            height: "6rem",
            padding: 0,
            margin: 0,
            borderRadius: "0 0 0 100%"
        }}
        animate={{
                x: 35,
                y: 100,
               
            }}
            transition={{ duration: 0.8 }}
          
            >
            {children}
        </motion.div>
    );
};

export const TransitionRoutesBottom = ({ children }: INode) => {
    return (
        <motion.div
        style={{
            position: "absolute",
            bottom: "0.85rem",
            left: "8.2rem",
            width: "6rem",
            height: "6rem",
            padding: 0,
            margin: 0
        }}
            initial={{ x: -20, y: -100 }}
                animate={{
                    x: -128,
                    y: 5,
                }}
               
                transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
};
