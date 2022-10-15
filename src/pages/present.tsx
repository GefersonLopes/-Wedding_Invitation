import { useContext } from "react";
import { AnimateIntroLogo } from "../animated/introLogo";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";
import { ButtonBack } from "../components/buttons/button";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import { Container } from "../components/feature_global/feature_global_styled";
import { TitleRoutes } from "../components/titleRoutes/titleRoutes";
import { Context } from "../context/Context";

export const Present = () => {
    const { navigate } = useContext(Context);
    return (
        <Container>
            <TitleRoutes>PRESENTES:</TitleRoutes>
            <FeatureGlobal>
                <AnimateIntroLogo>
                    <AlterRoutes />
                    <button
                        className="button"
                        onClick={() => navigate("/dashboard")}
                    >
                        <ButtonBack />
                    </button>
                </AnimateIntroLogo>
            </FeatureGlobal>
        </Container>
    );
};
