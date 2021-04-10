import React from 'react';
import {Line} from 'react-chartjs-2';

function Map(props) {
	const records = props.records
	const recordsFinal = records.reverse();
	var dates;
	var amount;

	var past;
	if(records.length >=10)
	{
		const temp = recordsFinal.slice(0, 10)
		past = 10
		dates = temp.map(a => a.date);
		amount = temp.map(a=> a.amount)
	}
	else
	{
		past = records.length
		dates = recordsFinal.map(a => a.date);
		amount = recordsFinal.map(a=> a.amount)

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