import React from 'react';
import { Input, Space , List, Button} from 'antd';
import  { connect } from 'react-redux';
import { AppDispatch } from '../store';
const { Search } = Input;
interface title {
	title: string,
	isEdit: boolean
}
interface isState {
	data:	 title []
	value: string
}

class ToDoList extends React.Component <any, isState>{
	constructor(props:any) {
		super(props);
		this.state = {
			data: [
				{
					title: 'Ant Design Title 1',
					isEdit: false
				},
			],
			value: '1212'
		}
	}
	onSearch = (value: any) => {
		if (!value) return;
		const item = {
			title : value,
			isEdit: false
		}
		this.setState((state, props) => ({
			data: [...state.data, item ]
		}));
	}
	deleteItem = (index: number) => {
		console.log('index', index);
		let list = [...this.state.data];
		list.splice(index, 1)
		this.setState({
			data: list
		})
	}
	// 编辑
	editItem = (index: number) => {
		let list = [...this.state.data];
		list[index].isEdit = true;
		this.setState({
			data: list
		})
	}
	onBlurItem = (index: number) => {
		let list = [...this.state.data];
		list[index].isEdit = false;
		this.setState({
			data: list
		})
	}
	changeInputValue = (e: any, index: number) => {
		console.log('e', e.target.value);
		let list = [...this.state.data];
		list[index].title = e.target.value;
		this.setState({
			data: list
		})
	}



	render() {
		return <div>
			<Search
				placeholder="input search text"
				allowClear
				enterButton="添加"
				size="large"
				onSearch={ this.onSearch }
    />
		<List
			itemLayout="horizontal"
			dataSource={ this.state.data }
			renderItem={(item, index) => (	
				<List.Item> 
						{
							item.isEdit ? 
							<Input 
								style = {{ width: '80%' }}
								onBlur= { () => { this.onBlurItem(index)}}
								onChange = {(e) => {this.changeInputValue(e, index) }}
								value={ this.state.data[index].title }
								size="large" placeholder="large size" />
							: 
						<p style = {{ width: '80%' }} > { item.title }  </p>
							
						}
						{[
						<Button onClick= { () => { this.editItem(index)}} key= {index}>编辑</Button>, 
						<Button onClick= { () => { this.deleteItem(index)}} key={item.title}>删除</Button>]}
				</List.Item>
    )}
  />
		</div>
	}
}

const mapStateToProps = (state: any, props: any) => {
	console.log('state', state);
	return {
		list: state.list
	}
}

// store.dispatch
const mapDispathToProps = (dispatch: AppDispatch) => {
	return {

	}
}

export default connect(mapStateToProps, null)(ToDoList);