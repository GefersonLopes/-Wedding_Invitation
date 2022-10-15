import { useContext } from "react";
import { GiPresent } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { AnimateIntroLogo } from "../animated/introLogo";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";
import {
    ButtonBack,
    ButtonGlobalComponent,
} from "../components/buttons/button";
import { P } from "../components/buttons/button_styled";
import { DataPresence } from "../components/dataPresence/datapresence";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import { Container } from "../components/feature_global/feature_global_styled";
import { TitleRoutes } from "../components/titleRoutes/titleRoutes";
import { Context } from "../context/Context";

export const Presence = () => {
    const { navigate } = useContext(Context);

    return (
        <Container>
            <TitleRoutes>CONFIRMAR PRESENÇA:</TitleRoutes>
            <FeatureGlobal>
                <AnimateIntroLogo>
                    <AlterRoutes />
                    <button
                        className="button"
                        onClick={() => navigate("/dashboard")}
                    >
                        <ButtonBack />
                    </button>
                    <DataPresence/>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.4rem",
                            marginTop: "1.2rem",
                        }}
                    >
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
                    </div>
                </AnimateIntroLogo>
            </FeatureGlobal>
        </Container>
    );
};
