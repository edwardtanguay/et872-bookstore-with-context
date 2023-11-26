import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { ICart, ITechBook } from "./interfaces";

const techBooksUrl = "https://edwardtanguay.vercel.app/share/techBooks.json";
const initialCart = { items: [] as ITechBook[] };

interface IAppContext {
	userName: string;
	setUserName: (userName: string) => void;
	techBooks: ITechBook[];
	cart: ICart;
	setCart: (cart: ICart) => void;
	addTechBookToCart: (techBook: ITechBook) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [userName, setUserName] = useState("");
	const [techBooks, setTechBooks] = useState<ITechBook[]>([]);
	const [cart, setCart] = useState(initialCart);

	useEffect(() => {
		(async () => {
			const response = await axios.get(techBooksUrl);
			const _techBooks = response.data;
			setTechBooks(_techBooks);
		})();
	}, []);

	const addTechBookToCart = (techBook: ITechBook) => {
		const _cart = structuredClone(cart);
		_cart.items.push(techBook);
		setCart(_cart);
	}

	return (
		<AppContext.Provider
			value={{
				userName,
				setUserName,
				techBooks,
				cart, 
				setCart,
				addTechBookToCart
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
