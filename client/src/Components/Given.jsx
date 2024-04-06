import React, { useEffect } from 'react';

const Given = () => {
    const { tableau } = window;
    const containerDiv = document.getElementById("vizContainer");
    const url = "https://public.tableau.com/views/ashish3/PowerConsumptionvsTime";

    const initViz = () => {
        new tableau.Viz(containerDiv, url)
    };

    useEffect(() => {
        initViz();
    }, []);

    return (
        <div id="vizContainer" style={{"marginTop":"100px"}}/>
    );
};

export default Given;
