import React, { useState } from "react";
import StudentCard from "./StudentCard";
import { studentData } from "../data/studentData";
import { type StudentCardModel } from "../models/StudentCardModel";

const StudentDashboard = () => {
  const [showFiltered, setShowFiltered] = useState(false);

  const filteredStudents = studentData.filter(
    (student) => student.attendence > 75
  );

  const studentsToShow: StudentCardModel[] = showFiltered
    ? filteredStudents
    : studentData;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">
        Student Dashboard
      </h1>
      <div className="mb-4 text-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setShowFiltered(!showFiltered)}
        >
          {showFiltered ? "Show All Students" : "Show Attendance > 75%"}
        </button>
      </div>

      <div className="text-center mb-4 text-gray-700 font-medium">
        Total Students: {studentsToShow.length}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {studentsToShow.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
