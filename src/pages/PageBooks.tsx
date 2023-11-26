import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageBooks = () => {
	const { userName } = useContext(AppContext);

	return (
		<p>Hello, {userName}, which books would you like to buy?</p>
	)
}
