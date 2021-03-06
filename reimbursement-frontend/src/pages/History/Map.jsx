import React from 'react';
import {Line} from 'react-chartjs-2';

/* This file contains Map for reimbursements. */
function Map(props) {
	const records = props.records
	const records2 = [...records];
	records2.reverse();
	const temp = records2.slice(0, 10)
	temp.reverse();


	var dates;
	var amount;

	var past;
	if(records.length >=10)
	{
		past = 10
		dates = temp.map(a => a.date);
		amount = temp.map(a=> a.amount)
	}
	else
	{
		past = records.length
		dates = records.map(a => a.date);
		amount = records.map(a=> a.amount)

	}
    
	var head=	'Past ' +past+' reimbusements graph'
	const state = {
		labels: [...dates],
		datasets: [
		  {
			label: 'Amount',
			fill: false,
			lineTension: 0.5,
			backgroundColor: '#000',
			borderColor: '#3FADA8',
			borderWidth: 2,
			data: [...amount]
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
              text:head,
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