import { useLocation } from "react-router-dom";
import Header from "../components/Header";


const Home = () => {

  const location = useLocation();
  // console.log('hash', location.hash);
  // console.log('pathname', location.pathname);
  // console.log('search', location.search);
  console.log(location);

  return (
    <div>
      <h1>Home</h1>
      <p>
        <a href="http://localhost:3000/about?param=name">go to about page with param</a>
      </p>
      <p>Current URL 👉️ <code>{window.location.href}</code><br />
        Current Pathname 👉️ <code>{window.location.pathname}</code></p>
    </div>
  )
};

export default Home