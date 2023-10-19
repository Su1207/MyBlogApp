import React from "react";
// import BlogItem from "./BlogItem/Item";
import { Link } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Chip from "../../Common/Chip/Chip";
import "./style.css";

const BlogList = ({ user, blogs, handleDelete }) => {
  const userId = user?.uid;

  return (
    <div className="blogList-wrap">
      {blogs?.map((item) => (
        <div key={item.id}>
          {/* <BlogItem blog={blog} key={blog.id} /> */}
          <div className="blogItem-wrap">
            <Link to={`/blog/${item.id}`}>
              <img
                src={item.imgUrl}
                alt={item.title}
                className="blogItem-cover"
              />
            </Link>
            {/*blogCover*/}
            <Chip label={item.category} />
            <h3>{item.title}</h3>
            <p className="blogItem-desc">{item.description}</p>
            <footer>
              <div className="blogItem-author">
                <img src="assets/images/author.jpg" alt="avatar" />
                <div>
                  <h6>{item.author}</h6>
                  <p>{item.timestamp?.toDate()?.toDateString()}</p>
                </div>
              </div>
              <div className="icons">
                {userId && userId === item.userId && (
                  <>
                    <BsTrashFill
                      className="trash"
                      size="17px"
                      onClick={() => handleDelete(item.id)}
                    />
                    {/* <Link to={`/update/${id}`}> */}
                    <BiEdit className="edit" size="19px" />
                  </>
                )}

                <Link className="blogItem-link" to={`/blog/${item.id}`}>
                  ➝
                </Link>
                {/* The ➝ character inside the Link component appears to be a visual representation for an arrow, indicating that this link may be used for navigating to another page or location. 
      id variable is being used to dynamically generate the URL path for the link.*/}
              </div>
            </footer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
