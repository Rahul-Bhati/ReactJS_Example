import { Routes, Route, Navigate  } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contect";
import Error from "./Error";
import User from "./User";
import Menu from "./Menu";
import Search from "./Search";

function RouterExample() {
  return (
    <div style={{ padding: "5%", backgroundColor: "#D4E2D4" }}>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="search" element={<Search />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:fname/:lname" element={<User />} />
        {/* for undefiend path show error page  */}
        {/* <Route path="*" element={<Error />} /> */}

        {/* error page show na karke sidha home pe redirect karna */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default RouterExample;
