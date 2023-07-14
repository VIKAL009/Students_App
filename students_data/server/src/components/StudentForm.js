import React, { useState } from 'react';
import axios from 'axios';


const StudentForm = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleRollNumberChange = (e) => {
    setRollNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/students', {
        rollNumber,
        name,
        age,
      });
      // Optional: Display a success message or perform any necessary actions
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  };
  

  return (
    <form  className="button-secondary" onSubmit={handleSubmit}>
      <input type="text" placeholder="Roll Number" value={rollNumber} onChange={handleRollNumberChange} />
      <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
      <input type="text" placeholder="Age" value={age} onChange={handleAgeChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
