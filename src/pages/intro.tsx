import TN from "../img/TN.png";
import IconAnimate from "../img/icon_animate.png";
import IconAnimate2 from "../img/icon_animate2.png";

import { Div_logo, Img } from "../components/intro/intro_Styled";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import { Container, ImgAnimate } from "../components/feature_global/feature_global_styled";

export const Intro = () => {
    return (
        <Container>
            <FeatureGlobal>
                <ImgAnimate width={"0"} color={"0"} src={IconAnimate} alt="" />
                <Div_logo>
                    <Img src={TN} alt="título" />
                </Div_logo>
                <ImgAnimate sizes="0" src={IconAnimate2} alt="" />
            </FeatureGlobal>
        </Container>
    );
};
