import { useContext } from "react";
import { GiPresent } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { AnimateIntroLogo } from "../animated/introLogo";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";
import { Back } from "../components/buttons/button";
import { ButtonGlobal, P } from "../components/buttons/button_styled";
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
                        <Back />
                    </button>
                    <DataPresence />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.4rem",
                            marginTop: "1.2rem",
                        }}
                    >
                        <ButtonGlobal
                            className="button"
                            onClick={() => navigate("/dashboard/locale")}
                        >
                            <IoLocationOutline className="svg" />
                            <P className="p">Localização</P>
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
