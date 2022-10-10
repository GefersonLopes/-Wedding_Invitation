import { motion } from "framer-motion";
import { INode } from "../context/Context";

export const TransitionRoutesTop = ({ children }: INode) => {
    return (
        <motion.div
            initial={{ x: -30, y: 190 }}
            animate={{
                x: 35,
                y: 100,
            }}
            transition={{ duration: 0.8 }}
            exit={{ x: 0, y: 0 }}
        >
            {children}
        </motion.div>
    );
};

export const TransitionRoutesBottom = ({ children }: INode) => {
    return (
        <motion.div
            initial={{ x: -20, y: -100 }}
                animate={{
                    x: -128,
                    y: 5,
                }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};
