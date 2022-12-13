import { Motor } from './Motor';

export class E12 extends Motor {
	private dataSheetUrl: string = "https://www.nar.org/SandT/pdf/Estes/E12.pdf";

	constructor(simDuration: number, accuracy: number) {
		const thrustCurve: number[][] = [
			[0.002, 1.678],
			[0.05, 4.459],
			[0.1, 10.431],
			[0.2, 24.152],
			[0.274, 31.959],
			[0.292, 32.702],
			[0.31, 27.957],
			[0.32, 25.957],
			[0.33, 22.857],
			[0.34, 19.128],
			[0.35, 16.455],
			[0.36, 15.314],
			[0.38, 13.853],
			[0.39, 13.436],
			[0.4, 13.271],
			[0.45, 12.07],
			[0.5, 11.522],
			[0.55, 11.266],
			[0.6, 10.736],
			[0.65, 10.777],
			[0.7, 10.276],
			[0.8, 10.105],
			[0.9, 9.92],
			[1.0, 9.693],
			[1.31, 9.759],
			[1.316, 10.696],
			[1.33, 9.628],
			[2.38, 9.87],
			[2.4, 6.442],
			[2.42, 3.674],
			[2.44, 0.0],
		];

		super(thrustCurve, simDuration / accuracy, accuracy);
	}

	public getDataSheetUrl(): string {
		return this.dataSheetUrl;
	}

	public getName(): string {
		return "Estes E12";
	}
}
