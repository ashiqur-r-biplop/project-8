import { Outlet, useNavigate } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import ActiveLink from "../../../Pages/DashBoard/ActiveLink/ActiveLink";
import Navbar from "../../../Shared/Navbar/Navbar";

const MainDashBoard = () => {
  const [currentUser, setCurrentUser] = useState({});
  const { user, logOut, deleteAnUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const url = "http://localhost:5173";

  useEffect(() => {
    const cu = async () => {
      const res = await fetch(`${url}/getUserByEmail/${user.email}`);
      const data = await res.json();
      setCurrentUser(data);
    };
    cu();
  }, [user, url]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: `${user.displayName} Logout Successful`,
          showConfirmButton: false,
          timer: 3000,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "warning",
          title: `${user.displayName} Logout Failed`,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  const handleDeleteUserFromFirebaseAndDatabase = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the user from the database first
        fetch(`${url}/deleteUser/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            deleteAnUser()
              .then(() => {
                Swal.fire({
                  icon: "success",
                  title: `${user.displayName} delete your account Successfully`,
                  showConfirmButton: false,
                  timer: 5000,
                });
                navigate("/");
              })
              .catch((error) => {
                console.log(error);
                Swal.fire({
                  icon: "warning",
                  title: `${user.displayName} delete from Firebase Failed`,
                  showConfirmButton: false,
                  timer: 3000,
                });
              });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              icon: "warning",
              title: `${user.displayName} delete from Database Failed`,
              showConfirmButton: false,
              timer: 3000,
            });
          });
      }
    });
  };

  const isAdmin = true;
  const isUser = false;

  const adminOptions = (
    <>
      <ActiveLink to="/dashboard/manageBus">
        <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Manage Bus
        </li>
      </ActiveLink>
      <ActiveLink to="/dashboard/postBus">
        <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Post Bus
        </li>
      </ActiveLink>
    </>
  );

  const userOptions = (
    <>
      <ActiveLink to="/dashboard/manageNotices">
        <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Manage Notices
        </li>
      </ActiveLink>
    </>
  );

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="drawer container mx-auto lg:pt-[73px]">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:flex gap-1">
          <div className="w-full lg:w-3/12 bg-blue-900 overflow-y-auto max-h-[100vh] lg:h-screen">
            <div className="flex justify-start">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <GrMenu className="w-6 h-6" />
                </label>
              </div>
              <div className="px-2 w-full grid grid-cols-2">
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => handleLogOut()}
                    className="text-white hover:text-black bg-red-500 hover:bg-white py-1 rounded-lg px-1"
                  >
                    Logout Account!
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => handleDeleteUserFromFirebaseAndDatabase(currentUser._id)}
                    className="text-white hover:text-black bg-yellow-500 hover:bg-white py-1 rounded-lg px-1"
                  >
                    Delete Account!
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-none hidden lg:block mt-4">
              <ul className="menu-vertical">
                <ActiveLink to="/dashboard/profile">
                  <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
                    Profile
                  </li>
                </ActiveLink>
                {isAdmin && <> {adminOptions} </>}
                {isUser && <> {userOptions} </>}
              </ul>
            </div>
          </div>
          <div className="lg:w-9/12 p-4">
            <div className="overflow-y-auto max-h-[95vh]">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay overflow-x-auto max-h-[100vh]"></label>
          <ul className="p-4 w-52 bg-blue-900 overflow-y-auto">
            <ActiveLink to="/dashboard/profile">
              <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
                Profile
              </li>
            </ActiveLink>
            {isAdmin && <> {adminOptions} </>}
            {isUser && <> {userOptions} </>}
          </ul>
        </div>
      </div>
      <div>{/* Footer position [if need] */}</div>
    </div>
  );
};

export default MainDashBoard;
