import { getNews } from './newsSlice';
import handleGetUser from './handlers';
import { takeLatest } from 'redux-saga/effects';

export default function* newsSage() {
	yield takeLatest(getNews.type, handleGetUser);
}
