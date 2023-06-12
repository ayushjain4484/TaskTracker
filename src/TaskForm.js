import React, { useContext, useState } from 'react';
import { Card, CardContent, TextField, Button, Grid } from '@mui/material';
import { TaskContext } from './TaskContext';

const TaskForm = () => {
    // Access the addTask function from the TaskContext
    const { addTask } = useContext(TaskContext);
    // Create a state variable to store the new task text
    const [newTaskText, setNewTaskText] = useState('');

    // Event handler for new task text change
    const handleNewTaskChange = (event) => {
        setNewTaskText(event.target.value);
    };

    // Event handler for submitting the new task
    const handleNewTaskSubmit = (event) => {
        event.preventDefault();
        // Check if the new task text is not empty
        if (newTaskText.trim() !== '') {
            // Call the addTask function to add the new task
            addTask(newTaskText);
            // Clear the new task text input
            setNewTaskText('');
        }
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <form onSubmit={handleNewTaskSubmit}>
                    <Grid container spacing={2} alignItems="center">
                        {/* Grid item for the text field */}
                        <Grid item xs={10}>
                            <TextField
                                label="New Task"
                                variant="outlined"
                                fullWidth
                                value={newTaskText}
                                onChange={handleNewTaskChange}
                            />
                        </Grid>
                        {/* Grid item for the add task button */}
                        <Grid item xs={2}>
                            <Button variant="contained" type="submit" fullWidth>
                                Add Task
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
};

export default TaskForm;
