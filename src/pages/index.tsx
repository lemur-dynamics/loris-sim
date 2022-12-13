import { Chart as ChartJS, registerables } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

import { E12 } from '../motor/E12';

ChartJS.register(...registerables);

const Home = () => {
	const motor = new E12(3, 0.001);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: `${motor.getName()} Thrust Curve`,
			},
		},
	};

	let labels: number[] = motor
		.getThrustCurve()
		.map((_, i) => Math.round((i * 0.001 + Number.EPSILON) * 100) / 100);

	return (
		<div>
			<Line
				options={options}
				data={{
					labels,
					datasets: [
						{
							label: "Thrust in Newtons",
							data: motor.getThrustCurve(),
						},
					],
				}}
			/>
		</div>
	);
};

export default Home;
