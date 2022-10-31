import heart from "../../json/heart.json";
import load from "../../json/load.json";
import plane from "../../json/plane.json";

import { useLottie } from "lottie-react";

export const HeartComponent = () => {
    const options = {
        animationData: heart,
        loop: true,
    };

    const { View } = useLottie(options);

    return (
        <div
            style={{
                width: "100%",
                height: "4rem",
                display: "flex",
                justifyContent: "center",
            }}
        >
            {View}
        </div>
    );
};

export const LoadComponent = () => {
    const options = {
        animationData: load,
        loop: true,
    };

    const { View } = useLottie(options);

    return (
        <div
            style={{
                width: "100%",
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1.5rem",
            }}
        >
            <div
                style={{
                    width: "3rem",
                }}
            >
                {View}
            </div>
        </div>
    );
};

export const PlaneComponent = () => {
    const options = {
        animationData: plane,
        loop: true,
    };

    const { View } = useLottie(options);

    return (
        <div
            style={{
                width: "100%",
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1.5rem",
            }}
        >
            <div
                style={{
                    width: "7rem",
                }}
            >
                {View}
            </div>
        </div>
    );
};
