import React from 'react';
import JSTeacher from './JSTeachers';

const Teachers = () =>
  <div className="teachers">
    <h1>Teacher List</h1>
    <ul>
      <li>Alena</li>
      <li>Nick</li>
      <JSTeacher />
      <li>Ben</li>
      <li>Jay</li>
    </ul>
  </div>;

export default Teachers;
