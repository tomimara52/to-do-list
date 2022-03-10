import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, sortTasks } from '../../redux/slices/tasksSlice';
import Task from '../Task/Task';
import { 
	Box, 
	List, 
	ListItem, 
	Checkbox,
	FormControlLabel,
	Button
} from '@mui/material';

const TasksList = () => {
	const tasks = useSelector(state => state.tasks);
	const dispatch = useDispatch();
	const [seeCompleted, setSeeCompleted] = useState(false);
	const [addMode, setAddMode] = useState(false);
	const [titleInputValue, setTitleInputValue] = useState('');

	const swapAddMode = () => setAddMode(!addMode);

	const handleDeleteTask = id => {
		dispatch(removeTask(id));
		dispatch(sortTasks());
	};

	const handleChangeCheckbox = event => {
		setSeeCompleted(event.target.checked);
	};

	const handleSubmitForm = event => {
		event.preventDefault();
		dispatch(addTask({
			id: tasks.all.length,
			title: titleInputValue,
			completed: false,
		}));
		setTitleInputValue('');
		swapAddMode();
	};

	const handleInputChange = event => {
		setTitleInputValue(event.target.value);
	};

	const newTaskForm = <form onSubmit={e => handleSubmitForm(e)}>
		<input 
			type="text" 
			name="title" 
			id="title" 
			value={titleInputValue}
			onChange={e => handleInputChange(e)}		
		/>
		<button type="submit">Ok</button>
	</form>
	return (
		<Box 
			sx={{ 
				mx: "1rem",
			}}
		>
			<FormControlLabel
				control={
					<Checkbox
						checked={seeCompleted}
						onChange={e => handleChangeCheckbox(e)}
					/>
				}
				label="See completed tasks"
			/>
			<List>
				{
					tasks.all.filter(task => !task.completed || seeCompleted)
					.map(task => {
							return (
								<ListItem 
									divider
									key={task.id.toString()}
									sx={{
										display: "flex",
										flexDirection: "row",
									}}
								>
									<Task 
										className="task"
										id={task.id}
										initialTitle={task.title} 
										initialCompleted={task.completed}
										deleteTask={id => handleDeleteTask(id)}
									/>
								</ListItem>
							);
					})
				}
				{ addMode 
					? newTaskForm
					: (
							<ListItem
								key={tasks.all.length}
								sx={{
									display: "flex",
									flexDirection: "row",
								}}
							>
								<Button
									onClick={() => swapAddMode()}
									variant="outlined"
									size="small"
									sx={{ 
										color: 'success',
										border: `1px solid success`,
										mx: "0.5rem",
										'&:hover': {
											color: 'black',
											border: '1px solid black',
										},
									}}
								>
									Add task
								</Button>
							</ListItem>
						)
				}
			</List>
		</Box>
	);
};


export default TasksList;
