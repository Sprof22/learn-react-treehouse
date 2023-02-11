import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import CSS from "./courses/CSS";
import HTML from "./courses/CoursesContainer";
import JavaScript from "./courses/JavaScript";

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to="html">HTML</NavLink>
        </li>
        <li>
          <NavLink to="css">CSS</NavLink>
        </li>
        <li>
          <NavLink to="javascript">JavaScript</NavLink>
        </li>
      </ul>
    </div>
    <Routes>
      
    </Routes>
  </div>
);

export default Courses;
