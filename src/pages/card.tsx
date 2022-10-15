import { useContext } from "react";
import { ButtonBack } from "../components/buttons/button";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import { Container } from "../components/feature_global/feature_global_styled";
import { Context } from "../context/Context";

export const Card = () => {
    const { navigate } = useContext(Context);
    return (
        <Container>
            <FeatureGlobal>
                <button className="button" onClick={()=> navigate("/dashboard")}>
                    <ButtonBack />
                </button>
            </FeatureGlobal>
        </Container>
    );
};
