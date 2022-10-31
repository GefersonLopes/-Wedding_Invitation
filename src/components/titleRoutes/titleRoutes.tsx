import { INode } from "../../context/Context";
import { H1, H1TitleRoutes } from "../feature_global/feature_global_styled";

export const TitleRoutes = ({ children }: INode) => {
    return (
        <H1TitleRoutes
            style={{
                textAlign: "center",
                marginBottom: "1rem",
                fontWeight: "bold",
            }}
        >
            {children}
        </H1TitleRoutes>
    );
};
