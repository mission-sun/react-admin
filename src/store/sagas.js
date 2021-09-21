import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function sagaInit() {
	console.log('saga-init');
}

export default function * helloSagas() {
	console.log('sagas');
	takeEvery('sagaInit', sagaInit)
	// yield return 'hello';
}