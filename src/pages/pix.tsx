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
import { FeatureGlobal } from "../components/feature_global/feature_global";
import { Container, H1, H2 } from "../components/feature_global/feature_global_styled";
import { TitleRoutes } from "../components/titleRoutes/titleRoutes";
import { Context } from "../context/Context";
import { ImQrcode } from "react-icons/im";
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
                        <ButtonBack />
                    </button>
                    <H1>QR CODE:</H1>
                    <div
                        style={{
                            width: "100%",
                            margin: "0 auto",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <ImQrcode
                            style={{
                                width: "7rem",
                                height: "7rem",
                            }}
                        />
                    </div>
                    <section style={{
                        marginTop: "0.5rem",
                    }}>
                        <H2>Thais Almeida Lopes</H2>
                        <H1 color="center">PIX: (71) 9 96169008</H1>
                        <a className="a" href="">
                            <PInput color="center" theme={"bolder"}>
                                Não tem pix? não tem problema. <br/> clique aqui para
                                nos ajudar de forma parcelada
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
