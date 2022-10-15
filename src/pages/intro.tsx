import TN from "../img/TN.png";

import { AnimateIntroLogo } from "../animated/introLogo";

import { Img } from "../Styles/intro/intro_Styled";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import { Container } from "../components/feature_global/feature_global_styled";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";

import { Salmos } from "../components/message_salmos/salmos";
import { CountTime } from "../providers/stopwatch";
import { useContext } from "react";
import { Context } from "../context/Context";

export const Intro = () => {
    const seconds = CountTime();
    const { navigate } = useContext(Context);
    if (seconds > 4 && seconds < 10) {
        navigate("/dashboard/intro/2");
    }
    return (
        <>
            <Container>
                {" "}
                {/* Div que centraliza os elementos filhos */}
                <FeatureGlobal>
                    {" "}
                    {/* Section/Feature principal de cor vinho */}
                    <AlterRoutes /> {/* Animação de transição de cada rota */}
                    <AnimateIntroLogo>
                        {" "}
                        {/* Animação Logo Inicial "TN" */}
                        <Img src={TN} alt="título" /> {/* Imagem TN */}
                    </AnimateIntroLogo>
                </FeatureGlobal>
            </Container>
            <Salmos />
        </>
    );
};
