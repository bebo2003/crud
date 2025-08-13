import { useState } from "react";
import userImg from "./../../assets/images/user-img.png";
import StudentsList from "../Students/Students";

export default function StudentsPage() {
  const [students, setStudents] = useState([
    {
      id: crypto.randomUUID(),
      amg: userImg,
      name: "Ahmed",
      email: "karthi@gmmail.com",
      phon: "7305477760",
      enrollNumber: "1234567305477760",
      dete: "08-Dec, 2021",
    },
  ]);

  const handleAddStudent = (data) => {
    const newStudent = {
      id: crypto.randomUUID(),
      amg: data.file?.[0] ? URL.createObjectURL(data.file[0]) : userImg,
      name: data.name,
      email: data.email,
      phon: data.phone,
      enrollNumber: Math.floor(Math.random() * 1000000000), // ممكن تغيره حسب احتياجك
      dete: data.date?.toLocaleDateString("en-GB"),
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  return (
    <div>
      <StudentsList data={students} handleAddStudent={handleAddStudent} />
    </div>
  );
}
