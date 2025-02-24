import React from "react";
import { FaEdit, FaFile, FaTrash } from "react-icons/fa";

const TaskTable = ({ idx, task }) => {
  const { _id, title, description, timestamp, category } = task;

  const handleDelete = () => {};
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
              onClick={() => handleDelete(_id)}
              className="bg-orange-500 px-4 py-2 rounded text-white"
            >
              <FaEdit />
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
            {/* <button className="bg-green-500 px-4 py-2 rounded text-white">
                <Link to={`/update/${_id}`}>
                  <FaFile />
                </Link>
              </button> */}
          </div>
        </td>
      </tr>
    </>
  );
};

export default TaskTable;
