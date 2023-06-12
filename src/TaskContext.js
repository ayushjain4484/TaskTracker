import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    // Initialize tasks state using local storage or an empty array
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    useEffect(() => {
        // Update local storage whenever tasks state changes
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Handle task click event to toggle task completion status
    const handleTaskClick = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    // Handle task deletion
    const handleTaskDelete = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    // Add a new task to the tasks list
    const addTask = (newTaskText) => {
        const newTask = {
            id: tasks.length + 1,
            text: newTaskText,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    return (
        // Provide the tasks state and relevant functions to consuming components
        <TaskContext.Provider value={{ tasks, handleTaskClick, handleTaskDelete, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};
