import { IEnvironment } from "src/app/shared/interfaces/i-environment";

export const environment: IEnvironment = {
	production: false,
	apiEnabled: false,
	feature: {
		dashboard: false,
		map: false,
	},
	text: 'This is production environment',
	apiUrl: 'https://www.matthijskamstra.nl/expenses/',
};
