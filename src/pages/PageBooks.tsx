import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageBooks = () => {
	const { userName } = useContext(AppContext);

	return (
		<>
			{userName && (
				<p>Hello, {userName}, which books would you like to buy?</p>
			)}
		</>
	);
};
