import {Box} from '@mui/material';
import TasksPanel from './components/TasksPanel/TasksPanel';

function App() {
  return (
		<Box 
			sx={{ 
				padding: "2rem",
			}}
		>
			<TasksPanel />
		</Box>
  );
}

export default App;
