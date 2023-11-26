import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageCheckout = () => {
	const { userName, cart } = useContext(AppContext);

	return (
		<>
			{userName && (
				<p className="mb-4">
					{userName}, you are one step away from your books being
					delivered!
				</p>
			)}
			{cart.items.map(techBook => {
				return (
					<div className="flex gap-3 mb-3 items-center">
							<img
								className="h-fit w-12 cursor-pointer"
								key={techBook.id}
								src={`https://edwardtanguay.vercel.app/share/images/techBooks/${techBook.idCode}.jpg`}
							/>
						<p className="text-3xl">{techBook.title}</p>
					</div>
				)
			})}
		</>
	);
};
