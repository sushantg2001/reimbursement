import React from 'react';
import {Line} from 'react-chartjs-2';

function Map(props) {
	const state = {
		labels: ['January', 'February', 'March',
				 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct'],
		datasets: [
		  {
			label: 'Reimbursement Amount',
			fill: false,
			lineTension: 0.5,
			backgroundColor: 'rgba(75,192,192,1)',
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 2,
			data: [65, 59, 80, 81, 56, 10, 20, 13, 41, 100]
		  }
		]
	  }
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Past 10 reimbusement graph',
              fontSize:15
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
//   }
}
export default Map;