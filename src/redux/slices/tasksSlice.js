import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		all: [],
		nextId: 0,
	},
	reducers: {
		addTask: (state, action) => {
			state.all.push(action.payload);
		},
		removeTask: (state, action) => {
			state.all = state.all.filter(task => {
				return task.id !== action.payload;
			});
		},
		sortTasks: (state) => {
			state.all.sort((a, b) => a.id - b.id);
		},
		setNextId: (state, action) => {
			state.nextId = action.payload;
		},
		raiseNextId: (state) => {
			state.nextId += 1;
		},
	},
});

export const { 
	addTask, 
	removeTask, 
	sortTasks, 
	setNextId,
	raiseNextId,
} = tasksSlice.actions;
export default tasksSlice.reducer;
