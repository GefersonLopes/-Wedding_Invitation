import { INode } from "../../context/Context";
import { Section } from "./feature_global_styled";


export const FeatureGlobal = ({ children }: INode) => {
    return (
        <Section>  
            {children}
        </Section>
    );
};
