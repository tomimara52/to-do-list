import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, sortTasks } from '../../redux/slices/tasksSlice';
import { 
	ListItemButton, 
	ListItemIcon, 
	ListItemText,
	Checkbox,
} from '@mui/material';
import TaskButton from '../TaskButton/TaskButton';
import DoneOutlineIcon from '@mui/icons-material/Check';

const Task = ({ id, deleteTask }) => {
	const [editMode, setEditMode] = useState(false);
	const tasks = useSelector(state => state.tasks);
	const dispatch = useDispatch();
	const [task, setTask] = useState(tasks.all.find(task => task.id === id));

	const swapEditMode = () => {
		setEditMode(!editMode);
	};

	const handleSubmitForm = event => {
		event.preventDefault();
		dispatch(removeTask(task.id));
		dispatch(addTask(task));
		dispatch(sortTasks());
		swapEditMode();
	};

	const handleChangeTitle = event => {
		setTask({
			...task,
			title: event.target.value,
		});
	};

	const handleChangeCheckbox = () => {
		dispatch(removeTask(task.id));
		const newTask = {
			...task,
			completed: !task.completed,
		};
		dispatch(addTask(newTask));
		dispatch(sortTasks());
		setTask(newTask);
	};

	const titleForm = <form onSubmit={e => handleSubmitForm(e)}>
		<input 
			type="text" 
			name="title" 
			id="title" 
			value={task.title}
			onChange={e => handleChangeTitle(e)}
		/>
		<button type="submit">Ok</button>
	</form>

	return (
		<>
			<ListItemButton
				onClick={() => handleChangeCheckbox()}
			>
				<ListItemIcon
					sx={{ margin: "auto" }}
				>
					<Checkbox
						checked={task.completed}
						readOnly
						icon={<DoneOutlineIcon fontSize="large" />}
						checkedIcon={<DoneOutlineIcon fontSize="large" sx={{color: "#16A100"}} />}
					/>
				</ListItemIcon>
			</ListItemButton>
			<ListItemText
				sx={{ flexGrow: 10 }}
			>
				{
					editMode
					? titleForm
					: <h3>{task.title}</h3>
				}
				<TaskButton 
					text="Edit" 
					color="#0C7489"
					handleOnClick={() => swapEditMode()} 
				/>

				<TaskButton 
					text="Delete" 
					color="#FF0000"
					handleOnClick={() => deleteTask(id)} 
				/>
			</ListItemText>
		</>
	);
};

export default Task;
