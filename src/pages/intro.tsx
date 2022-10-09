import TN from "../img/TN.png";

import { Div_logo, Img } from "../Styles/intro/intro_Styled";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import { Container } from "../components/feature_global/feature_global_styled";
import { Salmos } from "../components/message_salmos/salmos";

export const Intro = () => {
    return (
        <>
            <Container>
                <FeatureGlobal>
                    <Div_logo>
                        <Img src={TN} alt="título" />
                    </Div_logo>
                </FeatureGlobal>
            </Container>
            <Salmos />
        </>
    );
};
