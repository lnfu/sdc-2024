import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
const CreateBook = () => {
  // const [bookName, setBookName] = useState("Your book name");
  // const [bulletinBoard, setBulletinBoard] = useState(
  //   "Enter group announcement here..."
  // );
  const [bookPhotoName, setBookPhotoName] = useState("No file chosen");
  const [bookPhotoFile, setBookPhotoFile] = useState();
  const bookNameRef = useRef("");
  const bulletinBoardRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault(); // avoid execute default action
    const newBook = {
      BookName: bookNameRef.current,
      PhotoName: bookPhotoName,
      BulletinBoard: bulletinBoardRef.current,
      File: bookPhotoFile,
    };
    console.log(newBook);
  };

  return (
    <form
      className="mx-[12%] mt-[8%] mb-[16%] bg-gray-light rounded-2xl px-[6%] py-[4%]"
      onSubmit={handleSubmit}
    >
      <h2>Create New Account Book</h2>
      <div className='flex flex-col w-full'>
        <label>Book Name</label>
        <input
          type="text"
          ref={bookNameRef}
          placeholder="Your book name"
          onChange={(e) => {
            bookNameRef.current = e.target.value;
          }}
        />
      </div>
      <div className='flex flex-col w-full'>
        <label>Book Photo</label>
        <div>
          <input type="text" value={bookPhotoName} readOnly />
          <label>
            <FiUpload className="w-4 h-4" />
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                setBookPhotoName(e.target.files[0].name);
                setBookPhotoFile(e.target.files[0]);
              }}
            />
          </label>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <label>Bulletin Board</label>
        <textarea
          type="text"
          ref={bulletinBoardRef}
          placeholder="Enter group announcement here..."
          rows="4" // Sets the visible number of lines in the textarea
          cols="50" // Sets the visible width of the textarea
          onChange={(e) => {
            bulletinBoardRef.current = e.target.value;
          }}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateBook;
