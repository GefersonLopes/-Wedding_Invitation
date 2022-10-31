import { Div_message, H3 } from "./message_Salmos";

export const Salmos = () => {
    return (
        <Div_message>
            <div style={{
                display:"flex",
                flexDirection:"column",
                gap:"1rem"
            }}>
                <H3 color={"bold"}>
                    THAIS <br /> E <br /> NEILSON
                </H3>

                <H3 color={"200"}>
                    O senhor é o nosso pastor, e nada nos faltará. <br /> Salmos
                    23:1
                </H3>
            </div>
        </Div_message>
    );
};
