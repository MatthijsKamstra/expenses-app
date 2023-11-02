import { IEnvironment } from "src/app/shared/interfaces/i-environment";

export const environment: IEnvironment = {
	production: false,
	apiEnabled: false,
	feature: {
		dashboard: false,
		map: true,
	},
	text: 'This is development environment',
	apiUrl: 'http://localhost:2000',
};
