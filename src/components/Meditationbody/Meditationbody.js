import React from 'react';
import Headertext from '../Headertext/Headertext';
import Meditationsteps from '../Meditationsteps/Meditationsteps';
import './Meditationbody.css';

const Meditationbody = () => {
    return (
        <div className='mx-44'>
            <Headertext></Headertext>
            <div className='grid grid-cols-3 gap-6 h-ful mb-16'>
                <Meditationsteps></Meditationsteps>
                <Meditationsteps></Meditationsteps>
                <Meditationsteps></Meditationsteps>
                <Meditationsteps></Meditationsteps>
                <Meditationsteps></Meditationsteps>
                <Meditationsteps></Meditationsteps>
            </div>
        </div>
    );
};

export default Meditationbody;