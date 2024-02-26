import React, {useState,useEffect } from 'react';
import { format } from 'date-fns';
import { auth } from '../utils/firebase';
// import admin from 'firebase/admin'
// admin.initializeApp();
// const authnew = admin.auth();

const UserTable = () => {
    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const userList = await getUsersFromFirebase();
            console.log(userList)
            setUsersData(userList);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchUsers();
      }, []);

      const getUsersFromFirebase = async () => {
        try {
          const userRecords = await auth.listUsers()
          const userList = userRecords.users.map((user) => ({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime,
          }));
          return userList;
        } catch (error) {
          throw error;
        }
      };
    // const sss = JSON.parse(localStorage.getItem('user'))
    // console.log(sss)
  const [users, setUsers] = useState([
    { id: 1, username: 'John Doe', addedDate: new Date(), status: 'Active' },
    { id: 2, username: 'Jane Doe', addedDate: new Date(), status: 'Inactive' },
  ]);

  const handleAddUser = () => {
    const newUser = { id: users.length + 1, username: 'New User', addedDate: new Date(), status: 'Active' };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleChangeStatus = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId
        ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
        : user
    );
    setUsers(updatedUsers);
  };

  console.log('user from firebase',usersData)
  return (
    <div className="container mx-auto mt-8">
    <h2 className="text-2xl text-center text-white font-bold mb-4">User Table</h2>
    <table className="min-w-full bg-lightDark border rounded-md">
      <thead className='text-white font-extrabold'>
        <tr>
          <th className="py-2 px-4 border-b">Username</th>
          <th className="py-2 px-4 border-b">Added Date</th>
          <th className="py-2 px-4 border-b">Status</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody className='text-center text-white'>
        {users.map((user) => (
          <tr key={user.id} className="border-b">
            <td className="py-2 px-4">{user.username}</td>
            <td className="py-2 px-4">{format(user.addedDate, 'MM/dd/yyyy')}</td>
            <td className={`py-2 px-4 ${user.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
              {user.status}
            </td>
            <td className="py-2 px-4">
              <button
                onClick={() => handleChangeStatus(user.id)}
                className={`bg-blue-500 text-white py-1 px-2 rounded mr-2 ${
                  user.status === 'Active' ? 'hover:bg-red-500' : 'hover:bg-green-500'
                }`}
              >
                {user.status === 'Active' ? 'Deactivate' : 'Activate'}
              </button>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="mt-4">
      <button
        onClick={handleAddUser}
        className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
      >
        Add User
      </button>
    </div>
  </div>
  );
};

export default UserTable;
