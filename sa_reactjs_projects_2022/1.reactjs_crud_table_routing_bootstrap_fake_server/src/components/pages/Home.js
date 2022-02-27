import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    let userList = await getUsers();
    setUsers(userList.reverse());
  }, []);

  // GET- Get All Users List
  const getUsers = async () => {
    const result = await axios.get("http://localhost:5000/users");
    return result.data;
  };

  const deleteUserById = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    getUsers();
  };

  return (
    <div className="container table-responsive">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table table-bordered table-hover shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-3"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUserById(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
