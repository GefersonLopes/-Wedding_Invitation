import { TbBinary, TbUser } from "react-icons/tb";
import { BiSmile } from "react-icons/bi";
import { P } from "../buttons/button_styled";
import { ContainerPresece, Label, PInput } from "./datapresence_styles";
import { H3 } from "../dataLocation/dataLocation_Styles";
import { ButtonStyled } from "../buttons/button_styled";
import { useForm, Resolver } from "react-hook-form";
import { RiEmotionSadLine } from "react-icons/ri";
import { toast } from "react-toastify";

interface IUser {
    name: string;
    date: string;
}

export const DataPresence = () => {
    const resolver: Resolver<IUser> = async (values) => {
        return {
            values: values.name ? values : {},
            errors:
                !values.name || !values.date
                    ? {
                          name: {
                              type: "required",
                              message: "Os dois campos são obrigatórios!",
                          },
                      }
                    : {},
        };
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>({ resolver });
    const onSubmit = handleSubmit((data) => {
        console.log(data);

        if (data.name !== "Geferson") {
            toast.error(
                `${data.name}, Não consegui achar seus dados na lista de convidados`,
                {
                    position: "bottom-center",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }
            );
        } else {
            toast.success(`${data.name}, Presença confirmada! olhe seu email para detalhes`, {
                position: "bottom-center",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    });

    return (
        <form onSubmit={onSubmit}>
            <fieldset>
                <section>
                    <ContainerPresece>
                        <TbUser className="svg" />
                        {errors.name ? (
                            <H3 style={{ color: "red" }}>
                                O NOME É OBRIGATÓRIO!
                            </H3>
                        ) : (
                            <H3>QUAL É O SEU NOME</H3>
                        )}
                    </ContainerPresece>
                    <Label>
                        <PInput>Nome completo:</PInput>
                        <input
                            type="text"
                            placeholder="Digite seu nome aqui"
                            {...register("name")}
                        />
                    </Label>
                </section>
                <section>
                    <ContainerPresece>
                        <TbBinary className="svg" />
                        {errors.name ? (
                            <H3 style={{ color: "red" }}>
                                A DATA É OBRIGATÓRIA!
                            </H3>
                        ) : (
                            <H3>ANO QUE VOCÊ NASCEU</H3>
                        )}
                    </ContainerPresece>
                    <Label>
                        <PInput>Data de nascimento:</PInput>
                        <input type="date" {...register("date")} />
                    </Label>
                </section>
            </fieldset>
            <div
                style={{
                    width: "100%",
                    margin: "1rem 0",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <ButtonStyled>
                    <P
                        style={{
                            color: "#CD7D3F",
                        }}
                    >
                        Confirmar
                    </P>
                    {errors.name ? (
                        <RiEmotionSadLine className="svg" />
                    ) : (
                        <BiSmile className="svg" />
                    )}
                </ButtonStyled>
            </div>
        </form>
    );
};
