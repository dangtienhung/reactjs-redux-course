import { all, fork } from 'redux-saga/effects';

import newsSage from './news/saga';

// tổng hợp toàn bộ root trong file này
export default function* rootSage() {
	yield all([fork(newsSage)]);
}
