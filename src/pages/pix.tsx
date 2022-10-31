import { useContext } from "react";
import { GiPresent } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { AnimateIntroLogo } from "../animated/introLogo";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";
import { Back } from "../components/buttons/button";
import { ButtonGlobal, P } from "../components/buttons/button_styled";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import {
    Container,
    H1,
    H2,
} from "../components/feature_global/feature_global_styled";
import { TitleRoutes } from "../components/titleRoutes/titleRoutes";
import { Context } from "../context/Context";
import ImQrcode from "../img/qrCode.jpg";
import { PInput } from "../components/dataPresence/datapresence_styles";

export const Pix = () => {
    const { navigate } = useContext(Context);
    return (
        <Container>
            <TitleRoutes>PIX:</TitleRoutes>
            <FeatureGlobal>
                <AnimateIntroLogo>
                    <AlterRoutes />
                    <button
                        className="button"
                        onClick={() => navigate("/dashboard")}
                    >
                        <Back />
                    </button>
                    <H1 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                        QR CODE:
                    </H1>
                    <div
                        style={{
                            width: "100%",
                            margin: "0 auto",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            style={{
                                width: "7rem",
                                height: "7rem",
                            }}
                            src={ImQrcode}
                            alt="qrCode"
                        />
                    </div>
                    <section
                        style={{
                            marginBottom: "0.5rem",
                        }}
                    >
                        <H1
                            style={{
                                fontSize: "1.2rem",
                                textAlign: "center",
                                marginTop: "1rem",
                            }}
                        >
                            Thais Almeida Lopes
                        </H1>
                        <H2 color="center">PIX: (71) 9 96169008</H2>
                        <a className="a" href="/dashboard/card">
                            <PInput color="center" theme={"bolder"}>
                                Não tem pix? não tem problema. <br /> clique
                                aqui para nos ajudar de forma parcelada
                            </PInput>
                        </a>
                    </section>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.4rem",
                            marginTop: "0.5rem",
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
