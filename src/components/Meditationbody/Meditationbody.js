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
        <div className='lg:mx-32 mx-6'>
            <Headertext></Headertext>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 grid-cols-1 h-ful mb-16'>
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