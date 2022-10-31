import { AnimateIntroLogo } from "../animated/introLogo";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import {
    Container,
    H1,
    H2,
    NameDads,
    TitleInvitation,
} from "../components/feature_global/feature_global_styled";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";

import { Salmos } from "../components/message_salmos/salmos";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { ButtonStyled } from "../components/buttons/button_styled";

import {
    HeartComponent,
    LoadComponent,
} from "../components/lottieJson/HeartComponent";
import { TextButtonOne } from "../components/dataLocation/dataLocation_Styles";

export const Intro_part3 = () => {
    const { navigate } = useContext(Context);
    const [click, setClick] = useState(false);
    
    const route = () => {
        navigate("/dashboard")
    };

    const startClick = () => {
        setClick(!click);
        
    };

    return (
        <>
            <Container>
                <FeatureGlobal>
                    <AlterRoutes />
                    <AnimateIntroLogo>
                        <NameDads>
                            José Juraci Da L. Lopes <br /> Maurina Almeida Lopes{" "}
                            <HeartComponent /> Neuza Santos Oliveira <br />{" "}
                            Valter Santos Oliveira
                        </NameDads>
                        <TitleInvitation>
                            Convidam para a cerimônia dos seus filhos
                        </TitleInvitation>
                        {click ? (
                            <LoadComponent />
                        ) : (
                            <ButtonStyled
                                style={{
                                    width: "100%",
                                    margin: "0 auto",
                                    marginTop: "1.5rem",
                                    cursor: "pointer",
                                }}
                                className="button"
                                onClick={() => {
                                    startClick();
                                    setTimeout(route,3000);
                                }}
                            >
                                <TextButtonOne>Avançar</TextButtonOne>
                            </ButtonStyled>
                        )}
                    </AnimateIntroLogo>
                </FeatureGlobal>
            </Container>
            <Salmos />
        </>
    );
};
