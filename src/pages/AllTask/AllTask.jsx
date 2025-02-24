import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import TaskTable from "../../components/TaskTable/TaskTable";

const AllTask = () => {
  const { user } = useAuth();

  const [tasks, setTasks] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic(`/tasks/${user?.email}`).then((res) => {
      setTasks(res.data);
    });
  }, [axiosPublic, user?.email]);
  console.log(tasks);
  return (
    <div className="w-1/2 mx-auto bg-slate-50 mt-14">
      <h1 className="text-5xl font-bold text-center my-8">Food Request</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>serial</th>
              <th>Title</th>
              <th>Description</th>
              <th>Timestamp</th>
              <th>Category</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <p>No data found</p>
            ) : (
              tasks.map((task, index) => (
                // <FoodRequestTable
                //   idx={index}
                //   key={food?._id}
                //   food={food}
                //   foodRequest={foodRequest}
                //   setFoodRequest={setFoodRequest}
                // ></FoodRequestTable>
                <TaskTable idx={index} key={task._id} task={task}></TaskTable>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
