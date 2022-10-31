import { useContext, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { AnimateIntroLogo } from "../animated/introLogo";
import { AlterRoutes } from "../components/alterRoutes/alterRoutes";
import { Back, Shop } from "../components/buttons/button";
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
import { motion } from "framer-motion";
import { filterButtons, ListGifts } from "../providers/stopwatch";

export const Gift = () => {
    const { navigate, price, setPrice } = useContext(Context);
    const [list, setList] = useState(ListGifts);

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
                        <Back />
                    </button>
                    <section
                        style={{
                            marginTop: "-3rem",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            position: "absolute",
                            top: "0",
                            zIndex: "1",
                            marginLeft: "-1.5rem",
                            height: "0.5rem",
                        }}
                    >
                        <button
                            style={{
                                height: "1.5rem",
                                marginTop: "4.5rem",
                            }}
                            className="button effectButton click"
                            onClick={() => setList(filterButtons("utensílios"))}
                        >
                            <H2
                                style={{
                                    fontSize: "0.8rem",
                                    margin: "0",
                                }}
                            >
                                Utensílios
                            </H2>
                        </button>
                        <button
                            style={{
                                height: "1.5rem",
                                marginTop: "4.5rem",
                            }}
                            className={`button effectButton click`}
                            onClick={() => setList(ListGifts)}
                        >
                            <H2
                                style={{
                                    fontSize: "0.8rem",
                                    margin: "0",
                                }}
                            >
                                Todos
                            </H2>
                        </button>
                        <button
                            style={{
                                height: "1.5rem",
                                marginTop: "4.5rem",
                            }}
                            className="button effectButton click"
                            onClick={() => setList(filterButtons("móveis"))}
                        >
                            <H2
                                style={{
                                    fontSize: "0.8rem",
                                    margin: "0",
                                }}
                            >
                                Móveis
                            </H2>
                        </button>
                    </section>
                    <Ul
                        style={{
                            height: "15.8rem",
                            overflowY: "scroll",
                            overflowX: "hidden",
                        }}
                    >
                        <>
                            {list.map((gift) => {
                                return (
                                    <Li key={gift.image}>
                                        <div
                                            style={{
                                                height: "100%",
                                            }}
                                        >
                                            <Img
                                                src={gift.image}
                                                alt={gift.product}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                marginLeft: "1rem",
                                                width: "4rem",
                                            }}
                                        >
                                            <H2List
                                                style={{
                                                    width: "15rem",
                                                }}
                                            >
                                                {gift.product}
                                            </H2List>
                                            <Price>R$ {gift.price}</Price>
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
                                        <ButtonList
                                            onClick={() => setPrice(gift.price)}
                                        >
                                            <TextButton>
                                                Presentear com esse
                                            </TextButton>
                                        </ButtonList>
                                    </Li>
                                );
                            })}
                        </>
                    </Ul>
                    <section
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                        }}
                    >
                        <TextShop color={"center"}>ITENS SELECIONADOS</TextShop>
                        <H1
                            style={{
                                fontSize: "1rem",
                            }}
                            id={"0.6rem"}
                        >
                            TOTAL R$ {`${price}`},00
                        </H1>
                    </section>
                    <button style={{
                        border: "none",
                        background: "none",
                    }} onClick={() => navigate("/dashboard/card")}>
                        {price > 0 && <Shop />}
                    </button>
                </AnimateIntroLogo>
            </FeatureGlobal>
        </Container>
    );
};
