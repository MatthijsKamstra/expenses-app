export class Compensation {
	/**
	 | Jaar | Belastingvrije vergoeding |
	 | ---- | ------------------------- |
	 | 2022 | 0, 19 euro per kilometer |
	 | 2023 | 0, 21 euro per kilometer |
	 | 2024 | 0, 22 euro per kilometer |

	 */

	public static taxfree(year: number): number {
		let amount = 0.19;
		if (year >= 2024) year = 2024;
		switch (year) {
			case 2022:
				amount = 0.19;
				break;
			case 2023:
				amount = 0.21;
				break;
			case 2024:
			case 2025:
			case 2026:
			case 2027:
			case 2028:
			case 2029:
				// FIXME: should work for a while, but a better solution is for ever !!! HACKY
				amount = 0.22;
				break;
			default:
				// lets make sure we get the correct value
				amount = 0.19;
				break;
		}
		return amount;
	}

}
