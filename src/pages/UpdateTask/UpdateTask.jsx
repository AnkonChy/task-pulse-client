import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const singleTaskData = useLoaderData();

  const [title, setTitle] = useState(singleTaskData?.title);
  const [description, setDescription] = useState(singleTaskData?.description);
  const [timestamp, setTimestamp] = useState(singleTaskData?.timestamp);
  const [category, setCategory] = useState(singleTaskData?.category);

  const handleUpdateTaskForm = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      timestamp: timestamp,
      category: category,
    };
    axiosPublic.put(`/tasks/${id}`, data).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <div>
      <div className="bg-[#F4F3F0] lg:p-24">
        <h2 className="text-3xl text-center font-bold my-10">Add Task</h2>
        <form onSubmit={handleUpdateTaskForm}>
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
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Category</span>
              </label>

              <select
                className="input input-bordered"
                name="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="todo">To-Do</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>

          {/* End of Labels */}
          <input
            type="submit"
            value="Update Task"
            className="btn w-full bg-orange-500 text-black mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
