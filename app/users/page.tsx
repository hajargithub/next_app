const UserPage = async () => {
  const res = await fetch("http://localhost:3000/api/users/", {
    cache: "no-cache",
  });
  const users: User[] = await res.json();
  console.log(users);
  interface User {
    id: number;
    name: string;
    email: string;
    active: boolean;
  }
  return (
    <>
      <h1 className="text-center text-4xl font-bold">ListUsers</h1>

      <div className="overflow-x-auto my-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th> Active</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {/* {user.active ? ( */}
                  <input
                    type="checkbox"
                    className="toggle toggle-warning"
                    checked={user.active}
                  />
                  {/* ) : (
                    <input
                      type="checkbox"
                      className="toggle toggle-warning"
                      disabled
                    />
                  )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserPage;
