export interface User {
	id: number,
	name: string,
	username: string,
	email: string,
	adress: Adress,
	phone: number,
	website: string,
	company: Company
}

interface Adress {
	street: string,
	suite: string,
	city: string,
	zipcode: number,
	geo: {
		lat: number,
		lng: number
	}
}

interface Company {
	name: string,
	catchPhrase: string,
	bs: string
}
