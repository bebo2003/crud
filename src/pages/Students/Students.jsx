import { useStudents } from "../../context/StudentsContext";
import { GoPencil } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function StudentsList() {
  const navigate = useNavigate();
  const { students, deleteStudent } = useStudents();

  return (
    <div className="w-full px-4 sm:px-8 py-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <h1 className="text-xl sm:text-2xl font-bold">Students List</h1>
        <button
          onClick={() => navigate("/dashboard/user-form")}
          className="bg-[#FEAF00] text-white rounded-xl px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base hover:opacity-90 transition"
        >
          ADD NEW STUDENT
        </button>
      </div>

      <div className="mt-4 h-[1px] bg-gray-300 w-full"></div>

      {/* Desktop Table */}
      <div className="hidden sm:block mt-4 overflow-x-auto">
        <table className="min-w-[800px] w-full border-separate border-spacing-y-4">
          <thead className="text-xs text-gray-400 uppercase">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Enroll Number</th>
              <th>Date of Admission</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="bg-white rounded-2xl shadow text-center">
                <td className="p-2">
                  <img
                    src={student.img}
                    alt={student.name}
                    className="w-12 h-12 rounded-2xl object-cover mx-auto"
                  />
                </td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.enrollNumber}</td>
                <td>{student.date}</td>
                <td>
                  <div className="flex justify-center gap-4 text-[#FEAF00] text-lg">
                    <button
                      onClick={() => navigate(`/dashboard/user-form`, { state: { student } })}
                      className="hover:opacity-80"
                    >
                      <GoPencil />
                    </button>
                    <button onClick={() => deleteStudent(student.id)} className="hover:opacity-80">
                      <MdOutlineDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden mt-4 space-y-4">
        {students.map((student) => (
          <div key={student.id} className="bg-white rounded-2xl shadow p-4">
            <div className="flex items-center gap-4">
              <img src={student.img} alt={student.name} className="w-12 h-12 rounded-xl object-cover" />
              <div className="flex flex-col break-words">
                <h2 className="font-bold text-lg">{student.name}</h2>
                <p className="text-sm text-gray-500 truncate">{student.email}</p>
              </div>
            </div>

            <div className="mt-3 text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-semibold">Phone:</span> {student.phone}
              </p>
              <p>
                <span className="font-semibold">Enroll Number:</span> {student.enrollNumber}
              </p>
              <p>
                <span className="font-semibold">Date of Admission:</span> {student.date}
              </p>
            </div>

            <div className="flex justify-end mt-3 gap-4 text-[#FEAF00] text-lg">
              <button
                onClick={() => navigate(`/dashboard/user-form`, { state: { student } })}
                className="hover:opacity-80"
              >
                <GoPencil />
              </button>
              <button onClick={() => deleteStudent(student.id)} className="hover:opacity-80">
                <MdOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
