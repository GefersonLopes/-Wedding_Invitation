import { useContext } from "react";
import { Context } from "../../context/Context";
import { Div_message, H3 } from "./message_Salmos";
import { AnimateIntroLogo } from "../../animated/introLogo";

export const Salmos = () => {
    return (
        <Div_message>
            <H3 color={"bold"}>
                THAIS <br /> E <br /> NEILSON
            </H3>
                <AnimateIntroLogo>
                <H3 color={"200"}>
                    O senhor é o nosso pastor, e nada nos faltará. <br /> Salmos
                    23:1
                </H3>
                </AnimateIntroLogo>
        </Div_message>
    );
};
