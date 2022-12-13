import { E12 } from './motor/E12';

const motor = new E12(5, 0.0001);

// const data: Plot[] = [
// 	{
// 		y: motor.getThrustCurve(),
// 		type: "scatter",
// 	},
// ];
//
// plot(data);

console.log(motor.getThrustCurve().length);
