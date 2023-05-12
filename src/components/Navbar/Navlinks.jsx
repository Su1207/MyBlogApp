import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const Navlinks = ({ user, handleLogout }) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  const userId = user?.uid;

  // console.log("userId", userId);
  // console.log("name", user?.displayName);

  return (
    <>
      <ul>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
        >
          <Link className="item" to="/">
            About
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
        >
          <Link className="item" to="/create">
            Create
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
        >
          <Link className="item">Contact</Link>
        </motion.li>
        {/* <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
        >
          <Link className="item" to="/signup">
            SignUp
          </Link>
        </motion.li> */}

        {userId ? (
          <div className="logout">
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.2 }}
            >
              <FaUserCircle className="profile-logo" size="25px" />
            </motion.li>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.2 }}
            >
              <p className="uname">{user?.displayName}</p>
            </motion.li>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.2 }}
            >
              <Link className="item" onClick={handleLogout}>
                Logout
              </Link>
            </motion.li>
          </div>
        ) : (
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
          >
            <Link className="item" to="/signIn">
              Sign In
            </Link>
          </motion.li>
        )}
      </ul>
    </>
  );
};

export default Navlinks;
