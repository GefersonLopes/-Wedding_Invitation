import { motion } from "framer-motion";
import { INode } from "../context/Context";

export const AnimateIntroLogo = ({children}: INode) => {
    return (
        <motion.main
        style={{width: "90%"}}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.3 }}
        >
            {children}
        </motion.main>
    );
};