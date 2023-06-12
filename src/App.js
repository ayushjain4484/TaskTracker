import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });


  const [newTaskText, setNewTaskText] = useState('');

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskClick = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleNewTaskChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    if (newTaskText.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        text: newTaskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  return (
      <Box mx={5} my={5}>
        <Paper mx={5}>
          <Box mx={5} my={5}>
            <Box pt={3} pb={5}>
              <Typography variant="h4">Task Tracker</Typography>
            </Box>
            <TransitionGroup>
              <TaskList
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDelete={handleTaskDelete}
              />
            </TransitionGroup>
            <Box height={20} />
            <TaskForm
                handleNewTaskSubmit={handleNewTaskSubmit}
                handleNewTaskChange={handleNewTaskChange}
                newTaskText={newTaskText}
            />
            <Box height={20} />
          </Box>
        </Paper>
      </Box>
  );
}

export default App;
