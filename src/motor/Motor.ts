export class Motor {
	private rawThrustCurve: number[][]; // [[time (seconds), thrust (newtons)]]

	private interpolatedThrustCurve: number[] = [];

	constructor(
		thrustCurve: number[][],
		numberOfSteps: number,
		accuracy: number
	) {
		this.rawThrustCurve = thrustCurve;

		for (let i = 0; i < this.rawThrustCurve.length - 1; i++) {
			const time = this.rawThrustCurve[i + 1][0] - this.rawThrustCurve[i][0];
			const stepsToInterpolate = Math.floor(time / accuracy);

			for (let step = 0; step < stepsToInterpolate; step++) {
				const r = step / stepsToInterpolate;
				const delta = this.rawThrustCurve[i + 1][1] - this.rawThrustCurve[i][1];

				this.interpolatedThrustCurve.push(
					this.rawThrustCurve[i][1] + r * delta
				);
			}
		}

		// fill the remaining time with zero thrust

		const stepsLeft = numberOfSteps - this.interpolatedThrustCurve.length;

		for (let i = 0; i < stepsLeft; i++) {
			this.interpolatedThrustCurve.push(0);
		}
	}

	public getThrustCurve(): number[] {
		return this.interpolatedThrustCurve;
	}
}
