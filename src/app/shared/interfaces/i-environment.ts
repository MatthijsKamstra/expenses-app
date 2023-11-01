export interface IEnvironment {
	production: boolean,
	apiEnabled: boolean,
	text: string,
	apiUrl: string,
	feature: IFeature,
}

export interface IFeature {
	dashboard: boolean,
}
