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

export const Intro_part2 = () => {
    const seconds = CountTime();
    const { navigate } = useContext(Context);
    if(seconds > 10) {
        navigate("/dashboard/intro/3");
    }
    return (
        <>
            <Container>
                <FeatureGlobal>
                    <AlterRoutes />
                    <AnimateIntroLogo>
                        <H1 color="left" title="40px">
                            ESTÁ <br /> CHEGANDO <br /> O DIA!!!
                        </H1>
                        <br />
                        <H1 color="center" title="40px">
                            DO NOSSO <br /> CASAMENTO :)
                        </H1>
                        <br />
                        <H1 color="Right" title="40px">
                            E VOCÊ FOI <br /> CONVIDADO(A)!
                        </H1>
                    </AnimateIntroLogo>
                </FeatureGlobal>
            </Container>
            <Salmos />
        </>
    );
};
