import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { userName, setUserName } = useContext(AppContext);
	return (
		<>
			{userName && <p>Welcome, {userName}!</p>}
			<form className="mt-3">
				Your name:{" "}
				<input
					type="text"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
			</form>
		</>
	);
};
