import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const { user } = useAuth();
  const email = user.email;
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();
  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const timestamp = form.timestamp.value;
    const category = form.category.value;

    if (title.length > 50) {
      toast.warn("Title should not exceed 50 characters.");
      return;
    }

    if (description.length > 200) {
      toast.warn("Title must be at most 50 characters long.");
      return;
    }

    const taskData = {
      title,
      description,
      timestamp,
      category,
      email,
    };

    axiosPublic.post("/tasks", taskData).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        console.log("task added to the db");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate("/allTask");
    });
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] lg:p-24">
        <h2 className="text-3xl text-center font-bold my-10">Add Task</h2>
        <form onSubmit={handleAddTask}>
          <div className="flex gap-6 items-center">
            <div className="form-control md:w-1/2 my-4">
              <label className="label">
                <span className="label-text font-bold">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Description</span>
              </label>
              <textarea
                className="input input-bordered"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Timestamp</span>
              </label>

              <input
                type="date"
                name="timestamp"
                placeholder="Timestamp"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Category</span>
              </label>

              <select className="input input-bordered" name="category">
                <option value="todo">To-Do</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>

          {/* End of Labels */}
          <input
            type="submit"
            value="Add Schedule"
            className="btn w-full bg-orange-500 text-black mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
