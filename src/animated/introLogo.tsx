import { motion } from "framer-motion";
import { INode } from "../context/Context";

export const AnimateIntroLogo = ({children}: INode) => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
            }}
            transition={{ duration: 2.5 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.main>
    );
};