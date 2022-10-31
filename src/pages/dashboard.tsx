import { AnimateIntroLogo } from "../animated/introLogo";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";
import { ButtonGlobal } from "../components/buttons/button_styled";
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
import { motion } from "framer-motion";
import { PlaneComponent } from "../components/lottieJson/HeartComponent";

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
                        <PlaneComponent/>
                        <div>
                            <H2>
                                Para mais informações sobre, Escolha uma das
                                opções abaixo:
                            </H2>
                        </div>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
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
                                onClick={() => navigate("/dashboard/presence")}
                            >
                                <BsCheck2Square className="svg" />
                                <P className="p">Confirmar presença</P>
                            </ButtonGlobal>

                            <ButtonGlobal
                                className="button"
                                onClick={() => navigate("/dashboard/pix")}
                            >
                                <MdAttachMoney className="svg" />
                                <P className="p">Doações</P>
                            </ButtonGlobal>

                            <ButtonGlobal
                                className="button"
                                onClick={() => navigate("/dashboard/gift")}
                            >
                                <GiPresent className="svg" />
                                <P className="p">Presentei-nos</P>
                            </ButtonGlobal>
                        </div>
                    </section>
                </AnimateIntroLogo>
            </FeatureGlobal>
        </Container>
    );
};
