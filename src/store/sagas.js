import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function sagaInit() {
	console.log('saga-init');
}

export default function* helloSagas() {
	console.log('sagas');
	yield takeEvery('sagaInit', sagaInit)
}