import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		fetch(url, { signal: abortController.signal })
			.then((res) => {
				if (!res.ok) {
					throw Error('Could not retrieve data from the server');
				}
				return res.json();
			})
			.then((data) => {
				setError(null);
				setData(data);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err.name === 'AbortError') {
					console.log('Fetch Aborted');
				} else {
					setIsLoading(false);
					setError(err.message);
					console.error(err.message);
				}
			});
		return () => abortController.abort();
	}, [url]);
	return { data, isLoading, error };
};

export default useFetch;
