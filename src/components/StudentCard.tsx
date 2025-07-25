import React from "react";
import { type StudentCardModel, GRADE } from "../models/StudentCardModel";

const StudentCard = (props: StudentCardModel) => {
  const { name, attendence, grade } = props;

  const cardColor =
    grade === GRADE.A
      ? "bg-green-100 border-green-500"
      : grade === GRADE.D
      ? "bg-red-100 border-red-500"
      : "bg-white";

  const gradeTextColor =
    grade === GRADE.A
      ? "text-green-700 font-bold"
      : grade === GRADE.D
      ? "text-red-700 font-bold"
      : "text-gray-800";

  return (
    <div
      className={`rounded-lg border p-4 shadow-md transition duration-300 ${cardColor}`}
    >
      <div className="mb-2 flex justify-between">
        <h2 className="font-semibold text-gray-600">Name:</h2>
        <p className="text-gray-800">{name}</p>
      </div>
      <div className="mb-2 flex justify-between">
        <h2 className="font-semibold text-gray-600">Attendance:</h2>
        <p className="text-gray-800">{attendence}%</p>
      </div>
      <div className="flex justify-between">
        <h2 className="font-semibold text-gray-600">Grade :</h2>
        <p className={gradeTextColor}>{grade}</p>
      </div>
    </div>
  );
};

export default StudentCard;
