import { INode } from "../../context/Context";
import { ImgAnimate, Section } from "./feature_global_styled";
import IconAnimate from "../../img/icon_animate.png";
import IconAnimate2 from "../../img/icon_animate2.png";
import {
    TransitionRoutesBottom,
    TransitionRoutesTop,
} from "../../animated/transitionRoutes";

export const FeatureGlobal = ({ children }: INode) => {
    return (
        <Section>
            <TransitionRoutesTop>
                <ImgAnimate src={IconAnimate} alt="" />
            </TransitionRoutesTop>
            {children}
            <TransitionRoutesBottom>
                <ImgAnimate src={IconAnimate2} alt="" />
            </TransitionRoutesBottom>
        </Section>
    );
};
