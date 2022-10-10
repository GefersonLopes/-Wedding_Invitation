import { useContext } from "react";
import { Context } from "../context/Context";

export const CountTime = () => {
    const { time, setTime } = useContext(Context);
    setTimeout(() => setTime(time + 1), 1000)
    return time;
};
