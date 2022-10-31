import { INode } from "../../context/Context";
import { ImgAnimate, Section } from "./feature_global_styled";
import IconAnimate from "../../img/icon_animate.png";
import IconAnimate2 from "../../img/icon_animate2.png";

export const FeatureGlobal = ({ children }: INode) => {
    return (
        <Section>
            <ImgAnimate width={"0"} color={"0"} src={IconAnimate} alt="" />
            {children}
            <ImgAnimate sizes="0" src={IconAnimate2} alt="" />
        </Section>
    );
};
