import React from 'react';
import { Outlet } from "react-router-dom";

function Root(prop) {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default Root;