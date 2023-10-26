import React from "react";

const UpdateUserProfileModal = ({
  currentUser,
  handleFormSubmit,
  userName,
  userNumber,
}) => {
  // console.log(currentUser);

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box w-full">
        <h3 className=" text-lg text-center">Fill The Form!</h3>
        {/* <div>
          <div className="w-full bg-zinc-50 rounded p-4">
            <form></form>
          </div>
        </div> */}
        <div className="modal-action">
          <form method="dialog" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1  mx-auto md:gap-x-12">
              <div>
                <div>
                  <p className="text-lg">Name:</p>
                  <input
                    type="text"
                    // placeholder="Full Name"
                    defaultValue={currentUser?.name}
                    ref={userName}
                    name="name"
                    className="input input-bordered  w-full mb-2"
                  />
                </div>
                <div>
                  <p className="text-lg">Email:</p>
                  <input
                    type="email"
                    defaultValue={currentUser?.email}
                    disabled
                    name="email"
                    className="input input-bordered  w-full mb-2"
                  />
                </div>

                <div>
                  <p className="text-lg">Phone:</p>
                  <input
                    type="number"
                    defaultValue={currentUser?.number}
                    ref={userNumber}
                    name="phone"
                    className="input input-bordered w-full  mb-2"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              // onClick={}
              className="btn btn-sm bg-orange-600 text-white "
            >
              Update
            </button>
            <button className="btn btn-sm bg-orange-600 text-white">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateUserProfileModal;
