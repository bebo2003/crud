import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useStudents } from "../../context/StudentsContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddStudentForm() {
  const location = useLocation();
  const student = location.state?.student || {};
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: student.name || "",
      email: student.email || "",
      phone: student.phone || "",
      date: null,
      file: null,
    },
  });
  const { addStudent, editStudent } = useStudents();

  const onSubmit = (data) => {
    if (student.id) {
      editStudent(student.id, data);
      navigate("/dashboard/Students");
      reset();
      return;
    }
    addStudent(data);
    navigate("/dashboard/Students");
    reset();
  };
  const navigate = useNavigate();

  return (
    <div className="h-auto m-auto pt-2 p-5  mt-5 font-bold">
      <h2 className="text-[22px] font-bold mb-6">Add Student</h2>

      <div className="w-8/12 m-auto bg-gray-100 p-6 rounded-lg shadow">
        <form>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: { value: true, message: "Name is required" },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="name@gmail.com"
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Phone</label>
            <input
              type="tel"
              placeholder="01117078066"
              {...register("phone", {
                required: { value: true, message: "Phone number is required" },
                pattern: {
                  value: /^01[0-2,5]{1}[0-9]{8}$/,
                  message: "Phone number must be valid",
                },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">
              Date of admission
            </label>
            <Controller
              name="date"
              control={control}
              rules={{ required: { value: true, message: "Date is required" } }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Pick a date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              )}
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Add Photo</label>
            <input
              type="file"
              {...register("file", {
                required: { value: true, message: "File is required" },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.file && (
              <p className="mt-1 text-sm text-red-600">{errors.file.message}</p>
            )}
          </div>

          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="bg-yellow-300 hover:bg-yellow-500 text-black font-medium py-6 px-1 rounded-lg w-full"
          >
            Insert
          </button>
        </form>
      </div>
    </div>
  );
}
