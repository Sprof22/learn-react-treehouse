import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Courses from "./components/Courses";
import CoursesContainer from "./components/courses/CoursesContainer";
import Header from "./components/Header";
import Home from "./components/Home";
import Teachers from "./components/Teachers";
import NotFound from "./components/NotFound";
import { HTMLCourses, CSSCourses, JSCourses } from './data/courses';
import Featured from "./components/Featured";



function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="teachers/:topic/:fname-:lname" element={<Featured />} />
        <Route path="courses" element={<Courses />}>
          <Route index element={<Navigate replace to="html" />} />
          <Route path="html" element={<CoursesContainer data={HTMLCourses}/>} />
          <Route path="css" element={<CoursesContainer data={CSSCourses}/>} />
          <Route path="javascript" element={<CoursesContainer data={JSCourses}/>} />
          </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
