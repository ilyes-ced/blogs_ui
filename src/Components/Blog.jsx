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
    document.querySelector(`.${one}`).classList.add("active");
    document.querySelector(`.${two}`).classList.remove("active");
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
      <div className="blogs">
        <div className="head">
          <Link className="nav-link" to="/">
            Home
          </Link>{" "}
          <h2>blog</h2>
          <div className="btns">
            <button onClick={() => gestion("post", "form")}>
              List all Posts
            </button>
            <button onClick={() => gestion("form", "post")}>Create Post</button>
          </div>
        </div>
        <div className=" post Child active">
          <div className="filter-by-date">
            <div>
              <label htmlFor="start">Start</label>
              <input
                type="date"
                id="start"
                onChange={(e) => setStartdate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="end">End</label>
              <input
                type="date"
                id="end"
                onChange={(e) => setEnddate(e.target.value)}
              />
            </div>
          </div>

          <table>
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
        <div className="Child form">
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
      </div>
    </>
  );
}
