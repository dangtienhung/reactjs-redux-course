import React, { useEffect } from 'react';
import { getNews, setQuerySearch } from '../redux-saga/news/newsSlice';
import { useDispatch, useSelector } from 'react-redux';

import { debounce } from 'lodash';

const HackerNews = () => {
	// const [hits, setHits] = useState([]);
	// const [url, setUrl] = useState(
	// 	`https://hn.algolia.com/api/v1/search?query=react`
	// );
	// const [query, setQuery] = useState('');
	// const [loading, setLoading] = useState(false);
	// const handleFetchData = useRef({});
	// const isMounted = useRef(true);
	// useEffect(() => {
	// 	isMounted.current = true;
	// 	return () => {
	// 		isMounted.current = false;
	// 	};
	// }, []);
	// handleFetchData.current = async () => {
	// 	setLoading(true);
	// 	try {
	// 		const response = await axios.get(url);
	// 		const data = response?.data?.hits;
	// 		setHits(data);
	// 		setLoading(false);
	// 	} catch (error) {
	// 		setLoading(false);
	// 		console.log(
	// 			'🚀 ~ file: HackerNews.jsx:19 ~ handleFetchData.current= ~ error',
	// 			error
	// 		);
	// 	}
	// };
	// useEffect(() => {
	// 	handleFetchData.current();
	// }, [url]);
	const { hits, loading, query } = useSelector((state) => state.news);
	console.log('🚀 ~ file: HackerNews.jsx:42 ~ HackerNews ~ loading', loading);
	const dispath = useDispatch();
	useEffect(() => {
		dispath(getNews(query));
	}, [dispath, query]);
	const handleChange = debounce((e) => {
		dispath(setQuerySearch(e.target.value));
	}, 250);
	return (
		<div className="w-2/4 p-5 mx-auto mt-5 mb-5 bg-white rounded-lg shadow-md">
			<div className="flex mb-5 gap-x-5">
				<input
					type="text"
					className="block w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400"
					placeholder="Typing your keyword..."
					defaultValue={query}
					onChange={handleChange}
				/>
				{/* <button
					onClick={() =>
						setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
					}
					className="flex-shrink-0 p-5 font-semibold text-white bg-blue-500 rounded-md"
				>
					Fetching
				</button> */}
			</div>
			{loading && (
				<div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-500 rounded-full loading border-r-transparent animate-spin"></div>
			)}
			<div className="flex flex-wrap gap-5">
				{!loading &&
					hits.length > 0 &&
					hits.map((item) => {
						if (!item.title || item.title.length <= 0) return null;
						return (
							<h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
								{item.title}
							</h3>
						);
					})}
			</div>
		</div>
	);
};

export default HackerNews;
