import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    Box,
    Typography,
    Button,
    Divider,
} from '@mui/material';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

const TaskList = ({ tasks, handleTaskClick, handleTaskDelete }) => {
    const completedTasks = tasks.filter((task) => task.completed);
    const uncompletedTasks = tasks.filter((task) => !task.completed);

    return (
        <>
            <h3>To Do:</h3>
            <Grid container spacing={2}>
                {uncompletedTasks.map((task) => (
                    <Grid item key={task.id} xs={12} sm={6} md={4} lg={3}>
                        <Card variant="outlined" style={{ marginBottom: '8px' }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box display="flex" alignItems="center" flexGrow={1}>
                                        <RadioButtonUnchecked
                                            style={{
                                                width: 24,
                                                height: 24,
                                                marginRight: 8,
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => handleTaskClick(task.id)}
                                        />
                                        <Typography
                                            style={{
                                                textDecoration: task.completed ? 'line-through' : 'none',
                                                flexGrow: 1,
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => handleTaskClick(task.id)}
                                        >
                                            {task.text}
                                        </Typography>
                                    </Box>
                                    <Button variant="contained" onClick={() => handleTaskDelete(task.id)}>
                                        Delete
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Divider style={{ marginTop: '16px', marginBottom: '16px' }} />
            <h3>Completed:</h3>
            <Grid container spacing={2}>
                {completedTasks.map((task) => (
                    <Grid item key={task.id} xs={12} sm={6} md={4} lg={3}>
                        <Card variant="outlined" style={{ marginBottom: '8px', backgroundColor: '#f0f1f2' }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box display="flex" alignItems="center" flexGrow={1}>
                                        <CheckCircle style={{ color: 'green', marginRight: 8, cursor: 'pointer' }} onClick={() => handleTaskClick(task.id)} />
                                        <Typography
                                            style={{
                                                flexGrow: 1,
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => handleTaskClick(task.id)}
                                        >
                                            {task.text}
                                        </Typography>
                                    </Box>
                                    <Button variant="contained" onClick={() => handleTaskDelete(task.id)}>
                                        Delete
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default TaskList;
