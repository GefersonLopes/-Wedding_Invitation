import { useContext } from "react";
import { AnimateIntroLogo } from "../animated/introLogo";
import { ButtonBack } from "../components/buttons/button";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import { Container } from "../components/feature_global/feature_global_styled";
import { TitleRoutes } from "../components/titleRoutes/titleRoutes";
import { Context } from "../context/Context";

export const Card = () => {
    const { navigate } = useContext(Context);
    return (
        <Container>
            <TitleRoutes>PAGAR COM CARTÃO:</TitleRoutes>
            <FeatureGlobal>
                <AnimateIntroLogo>
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
