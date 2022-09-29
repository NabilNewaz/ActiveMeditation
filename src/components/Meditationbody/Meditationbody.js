import React, { useEffect, useState } from 'react';
import Headertext from '../Headertext/Headertext';
import Meditationsteps from '../Meditationsteps/Meditationsteps';
import Questionaccordion from '../Questionaccordion/Questionaccordion';

const Meditationbody = () => {
    const [steps, setSteps] = useState([])
    useEffect(() => {
        fetch('stepsData/stepsData.json')
            .then(res => res.json())
            .then(data => setSteps(data))
    }, [])

    return (
        <div className='mx-44'>
            <Headertext></Headertext>
            <div className='grid grid-cols-3 gap-6 h-ful mb-16'>
                {
                    steps.map(step => <Meditationsteps
                        key={step.id}
                        step={step}
                    ></Meditationsteps>)
                }
            </div>
            <Questionaccordion></Questionaccordion>
        </div>
    );
};

export default Meditationbody;