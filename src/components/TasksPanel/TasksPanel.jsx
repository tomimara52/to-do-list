import React from 'react';
import TasksList from '../TasksList/TasksList';
import { Box, Card } from '@mui/material';

const TasksPanel = () => {
	return (
		<Box 
			sx={{ 
				maxWidth: "45rem", 
				margin: "auto",
				borderRadius: "5px",
				boxShadow: 3,
			}}
		>
			<Card
				sx={{
					padding: "1.5rem",
				backgroundColor: "#D7D9CE",
				}}
			>
				<TasksList />
			</Card>
		</Box>
	);
};

export default TasksPanel;
