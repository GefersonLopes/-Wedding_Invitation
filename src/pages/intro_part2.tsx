import { FeatureGlobal } from "../components/feature_global/feature_global";
import {
    Container,
    H1,
} from "../components/feature_global/feature_global_styled";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";

import { Salmos } from "../components/message_salmos/salmos";
import { CountTime } from "../providers/stopwatch";
import { useContext } from "react";
import { Context } from "../context/Context";
import { motion } from "framer-motion";

export const Intro_part2 = () => {
    const seconds = CountTime();
    const { navigate } = useContext(Context);
    if (seconds > 10) {
        navigate("/dashboard/intro/3");
    }

    return (
        <>
            <Container>
                <FeatureGlobal>
                    <AlterRoutes />
                    <div
                        style={{
                            width: "80%",
                        }}
                    >
                        <motion.section
                            initial={{ x: -2000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                            exit={{ x: -200 }}
                        >
                            <H1 color="left" title="25px" theme={"0rem"}>
                                Está <br /> chegando <br /> o dia!!!
                            </H1>
                        </motion.section>

                        <br />
                        <motion.section
                            initial={{ x: -4000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 2 }}
                            exit={{ x: -200 }}
                        >
                            <H1 color="center" title="25px" theme={"2rem"}>
                                O nosso <br /> casamento :)
                            </H1>
                        </motion.section>
                        <br />
                        <motion.section
                            initial={{ x: -6000 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 3 }}
                            exit={{ x: -200 }}
                        >
                            <H1 color="Right" title="25px" theme={"2rem"}>
                                E você foi <br /> convidado(o)!
                            </H1>
                        </motion.section>
                    </div>
                </FeatureGlobal>
            </Container>
            <Salmos />
        </>
    );
};
