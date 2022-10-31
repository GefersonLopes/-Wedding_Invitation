import { useContext } from "react";
import { AnimateIntroLogo } from "../animated/introLogo";
import { Back } from "../components/buttons/button";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import { Container } from "../components/feature_global/feature_global_styled";
import { TitleRoutes } from "../components/titleRoutes/titleRoutes";
import { Context } from "../context/Context";
import img from "../img/qrCode.jpg";

export const Card = () => {
    const { navigate, price } = useContext(Context);
    const payment = [{ qrCode: img, link: "https://mpago.la/2tkHjtu", value: 450 }];

    const gift = payment.find((data) => data.value === price);
    console.log(gift);
    if(!gift) {
        navigate("/dashboard/gift");
    }

    return (
        <Container>
            <TitleRoutes>PAGAR COM CARTÃO:</TitleRoutes>
            <FeatureGlobal>
                <AnimateIntroLogo>
                    <button
                        className="button"
                        onClick={() => navigate("/dashboard")}
                    >
                        <Back />
                    </button>

                    <section style={{
                        width: "100%"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent:'center'
                        }}>
                            <img style={{
                                width: "15rem",
                                height: "15rem",
                                margin: "0 auto",
                                borderRadius: "20px"
                            }} src={gift!.qrCode} alt="" />
                            <a className="a p" style={{
                                fontSize: "1.5rem",
                                textAlign: "center"
                            }} href={gift!.link} target="_blank">
                                Clique aqui para escolher a forma de pagamento
                            </a>
                        </div>
                    </section>
                </AnimateIntroLogo>
            </FeatureGlobal>
        </Container>
    );
};
