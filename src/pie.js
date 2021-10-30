import React from 'react';

import {Pie} from 'react-chartjs-2';
const data = {
    datasets: [{
        data: [5, 7, 8, 3,  1],
        backgroundColor: [
            "#EEB0C7",
            "#2A8D9C",
            "#957B8D",
            "#E7E9ED",
            "#FBCEB1"
        ],
        borderColor: 'white'
    }],
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
};

function PieChart(){
       

            return (<Pie data={data}/>)
        }


 


export default PieChart;