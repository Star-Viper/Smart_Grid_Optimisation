import React, { useEffect, useRef } from 'react';

const Practice = () => {
    const { tableau } = window;
    const ref = useRef(null);
    const url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";

    const initViz = () => {

        // ref.current.innerHTML = '';

        new tableau.Viz(ref.current, url, {
            width: "100%",
            height: "100vh",
        });
    };

    useEffect(() => {
        initViz();
    }, []);

    return (
        <div ref={ref} />
    );
};

export default Practice;
