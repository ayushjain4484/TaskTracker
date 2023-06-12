import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';
import { TaskProvider } from './TaskContext';

function App() {
  return (
      <TaskProvider>
        <Box mx={5} my={5}>
          <Paper mx={5}>
            <Box mx={5} my={5}>
              <Box pt={3} pb={5}>
                <Typography variant="h4">Task Tracker</Typography>
              </Box>
              <TransitionGroup>
                <TaskList />
              </TransitionGroup>
              <Box height={20} />
              <TaskForm />
              <Box height={20} />
            </Box>
          </Paper>
        </Box>
      </TaskProvider>
  );
}

export default App;
