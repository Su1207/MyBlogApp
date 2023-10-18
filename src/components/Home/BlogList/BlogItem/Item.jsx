// import React from "react";
// import Chip from "../../../Common/Chip/Chip";
// import { BsTrashFill } from "react-icons/bs";
// import { BiEdit } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import "./styles.css";

// const BlogItem = ({
//   blog: {
//     //destructuring
//     id,
//     description,
//     title,
//     createdAt,
//     authorName,
//     authorAvatar,
//     category,
//     cover,
//   },
// }) => (
//   <div className="blogItem-wrap">
//     <img src={cover} alt="cover" className="blogItem-cover" /> {/*blogCover*/}
//     <Chip label={category} />
//     <h3>{title}</h3>
//     <p className="blogItem-desc">{description}</p>
//     <footer>
//       <div className="blogItem-author">
//         <img src={authorAvatar} alt="avatar" />
//         <div>
//           <h6>{authorName}</h6>
//           <p>{createdAt}</p>
//         </div>
//       </div>
//       <div className="icons">
//         <BsTrashFill
//           className="trash"
//           size="17px"
//           // onClick={() => handleDelete(id)}
//         />
//         {/* <Link to={`/update/${id}`}> */}
//         <BiEdit className="edit" size="19px" />
//         <Link className="blogItem-link" to={`/blog/${id}`}>
//           ➝
//         </Link>{" "}
//         {/* The ➝ character inside the Link component appears to be a visual representation for an arrow, indicating that this link may be used for navigating to another page or location.
//       id variable is being used to dynamically generate the URL path for the link.*/}
//       </div>
//     </footer>
//   </div>
// );

// export default BlogItem;
