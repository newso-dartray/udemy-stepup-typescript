import axios from 'axios';
import { useState } from "react";
import './App.css';
import { Practice1 } from './practices/Practice1';
import { Practice2 } from './practices/Practice2';
import { Practice3 } from './practices/Practice3';
import { Practice4 } from './practices/Practice4';
import { Todo } from './Todo';
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from './UserProfile';
import { User } from './types/user';

const user: User = {
	name: "niwa",
	hobbies: ["映画", "音楽"]
};

function App() {
	const [todos, setTodos] = useState<Array<TodoType>>([]);

	const onClickFetchData = () => {
		axios
			.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
			.then((res) => {
				setTodos(res.data);
			});
	};
	
	const SButton: object = {
		marginTop: "60px"
	};

  return (
    <div className="App">
				<Practice1 />
				<Practice2 />
				<Practice3 />
				<Practice4 />
				<UserProfile user={user}/>
				<Text color="red" fontSize="18px"/>
				<button onClick={onClickFetchData} style={SButton}>データ取得</button>
				{todos.map((todo) => (
					<Todo 
						key={todo.id}
						title={todo.title} 
						userId={todo.userId} 
						completed={todo.completed}
					/>
				))} 
    </div>
  );
}

export default App;
