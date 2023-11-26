import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageBooks = () => {
	const { userName, techBooks } = useContext(AppContext);

	return (
		<>
			{userName && (
				<p className="mb-4">
					Hello, {userName}, there are {techBooks.length} books, which
					would you like to buy?
				</p>
			)}
			<div className="flex gap-3 flex-wrap">
				{techBooks.map((techBook) => {
					return (
						<img
						className="h-fit w-32"
							key={techBook.id}
							src={`https://edwardtanguay.vercel.app/share/images/techBooks/${techBook.idCode}.jpg`}
						/>
					);
				})}
			</div>
		</>
	);
};
