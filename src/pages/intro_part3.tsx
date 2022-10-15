import { AnimateIntroLogo } from "../animated/introLogo";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import {
    Container,
    H1,
    H2,
} from "../components/feature_global/feature_global_styled";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";

import { Salmos } from "../components/message_salmos/salmos";
import { useContext } from "react";
import { Context } from "../context/Context";
import { Button } from "../components/buttons/button";

export const Intro_part3 = () => {
    const { navigate } = useContext(Context);
    return (
        <>
            <Container>
                <FeatureGlobal>
                    <AlterRoutes />
                    <AnimateIntroLogo>
                        <H2>
                            José Juraci Da Luz Lopes <br /> Maurina Almeida
                            Lopes <br /> E <br /> Neuza Santos Oliveira <br />{" "}
                            Valter Santos Oliveira
                        </H2>
                        <H1 color="center" title="18px" theme={"1.5rem"}>
                            Convidam para a cerimônia dos seus filhos
                        </H1>
                        <button
                        style={{
                            width: "100%",
                            margin: "0 auto",
                            marginTop: "1.5rem",
                            cursor: "pointer",
                        }}
                            className="button"
                            onClick={() => navigate("/dashboard")}
                        >
                            <Button>animação que gira</Button>
                        </button>
                    </AnimateIntroLogo>
                </FeatureGlobal>
            </Container>
            <Salmos />
        </>
    );
};
