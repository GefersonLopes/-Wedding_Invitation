import { AlterRoutes } from "../components/alterRoutes/alterRoutes";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import {
    Container,
    H1,
} from "../components/feature_global/feature_global_styled";

import { AnimateIntroLogo } from "../animated/introLogo";
import {
    ButtonBack,
    ButtonGlobalComponent,
} from "../components/buttons/button";
import { BsCheck2Square } from "react-icons/bs";
import { P } from "../components/buttons/button_styled";
import { GiPresent } from "react-icons/gi";
import { DataLocation } from "../components/dataLocation/dataLocation";
import { TitleRoutes } from "../components/titleRoutes/titleRoutes";
import { useContext } from "react";
import { Context } from "../context/Context";

export const Locale = () => {
    const { navigate } = useContext(Context);
    return (
        <Container>
            <TitleRoutes>LOCALIZAÇÃO</TitleRoutes>
            <FeatureGlobal>
                <AlterRoutes />
                <AnimateIntroLogo>
                <button
                    className="button"
                    onClick={() => navigate("/dashboard")}
                >
                    <ButtonBack />
                </button>
                    <DataLocation />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.4rem",
                            marginTop: "0.5rem",
                        }}
                    >
                        <button className="button" onClick={() => navigate("/dashboard/presence")}>
                            <ButtonGlobalComponent>
                                <BsCheck2Square className="svg" />
                                <P className="p">Confirmar presença</P>
                            </ButtonGlobalComponent>
                        </button>
                        <button className="button" onClick={() => navigate("/dashboard/present")}>
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
