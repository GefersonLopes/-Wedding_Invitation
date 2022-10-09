import { Card } from "../pages/card";
import { Dashboard } from "../pages/dashboard";
import { Intro } from "../pages/intro";
import { Locale } from "../pages/locale";
import { Pix } from "../pages/pix";
import { Presence } from "../pages/presence";
import { Present } from "../pages/present";

import { Route, Routes } from "react-router-dom";

export const RouteInPage = (): any => {
    return (
        <Routes>
            <Route path="/intro" element={<Intro />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/locale" element={<Locale />} />
            <Route path="/dashboard/presence" element={<Presence />} />
            <Route path="/dashboard/pix" element={<Pix />} />
            <Route path="/dashboard/card" element={<Card />} />
            <Route path="/dashboard/present" element={<Present />} />
        </Routes>
    );
};
