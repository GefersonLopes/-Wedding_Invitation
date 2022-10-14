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

export const Intro = () => {
    const seconds = CountTime();

    return (
        <>
            <Container>
                {" "}
                {/* Div que centraliza os elementos filhos */}
                <FeatureGlobal>
                    {" "}
                    {/* Section/Feature principal de cor vinho */}
                    {seconds < 4 && (
                        <>
                            <AlterRoutes />{" "}
                            {/* Animação de transição de cada rota */}
                            <AnimateIntroLogo>
                                {" "}
                                {/* Animação Logo Inicial "TN" */}
                                <Img src={TN} alt="título" /> {/* Imagem TN */}
                            </AnimateIntroLogo>
                        </>
                    )}
                    {seconds > 4 && seconds < 10 && (
                        <>
                            <AlterRoutes />
                            <AnimateIntroLogo>
                                <H1 color="left" title="40px" >
                                    ESTÁ <br /> CHEGANDO <br /> O DIA!!!
                                </H1>
                                <br />
                                <H1 color="center" title="40px">
                                    NOSSO <br /> CASAMENTO :)
                                </H1>
                                <br />
                                <H1 color="Right" title="40px">
                                    E VOCÊ FOI <br /> CONVIDADO(A)!
                                </H1>
                            </AnimateIntroLogo>
                        </>
                    )}
                    {seconds > 10 && (
                        <>
                            <AlterRoutes />
                            <AnimateIntroLogo>
                                <H2>
                                    José Juraci da Luz Lopes <br /> Maurina
                                    Almeida Lopes <br /> e <br /> Neuza Santos
                                    Oliveira <br /> Valter Santos Oliveira
                                </H2>
                                <H1 color="center" title="35px" theme={"2.5rem"}>
                                    Convidam para a <br /> cerimônia do seus <br /> filhos 
                                </H1>
                            </AnimateIntroLogo>
                        </>
                    )}
                </FeatureGlobal>
            </Container>
            <Salmos />
        </>
    );
};
