import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPost, addCommit, like } from "../rtk/slices/myposts";
export default function Blog() {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState("");
  const [commit, setCommit] = useState("");

  const gestion = (one, two) => {
    document.querySelector(`.${one}`).classList.remove("hidden");
    document.querySelector(`.${two}`).classList.add("hidden");
  };

  const postsList = posts.filter((val) => {
    if (startDate === "" && endDate === "") {
      return val;
    } else if (startDate !== "" && endDate !== "") {
      if (
        new Date(val.date) >= new Date(startDate) &&
        new Date(val.date) <= new Date(endDate)
      ) {
        return val;
      }
    } else if (startDate !== "" && endDate === "") {
      if (new Date(val.date) <= new Date(startDate)) {
        return val;
      }
    } else if (startDate === "" && endDate !== "") {
      if (new Date(val.date) >= new Date(endDate)) {
        return val;
      }
    }
  });

  return (
    <>
      <div className="blogs main_container p-12 bg-white border-4  border-black ">
        <div className="head">
        <h2 className="text-2xl font-bold mb-4">Blogs</h2>
          
          
        </div>
        <div className=" post Child active">
          <div className="filter-by-date">
            <div>
              <label htmlFor="start">Start</label>
              <input className="w-1/2  border-b-4 border-black mb-4 pt-[2px] pl-6 focus:border-[#ffa580] outline-none"
                type="date"
                id="start"
                onChange={(e) => setStartdate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="end">End</label>
              <input className="w-1/2  border-b-4 border-black mb-4 pt-[2px] pl-6 focus:border-[#ffa580] outline-none"
                type="date"
                id="end"
                onChange={(e) => setEnddate(e.target.value)}
              />
            </div>
          </div>

          <table className="bg-red-600">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Description</th>
                <th>Date</th>
                <th>like</th>
                <th>commit</th>
              </tr>
            </thead>
            <tbody>
              {postsList.map((post) => {
                return (
                  <tr key={post.id}>
                    <td>{post.subject}</td>
                    <td>{post.description}</td>
                    <td>{post.date}</td>
                    <td>
                      {post.like}
                      <button onClick={() => dispatch(like(post))}>like</button>
                    </td>
                    <td>
                      {post.commit.length === 0 ? (
                        <div className="commit">
                          <input
                            type="text"
                            onChange={(e) => setCommit(e.target.value)}
                          />
                          <button
                            onClick={(e) => {
                              dispatch(addCommit([post.id, commit]));
                            }}
                          >
                            commit
                          </button>
                        </div>
                      ) : (
                        post.commit
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>


        <div className="Child form hidden">
          <h4>Please fill in post information form</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              document
                .querySelectorAll("input:not([type='submit'])")
                .forEach((e) => (e.value = ""));
            }}
          >
            <label htmlFor="subject">Subject</label>
            <input
              required
              type="text"
              id="subject"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <label htmlFor="description">description</label>
            <input
              required
              type="text"
              id="description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="date">date</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="submit"
              value="Add new Post"
              onClick={() =>
                dispatch(
                  addPost({
                    subject: subject,
                    description: description,
                    date: date,
                  })
                )
              }
            />
          </form>
        </div>
        <div className="btns flex flex-row mt-8 space-x-8">
            <button className="links bg-[#ffc9fd] grow flex justify-center items-center px-20 border-2 border-black hover:bg-black hover:text-white h-8" onClick={() => gestion("post", "form")}>List all Blogs</button>
            <button className="links bg-[#ffc9fd] grow flex justify-center items-center px-20 border-2 border-black hover:bg-black hover:text-white h-8" onClick={() => gestion("form", "post")}>Create Blog</button>
          </div>
      </div>
    </>
  );
}
