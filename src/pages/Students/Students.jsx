import { useStudents } from "../../context/StudentsContext";
import { GoPencil } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function StudentsList() {
  const navigate = useNavigate();

  const { students, deleteStudent } = useStudents();
  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row h-auto sm:h-15 w-11/12 m-auto  sm:items-center justify-between pt-2">
          <h1 className="sm:text-[22px] font-[700] mb-3">Students List</h1>
          <button
            onClick={() => navigate("/dashboard/user-form")}
            className="bg-[#FEAF00] h-10 sm:h-full w-1/2  sm:w-[199px] rounded-xl text-white text-sm sm:text-base cursor-pointer"
          >
            ADD NEW STUDENT
          </button>
        </div>

        <div className="mt-5 m-auto w-11/12 h-0.5 bg-[#d8d7d7]"></div>

        <div className="hidden sm:block mt-4 overflow-x-auto  ">
          <table className="min-w-[900px] w-11/12 m-auto border-separate border-spacing-y-4">
            <thead className="text-[12px] text-[#ACACAC]">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Enroll Number</th>
                <th>Date of admission</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  className="h-18 text-center bg-white rounded-2xl shadow"
                  key={student.id}
                >
                  <td className="rounded-l-2xl">
                    <img
                      src={student.img}
                      alt={student.img}
                      className="rounded-2xl object-cover  size-12 ml-3"
                    />
                  </td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.enrollNumber}</td>
                  <td>{student.date}</td>
                  <td className="rounded-r-2xl">
                    <div className="flex justify-center text-[20px] text-[#FEAF00]">
                      <button className="mr-5 cursor-pointer">
                        <GoPencil
                          onClick={() =>
                            navigate(`/dashboard/user-form`, {
                              state: { student },
                            })
                          }
                        />
                      </button>
                      <button
                        className="cursor-pointer"
                        onClick={() => deleteStudent(student.id)}
                      >
                        <MdOutlineDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sm:hidden mt-4 space-y-4 w-11/12 m-auto flex flex-wrap">
          {students.map((student) => (
            <div key={student.id} className="bg-white rounded-2xl p-4 shadow ">
              <div className="flex items-center space-x-4">
                <img
                  src={student.img}
                  alt={student.img}
                  className="rounded-xl w-12 h-12"
                />
                <div className="wrap-anywhere">
                  <h2 className="font-bold text-lg">{student.name}</h2>
                  <p className="text-sm text-gray-500">{student.email}</p>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">Phone:</span> {student.phone}
                </p>
                <p>
                  <span className="font-semibold">Enroll Number:</span>{" "}
                  {student.enrollNumber}
                </p>
                <p>
                  <span className="font-semibold">Date of Admission:</span>{" "}
                  {student.date}
                </p>
              </div>
              <div className="flex justify-end mt-3 text-[#FEAF00] text-lg">
                <button className="mr-4 cursor-pointer">
                  <GoPencil />
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => deleteStudent(student.id)}
                >
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
