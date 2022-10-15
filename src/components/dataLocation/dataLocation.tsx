import { BsCalendarDate } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BiAlarm } from "react-icons/bi";
import { Div, Div_division, H3, P } from "./dataLocation_Styles";
import { MdDirectionsBike, MdToday } from "react-icons/md";

export const DataLocation = () => {
    return (
        <header
            style={{
                height: "70%",
                width: "100%",
            }}
        >
            <Div>
                <Div_division>
                    <IoLocationOutline className="svg" />
                    <H3>LOCAL:</H3>
                </Div_division>
                <P>FAZENDA CANTO DOS PASSAROS</P>
            </Div>
            <Div>
                <Div_division>
                    <BiAlarm className="svg" />
                    <H3>HORÁRIO:</H3>
                </Div_division>
                <P>15:00:00 DA TARDE</P>
            </Div>
            <Div>
                <Div_division>
                    <MdToday className="svg" />
                    <H3>DIA:</H3>
                </Div_division>
                <P>SEXTA-FEIRA</P>
            </Div>
            <Div>
                <Div_division>
                    <BsCalendarDate className="svg" />
                    <H3>DATA:</H3>
                </Div_division>
                <P>21/04/2023</P>
            </Div>
            <Div>
                <Div_division>
                    <MdDirectionsBike className="svg" />
                    <H3>NÃO SABE ONDE É?</H3>
                </Div_division>
                <a className="a" href="">
                    <P>CLIQUE AQUI PARA IR AO GOOGLE MAPS</P>
                </a>
            </Div>
        </header>
    );
};
