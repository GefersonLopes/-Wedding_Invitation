import TN from "../img/TN.png";

import { Div_logo, Img } from "../Styles/intro/intro_Styled";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import { Container } from "../components/feature_global/feature_global_styled";
import { Salmos } from "../components/message_salmos/salmos";
import { AnimateIntroLogo } from "../animated/introLogo";
import { CountTime } from "../providers/stopwatch";

export const Intro = () => {
    const seconds = CountTime();

    return (
        <>
            <Container>
                <FeatureGlobal>
                    <Div_logo>
                        {seconds < 4 && (
                            <AnimateIntroLogo>
                                <Img src={TN} alt="título" />
                            </AnimateIntroLogo>
                        )}
                        {seconds > 4 && seconds < 8 && (
                            <AnimateIntroLogo>
                                <p> apresentação 1 </p>
                            </AnimateIntroLogo>
                        )}
                        {seconds > 8 && (
                            <AnimateIntroLogo>
                                <p> apresentação 2 </p>
                            </AnimateIntroLogo>
                        )}
                    </Div_logo>
                </FeatureGlobal>
            </Container>
            <Salmos />
        </>
    );
};
