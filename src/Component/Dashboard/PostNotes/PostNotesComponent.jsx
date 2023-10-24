import React, { useEffect, useState } from "react";
import { BsPlus, BsTrash } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import PostNotesModal from "./PostNotesModal/PostNotesModal";
import axios from "axios";
import UpdateNoticesModal from "./UpdateNoticesModal/UpdateNoticesModal";

const PostNotesComponent = () => {
  const [notices, setNotices] = useState([]);
  const [control, setControl] = useState(false);
  const [note, setNote] = useState({});
  useEffect(() => {
    axios("http://localhost:5000/notices")
      .then((res) => setNotices(res.data))
      .catch((err) => console.log(err));
  }, [control]);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/delete-notice/${id}`)
      .then((res) => {
        if (res.data?.deletedCount > 0) {
          setControl(!control);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleUpdate = (id) => {
    const notice = notices.find((n) => n?._id == id);
    setNote(notice);
  };
  return (
    <>
      <div className="md:p-10 p-3 border w-full">
        <label
          htmlFor="my_modal_7"
          className="border px-3 py-1 flex items-center justify-center cursor-pointer"
        >
          <BsPlus></BsPlus> Add Notice
        </label>
        <div className="w-full">
          <div className="flex flex-col gap-5 mt-10">
            {notices.map((n, i) => {
              const { notice, createNoteDate, _id } = n;
              return (
                <div key={i} className="border p-10">
                  <div className="flex justify-between items-center gap-5">
                    <span>{createNoteDate} :</span> <span>{notice}</span>
                    <span className="flex gap-5">
                      <label
                        htmlFor="my_modal_8"
                        onClick={() => handleUpdate(_id)}
                        className="cursor-pointer"
                      >
                        <MdOutlineEdit></MdOutlineEdit>{" "}
                      </label>
                      <span
                        onClick={() => handleDelete(_id)}
                        className="cursor-pointer"
                      >
                        <BsTrash></BsTrash>
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <PostNotesModal
        setControl={setControl}
        control={control}
      ></PostNotesModal>
      <UpdateNoticesModal
        control={control}
        setControl={setControl}
        note={note}
      ></UpdateNoticesModal>
    </>
  );
};

export default PostNotesComponent;
