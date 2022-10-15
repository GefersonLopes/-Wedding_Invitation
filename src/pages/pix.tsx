import { useContext } from "react";
import { GiPresent } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";
import {
    ButtonBack,
    ButtonGlobalComponent,
} from "../components/buttons/button";
import { P } from "../components/buttons/button_styled";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import { Container } from "../components/feature_global/feature_global_styled";
import { Context } from "../context/Context";

export const Pix = () => {
    const { navigate } = useContext(Context);
    return (
        <Container>
            <FeatureGlobal>
                <AlterRoutes />
                <button
                    className="button"
                    onClick={() => navigate("/dashboard")}
                >
                    <ButtonBack />
                </button>
                <button
                    className="button"
                    onClick={() => navigate("/dashboard/locale")}
                >
                    <ButtonGlobalComponent>
                        <IoLocationOutline className="svg" />
                        <P className="p">Localização</P>
                    </ButtonGlobalComponent>
                </button>

                <button
                    className="button"
                    onClick={() => navigate("/dashboard/present")}
                >
                    <ButtonGlobalComponent>
                        <GiPresent className="svg" />
                        <P className="p">Presentei-nos</P>
                    </ButtonGlobalComponent>
                </button>
            </FeatureGlobal>
        </Container>
    );
};
