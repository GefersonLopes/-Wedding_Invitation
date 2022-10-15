import { useContext } from "react";
import { MdFavorite } from "react-icons/md";
import { AnimateIntroLogo } from "../animated/introLogo";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";
import { ButtonBack, ButtonShop } from "../components/buttons/button";
import { FeatureGlobal } from "../components/feature_global/feature_global";
import {
    Container,
    H1,
    H2,
    TextShop,
} from "../components/feature_global/feature_global_styled";
import {
    ButtonList,
    H2List,
    Img,
    Li,
    Price,
    TextButton,
    Ul,
} from "../components/list/list_styled";
import { TitleRoutes } from "../components/titleRoutes/titleRoutes";
import { Context } from "../context/Context";
import imgTest from "../img/imgTest.jpeg";
import { motion } from "framer-motion";

export const Present = () => {
    const { navigate } = useContext(Context);
    return (
        <Container>
            <TitleRoutes>PRESENTES:</TitleRoutes>
            <FeatureGlobal>
                <AnimateIntroLogo>
                    <AlterRoutes />
                    <button
                        className="button"
                        onClick={() => navigate("/dashboard")}
                    >
                        <ButtonBack />
                    </button>
                    <section
                        style={{
                            marginTop: "-3.5rem",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <button className="button effectButton">
                            <H2>Eletrônicos</H2>
                        </button>
                        <button className="button effectButton click">
                            <H2>Todos</H2>
                        </button>
                        <button className="button effectButton">
                            <H2>Móveis</H2>
                        </button>
                    </section>
                    <Ul>
                        <Li>
                            <div
                                style={{
                                    height: "100%",
                                }}
                            >
                                <Img src={imgTest} alt="" />
                            </div>
                            <div
                                style={{
                                    marginLeft: "1rem",
                                    width: "4rem",
                                }}
                            >
                                <H2List>Geladeira</H2List>
                                <Price>R$ 2.500,00</Price>
                            </div>
                            <motion.div
                                style={{
                                    position: "absolute",
                                    top: "0.5rem",
                                    right: "0",
                                }}
                                whileHover={{ scale: 1.2 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 10,
                                    duration: 1,
                                    repeat: Infinity,
                                }}
                            >
                                <MdFavorite className="svg svg_top" />
                            </motion.div>
                            <ButtonList>
                                <TextButton>Presentear com esse</TextButton>
                            </ButtonList>
                        </Li>
                        <Li>
                            <div
                                style={{
                                    height: "100%",
                                }}
                            >
                                <Img src={imgTest} alt="" />
                            </div>
                            <div
                                style={{
                                    marginLeft: "1rem",
                                    width: "4rem",
                                }}
                            >
                                <H2List>Geladeira</H2List>
                                <Price>R$ 2.500,00</Price>
                            </div>
                            <motion.div
                                style={{
                                    position: "absolute",
                                    top: "0.5rem",
                                    right: "0",
                                }}
                                whileHover={{ scale: 1.2 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 10,
                                    duration: 1,
                                    repeat: Infinity,
                                }}
                            >
                                <MdFavorite className="svg svg_top" />
                            </motion.div>
                            <ButtonList>
                                <TextButton>Presentear com esse</TextButton>
                            </ButtonList>
                        </Li>
                        <Li>
                            <div
                                style={{
                                    height: "100%",
                                }}
                            >
                                <Img src={imgTest} alt="" />
                            </div>
                            <div
                                style={{
                                    marginLeft: "1rem",
                                    width: "4rem",
                                }}
                            >
                                <H2List>Geladeira</H2List>
                                <Price>R$ 2.500,00</Price>
                            </div>
                            <motion.div
                                style={{
                                    position: "absolute",
                                    top: "0.5rem",
                                    right: "0",
                                }}
                                whileHover={{ scale: 1.2 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 10,
                                    duration: 1,
                                    repeat: Infinity,
                                }}
                            >
                                <MdFavorite className="svg svg_top" />
                            </motion.div>
                            <ButtonList>
                                <TextButton>Presentear com esse</TextButton>
                            </ButtonList>
                        </Li>
                    </Ul>
                    <section
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                        }}
                    >
                        <TextShop color={"center"}>ITENS SELECIONADOS</TextShop>
                        <H1 id={"0.6rem"}>TOTAL R$ 4.475,00</H1>
                    </section>
                    <ButtonShop />
                </AnimateIntroLogo>
            </FeatureGlobal>
        </Container>
    );
};
