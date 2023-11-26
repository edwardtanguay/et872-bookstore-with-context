import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageBooks = () => {
	const { userName, techBooks, addTechBookToCart, cart } =
		useContext(AppContext);

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
						<div className="flex flex-col">
							<img
								className="h-fit w-32 cursor-pointer"
								key={techBook.id}
								onClick={() => addTechBookToCart(techBook)}
								src={`https://edwardtanguay.vercel.app/share/images/techBooks/${techBook.idCode}.jpg`}
							/>
							{cart.items.filter(
								(m) => m.idCode === techBook.idCode
							).length > 0 && (
								<p className="text-center bg-green-800 text-yellow-300">
									Ordered:{" "}
									{
										cart.items.filter(
											(m) => m.idCode === techBook.idCode
										).length
									}
								</p>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};
