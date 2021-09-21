interface item {
	title: string,
	isEdit: boolean
}

interface defaultState {
	list: item []
}

interface action {
	type: string,
	value: any
}

let initState: defaultState = {
	list: [
		{
			title: 'Ant Design Title 1',
			isEdit: false
		}
	]
}

export default function reducer (state = initState, action:action) {
	console.log('reducer', action);
	if (action.type === 'ADD_TODO_VALUE') {
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.push(action.value);
		return newState;
	}
	return state;
}

