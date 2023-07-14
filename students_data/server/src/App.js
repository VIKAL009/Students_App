import React from 'react';

import StudentForm from './components/StudentForm';
import StudentData from './components/StudentData';
import './styles.css';
const App = () => {
  return (
    <div>
      <h1>Student App</h1>
      <StudentForm />
      <StudentData />
    </div>
  );
};

export default App;
