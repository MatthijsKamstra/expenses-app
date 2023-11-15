export interface ILocations {
	id: number,
	createAt: Date,
	updatedAt: Date,

	name: string; // SString<32>;

	userID: string; // SInt; // which user is allowed to use this Location

	latitude: number; // SFloat;
	longitude: number; // SFloat;

	type: string; // SString<32>; // home / Alliander HQ / RawBase
	street: string; // SString<32>;
	number: string; // SString<32>;
	city: string; // SString<32>;
	country: string; // SString<32>;
	zipcode: string; // SString<32>;
}
