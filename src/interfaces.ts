export interface ITechBook {
	id: number;
	idCode: string;
	title: string;
}

export interface ICart {
	items: ITechBook[];
}