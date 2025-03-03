// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    // Make sure your API URL matches your backend deployment or local endpoint
    const res = await axios.get('http://127.0.0.1:8000/api/tasks');
    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post('http://127.0.0.1:8000/api/tasks', newTask, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    fetchTasks();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Tasks</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Task Title"
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Task Description"
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button className="btn btn-primary" onClick={addTask}>Add Task</button>
      </div>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{task.title}</h5>
              <p>{task.description}</p>
            </div>
            <div>
              <button className="btn btn-warning btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
