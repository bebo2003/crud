import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const StudentsContext = createContext();

export function StudentsProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (data) => {
    const newStudent = {
      id: crypto.randomUUID(),
      img: data.file?.[0] ? URL.createObjectURL(data.file[0]) : "",
      name: data.name,
      email: data.email,
      phone: data.phone,
      enrollNumber: Math.floor(Math.random() * 1000000000),
      date: data.date?.toLocaleDateString("en-GB"),
    };
    setStudents((prev) => [...prev, newStudent]);
    toast.success("Student added successfully!");
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
    toast.success("Student deleted successfully!");
  };
  const editStudent = (id, data) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? {
              ...student,
              img: data?.file?.[0]
                ? URL.createObjectURL(data.file[0])
                : student.img,
              name: data?.name,
              email: data?.email,
              phone: data?.phone,
              date: data?.date?.toLocaleDateString("en-GB"),
            }
          : student
      )
    );
    toast.success("Student updated successfully!");
  };
  return (
    <StudentsContext.Provider
      value={{ students, addStudent, deleteStudent, editStudent }}
    >
      {children}
    </StudentsContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentsContext);
}
