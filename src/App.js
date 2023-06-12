import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';
import { TaskProvider } from './TaskContext';

function App() {
  return (
      // Wrap the components that need access to task data in TaskProvider
      <TaskProvider>
        {/* Create a box with margin on the x-axis and y-axis */}
        <Box mx={5} my={5}>
          {/* Render a paper component with margin on the x-axis */}
          <Paper mx={5}>
            {/* Create a box with margin on the x-axis and y-axis */}
            <Box mx={5} my={5}>
              {/* Create a box with padding on the top and bottom */}
              <Box pt={3} pb={5}>
                {/* Render a typography component with variant "h4" */}
                <Typography variant="h4">Task Tracker</Typography>
              </Box>
              {/* Wrap TaskList component in TransitionGroup for animation */}
              <TransitionGroup>
                <TaskList />
              </TransitionGroup>
              {/* Create a box with fixed height */}
              <Box height={20} />
              {/* Render the TaskForm component */}
              <TaskForm />
              {/* Create a box with fixed height */}
              <Box height={20} />
            </Box>
          </Paper>
        </Box>
      </TaskProvider>
  );
}

export default App;
