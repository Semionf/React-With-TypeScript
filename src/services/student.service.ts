import { studentsArr } from "../db/data";
import { IStudent } from "../interfaces/models/student.interface";

export const getStudents = (): IStudent[] => {
  return studentsArr;
};

export const deleteStudentById = (id: number) => {
  studentsArr.splice(id, 1);
};

export const addStudent = (student: IStudent) => {
  studentsArr.push(student);
};
