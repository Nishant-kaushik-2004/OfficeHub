import React, { useState, useEffect } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const EmployeeDashboard = ({ user }) => {
  const [tasks, setTasks] = useState([
    { task: 'Complete design mockups', deadline: '2024-08-30 10:00', assignedTo: 'Frontend Dev', role: 'Employee', completed: false },
    { task: 'Set up backend API', deadline: '2024-08-28 15:00', assignedTo: 'Backend Dev', role: 'Lead', completed: false },
  ]);

  const [meetingScheduled, setMeetingScheduled] = useState(false);
  const [meetingTime, setMeetingTime] = useState('');

  const [newTask, setNewTask] = useState('');
  const [newDeadline, setNewDeadline] = useState('');
  const [newAssignedTo, setNewAssignedTo] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTasks(tasks => 
        tasks.map(task => {
          const timeLeft = new Date(task.deadline).getTime() - new Date().getTime();
          return { ...task, countdown: Math.max(timeLeft, 0) };
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [tasks]);

  const addTask = () => {
    setTasks([...tasks, { task: newTask, deadline: newDeadline, assignedTo: newAssignedTo, role: 'Employee', completed: false }]);
    setNewTask('');
    setNewDeadline('');
    setNewAssignedTo('');
  };

  const toggleCompletion = index => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const scheduleMeeting = () => {
    setMeetingScheduled(true);
    setMeetingTime(new Date().toLocaleString());
  };

  return (
    <div className="container">
      
      <section className="mt-5">
        <h2>Employee Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </section>

      <section className="mt-5">
        <h3>Project Title: Building OfficeOpsHub Dashboard</h3>
        <p>Description: This project aims to create an efficient office management system for teams.</p>
      </section>

      <section className="mt-5">
        {user.role === 'Lead' ? (
          <>
            <h3>To-Do List (Lead)</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Deadline</th>
                  <th>Countdown</th>
                  <th>Assigned To</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr key={index}>
                    <td>{task.task}</td>
                    <td>{task.deadline}</td>
                    <td>{Math.floor(task.countdown / (1000 * 60 * 60))}h {Math.floor((task.countdown % (1000 * 60 * 60)) / (1000 * 60))}m</td>
                    <td>{task.assignedTo}</td>
                    <td>{task.role}</td>
                    <td>
                      <Form.Check 
                        type="checkbox" 
                        checked={task.completed}
                        onChange={() => toggleCompletion(index)}
                        label={task.completed ? "Completed" : "In Progress"}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h4>Add New Task</h4>
            <Form.Group>
              <Form.Control 
                type="text" 
                placeholder="Task" 
                value={newTask} 
                onChange={e => setNewTask(e.target.value)} 
              />
            </Form.Group>
            <Form.Group>
              <Form.Control 
                type="datetime-local" 
                value={newDeadline} 
                onChange={e => setNewDeadline(e.target.value)} 
              />
            </Form.Group>
            <Form.Group>
              <Form.Control 
                type="text" 
                placeholder="Assigned To" 
                value={newAssignedTo} 
                onChange={e => setNewAssignedTo(e.target.value)} 
              />
            </Form.Group>
            <Button variant="success" onClick={addTask}>Add Task</Button>

            <hr />
            <h4>Team Meetings</h4>
            <Button variant="info" onClick={scheduleMeeting}>Schedule Meeting</Button>
            {meetingScheduled && <p>Meeting scheduled for {meetingTime}</p>}
          </>
        ) : (
          <>
            <h3>To-Do List (Employee)</h3>
            <ul className="list-group">
              {tasks.map((task, index) => (
                task.role === 'Employee' && (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    {task.task}
                    <Form.Check 
                      type="checkbox" 
                      checked={task.completed} 
                      onChange={() => toggleCompletion(index)} 
                      label={task.completed ? "Completed" : "In Progress"} 
                    />
                  </li>
                )
              ))}
            </ul>

            <h4>Project Description</h4>
            <Form.Group>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Enter description..." 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
              />
            </Form.Group>
            <Button variant="primary" onClick={() => alert('Description submitted to Lead')}>Submit Description</Button>
          </>
        )}
      </section>
    </div>
  );
};

export default EmployeeDashboard;
