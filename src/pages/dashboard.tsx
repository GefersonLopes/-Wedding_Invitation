import { AnimateIntroLogo } from "../animated/introLogo";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";
import { ButtonGlobalComponent } from "../components/buttons/button";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import {
    Container,
    H2,
} from "../components/feature_global/feature_global_styled";
import { IoLocationOutline } from "react-icons/io5";
import { BsCheck2Square } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { GiPresent } from "react-icons/gi";
import { P } from "../components/buttons/button_styled";
import { useContext } from "react";
import { Context } from "../context/Context";

export const Dashboard = () => {
    const { navigate } = useContext(Context);
    return (
        <Container>
            <FeatureGlobal>
                <AlterRoutes />
                <AnimateIntroLogo>
                    <section
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                        }}
                    >
                        <div>
                            <H2>
                                Para mais informações sobre, Escolha uma das
                                opções abaixo:
                            </H2>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.4rem",
                                marginTop: "1.2rem",
                            }}
                        >
                            <button className="button" onClick={() => navigate("/dashboard/locale")}>
                                <ButtonGlobalComponent>
                                    <IoLocationOutline className="svg" />
                                    <P className="p">Localização</P>
                                </ButtonGlobalComponent>
                            </button>
                            <button className="button" onClick={() => navigate("/dashboard/presence")}>
                                <ButtonGlobalComponent>
                                    <BsCheck2Square className="svg" />
                                    <P className="p">Confirmar presença</P>
                                </ButtonGlobalComponent>
                            </button>

                            <button className="button" onClick={() => navigate("/dashboard/pix")}>
                                <ButtonGlobalComponent>
                                    <MdAttachMoney className="svg" />
                                    <P className="p">Doações</P>
                                </ButtonGlobalComponent>
                            </button>

                            <button className="button" onClick={() => navigate("/dashboard/present")}>
                                <ButtonGlobalComponent>
                                    <GiPresent className="svg" />
                                    <P className="p">Presentei-nos</P>
                                </ButtonGlobalComponent>
                            </button>
                        </div>
                    </section>
                </AnimateIntroLogo>
            </FeatureGlobal>
        </Container>
    );
};
