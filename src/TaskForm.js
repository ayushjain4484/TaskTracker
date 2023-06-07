import React from 'react';
import { Card, CardContent, TextField, Button, Grid, Divider } from '@mui/material';

const TaskForm = ({ handleNewTaskSubmit, handleNewTaskChange, newTaskText }) => {
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
