import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaEdit, FaFile, FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const TaskTable = ({ idx, task, tasks, setTasks }) => {
  const axiosPublic = useAxiosPublic();

  const { _id, title, description, timestamp, category } = task;

  const handleUpdate = () => {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    axiosPublic.delete(`/tasks/${id}`).then((res) => {
      const newData = tasks.filter((task) => id != task._id);
      setTasks(newData);
      if (res.deletedCount) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{timestamp}</td>
        <td>{category}</td>
        {/* <td>{format(new Date(requestDate), "P")}</td>
        <td>{format(new Date(expDate), "P")}</td> */}
        <td>
          <div className="flex gap-4">
            <button
              onClick={() => handleUpdate(_id)}
              className="bg-green-500 px-4 py-2 rounded text-white"
            >
              <Link to={`/updateTask/${_id}`}>
                <FaFile />
              </Link>
            </button>
            {/* <button className="bg-green-500 px-4 py-2 rounded text-white">
                <Link to={`/update/${_id}`}>
                  <FaFile />
                </Link>
              </button> */}
          </div>
        </td>
        <td>
          <div className="flex gap-4">
            <button
              onClick={() => handleDelete(_id)}
              className="bg-orange-500 px-4 py-2 rounded text-white"
            >
              <FaTrash className=""></FaTrash>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TaskTable;
