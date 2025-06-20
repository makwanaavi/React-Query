import { useEffect, useState } from "react";
import { fetchPosts } from "../Api/Api";

function FetchOld() {

  const [posts, setposts] = useState([]);

  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      setposts(res)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <>
      <div>
        <ul className="section-accordion">
          {posts.map((curElem) => {
            const { id, title, body } = curElem
            return (
              <li key={id}>
                <p> Title :{title}</p>
                <p> Body :{body}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
export default FetchOld;

