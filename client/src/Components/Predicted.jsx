import React, { useEffect } from 'react';

const Practice = () => {
    const { tableau } = window;
    const containerDiv = document.getElementById("vizContainer");
    const url = "https://public.tableau.com/views/ashish_2/ActualvsPredictedPowerConsumption";

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

export default Practice;
