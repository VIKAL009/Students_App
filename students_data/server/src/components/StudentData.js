import React, { useState } from 'react';
import axios from 'axios';


const StudentData = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [studentData, setStudentData] = useState(null);

  const handleRollNumberChange = (e) => {
    setRollNumber(e.target.value);
  };

  const handleFetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/students/${rollNumber}`);
      const studentData = response.data;
      setStudentData(studentData);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  };
  

  return (
    <div>
      <input type="text" placeholder="Roll Number" value={rollNumber} onChange={handleRollNumberChange} />
      <button  className="button-primary" onClick={handleFetchData}>Fetch Data</button>
      {studentData && (
        <div>
          <h2>Student Data</h2>
          <p>Roll Number: {studentData.rollNumber}</p>
          <p>Name: {studentData.name}</p>
          <p>Age: {studentData.age}</p>
        </div>
      )}
    </div>
  );
};

export default StudentData;
