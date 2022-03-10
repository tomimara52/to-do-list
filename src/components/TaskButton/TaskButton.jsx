import React from 'react';
import { Button } from '@mui/material';

const TaskButton = ({ text, color, handleOnClick }) => {
	return (
		<Button
			onClick={() => handleOnClick()}
			variant="outlined"
			size="small"
			sx={{ 
				color: color,
				border: `1px solid ${color}`,
				mx: "0.5rem",
				'&:hover': {
					color: 'black',
					border: '1px solid black',
				},
			}}
		>
			{text}
		</Button>
	);
};

export default TaskButton;
