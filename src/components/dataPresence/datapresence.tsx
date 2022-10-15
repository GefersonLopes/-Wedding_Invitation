import { Button } from "../buttons/button";
import { TbBinary, TbUser } from "react-icons/tb";
import { BiSmile } from "react-icons/bi";
import { P } from "../buttons/button_styled";
import { ContainerPresece, Label, PInput } from "./datapresence_styles";
import { H3 } from "../dataLocation/dataLocation_Styles";

export const DataPresence = () => {
    return (
        <form>
            <fieldset>
                <section>
                    <ContainerPresece>
                        <TbUser className="svg" />
                        <H3>QUAL É O SEU NOME</H3>
                    </ContainerPresece>
                    <Label>
                        <PInput>Nome completo:</PInput>
                        <input
                            type="text"
                            placeholder="Escreva seu nome aqui"
                        />
                    </Label>
                </section>
                <section>
                    <ContainerPresece>
                        <TbBinary className="svg" />
                        <H3>QUE ANO VOCÊ NASCEU</H3>
                    </ContainerPresece>
                    <Label>
                        <PInput>Data de nascimento:</PInput>
                        <input type="date" />
                    </Label>
                </section>
            </fieldset>
            <Button>
                <P style={{
                    color: "#CD7D3F"
                }}>Confirmar</P>
                <BiSmile className="svg"/>
            </Button>
        </form>
    );
};
