import TN from "../img/TN.png";

import { AnimateIntroLogo } from "../animated/introLogo";

import { Img } from "../Styles/intro/intro_Styled";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import {
    Container,
    H1,
    H2,
} from "../components/feature_global/feature_global_styled";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";

import { Salmos } from "../components/message_salmos/salmos";
import { CountTime } from "../providers/stopwatch";
import { ButtonStyled } from "../components/buttons/button_styled";
import { useContext } from "react";
import { Context } from "../context/Context";
import { Button } from "../components/buttons/button";

export const Intro_part3 = () => {
    const seconds = CountTime();
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
                            {/* JOSÉ JURACI DA LUZ LOPES <br /> MAURINA
                                    ALMEIDA LOPES <br /> E <br /> NEUZA SANTOS
                                    OLIVEIRA <br /> VALTER SANTOS OLIVEIRA */}
                        </H2>
                        <H1 color="center" title="18px" theme={"1.5rem"}>
                            CONVIDAM PARA A CERIMÔNIA DO SEUS FILHOS
                        </H1>
                        <button
                            className="button"
                            onClick={() => navigate("/dashboard")}
                        >
                            <Button>Avançar</Button>
                        </button>
                    </AnimateIntroLogo>
                </FeatureGlobal>
            </Container>
            <Salmos />
        </>
    );
};
