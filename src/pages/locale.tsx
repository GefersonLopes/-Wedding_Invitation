import { AlterRoutes } from "../components/alterRoutes/alterRoutes";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import { Container } from "../components/feature_global/feature_global_styled";

import { AnimateIntroLogo } from "../animated/introLogo";
import { Back } from "../components/buttons/button";
import { BsCheck2Square } from "react-icons/bs";
import { ButtonGlobal, P } from "../components/buttons/button_styled";
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
                        <Back />
                    </button>
                    <DataLocation />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.4rem",
                            marginTop: "2rem",
                        }}
                    >
                        <ButtonGlobal
                            className="button"
                            onClick={() => navigate("/dashboard/presence")}
                        >
                            <BsCheck2Square className="svg" />
                            <P className="p">Confirmar presença</P>
                        </ButtonGlobal>
                        <ButtonGlobal
                            className="button"
                            onClick={() => navigate("/dashboard/gift")}
                        >
                            <GiPresent className="svg" />
                            <P className="p">Presentei-nos</P>
                        </ButtonGlobal>
                    </div>
                </AnimateIntroLogo>
            </FeatureGlobal>
        </Container>
    );
};
