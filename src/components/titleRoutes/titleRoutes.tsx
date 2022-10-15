import { INode } from "../../context/Context";
import { H1 } from "../feature_global/feature_global_styled";

export const TitleRoutes = ({ children }: INode) => {
    return (
        <H1
            style={{
                textAlign: "center",
                marginBottom: "1rem",
                fontWeight: "bold",
            }}
        >
            {children}
        </H1>
    );
};
