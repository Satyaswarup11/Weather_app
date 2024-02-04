import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";


const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollection = collection(db, "users");
        const snapshot = await getDocs(usersCollection);
        const userData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);


  const deleteUser = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const changeUserStatus = async (id) => {
    try {
      const updatedUsers = users.map((user) =>
        user.id === id ? { ...user, status: user.status === "active" ? "inactive" : "active" } : user
      );
      await updateDoc(doc(db, "users", id), { status: updatedUsers.find((user) => user.id === id).status });
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error changing user status:", error);
    }
  };

  return (
    <div className="container">
      <table className="table table-dark table-striped mt-4">
        <thead>
          <tr>
            <th>Username</th>
            <th>Added Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.addedDate.toDate().toLocaleString()}</td>
              <td>{user.status}</td>
              <td>
                <button className="btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>Delete</button>
                <button className={`btn ${user.status === "active" ? "btn-warning" : "btn-success"}`} onClick={() => changeUserStatus(user.id)}>
                  {user.status === "active" ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;