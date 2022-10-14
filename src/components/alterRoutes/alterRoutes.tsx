import {
    TransitionRoutesTop,
    TransitionRoutesBottom,
} from "../../animated/transitionRoutes";
import { ImgAnimateBottom, ImgAnimateTop } from "../feature_global/feature_global_styled";
import IconAnimate from "../../img/icon_animate.png";
import IconAnimate2 from "../../img/icon_animate2.png";

export const AlterRoutes = () => {
    return (
        <>
            <TransitionRoutesTop>
                <ImgAnimateTop src={IconAnimate} alt="" />
            </TransitionRoutesTop>
            <TransitionRoutesBottom>
                <ImgAnimateBottom src={IconAnimate2} alt="" />
            </TransitionRoutesBottom>
        </>
    );
};
