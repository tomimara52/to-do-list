import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		all: [],
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
	},
});

export const { addTask, removeTask, sortTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
