import React, { useContext, useState } from 'react';
import { Card, CardContent, TextField, Button, Grid } from '@mui/material';
import { TaskContext } from './TaskContext';

const TaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [newTaskText, setNewTaskText] = useState('');

    const handleNewTaskChange = (event) => {
        setNewTaskText(event.target.value);
    };

    const handleNewTaskSubmit = (event) => {
        event.preventDefault();
        if (newTaskText.trim() !== '') {
            addTask(newTaskText);
            setNewTaskText('');
        }
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <form onSubmit={handleNewTaskSubmit}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={10}>
                            <TextField
                                label="New Task"
                                variant="outlined"
                                fullWidth
                                value={newTaskText}
                                onChange={handleNewTaskChange}
                            />
                        </Grid>
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
