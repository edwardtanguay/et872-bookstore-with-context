import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageCheckout = () => {
	const { userName } = useContext(AppContext);

	return (
		<p>{userName}, you are one step away from your books being delivered!</p>
	)
}
