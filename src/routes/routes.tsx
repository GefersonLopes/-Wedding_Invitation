import { Card } from "../pages/card";
import { Dashboard } from "../pages/dashboard";
import { Intro } from "../pages/intro";
import { Locale } from "../pages/locale";
import { Pix } from "../pages/pix";
import { Presence } from "../pages/presence";
import { Gift } from "../pages/gift";

import { Route, Routes } from "react-router-dom";
import { Intro_part2 } from "../pages/intro_part2";
import { Intro_part3 } from "../pages/intro_part3";

export const RouteInPage = (): any => {
    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/intro/2" element={<Intro_part2 />} />
            <Route path="/dashboard/intro/3" element={<Intro_part3 />} />
            <Route path="/dashboard/locale" element={<Locale />} />
            <Route path="/dashboard/presence" element={<Presence />} />
            <Route path="/dashboard/pix" element={<Pix />} />
            <Route path="/dashboard/card" element={<Card />} />
            <Route path="/dashboard/gift" element={<Gift />} />
        </Routes>
    );
};
