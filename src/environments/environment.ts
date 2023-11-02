import { IEnvironment } from "src/app/shared/interfaces/i-environment";

export const environment: IEnvironment = {
	production: true,
	apiEnabled: false,
	feature: {
		dashboard: false,
		map: true,
	},
	text: 'This is production environment',
	apiUrl: 'https://www.matthijskamstra.nl/expenses/',
};
