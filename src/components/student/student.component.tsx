import React, { useEffect, useState } from "react";
import { deleteStudentById, getStudents } from "../../services/student.service";
import { IStudent } from "./../../interfaces/models/student.interface";
import Modal from "react-modal";

export function StudentsComponent() {
  const [students, setStudent] = useState<IStudent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    let res = getStudents();
    setStudent(res);
  }, []);

  const handleDelete = (id: number) => {
    let newStudents = students.filter((student) => student.id !== id);
    deleteStudentById(id);
    setStudent(newStudents);
  };
  const toggleModal = () => {
    console.log("toggle modal");
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <h1>Students</h1>
      <p>Students list</p>
      <StudentsTable
        students={students}
        onDelete={handleDelete}
        toggleModal={toggleModal}
      />
      <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}
        onRequestClose={toggleModal}
      >
        <h1>Modal</h1>
      </Modal>
    </div>
  );
}

interface IStudentTableProps {
  students: IStudent[];
  onDelete: (id: number) => void;
  toggleModal: () => void;
}

function StudentsTable({
  students,
  onDelete,
  toggleModal,
}: IStudentTableProps) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(student.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={5}>
            <button
              className="btn btn-primary"
              onClick={toggleModal}
            >
              Add New Student
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
