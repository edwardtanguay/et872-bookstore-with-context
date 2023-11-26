import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from 'axios';
import { ITechBook } from "./interfaces";

const techBooksUrl = 'https://edwardtanguay.vercel.app/share/techBooks.json';

interface IAppContext {
	userName: string;
	setUserName: (userName: string) => void;
	techBooks: ITechBook[]
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [userName, setUserName] = useState("");
	const [techBooks, setTechBooks] = useState<ITechBook[]>([]);

	useEffect(() => {
	(async () => {
		const response = await axios.get(techBooksUrl);
		const _techBooks = response.data;
		setTechBooks(_techBooks);
	})();
})

	return (
		<AppContext.Provider
			value={{
				userName,
				setUserName,
				techBooks
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
