import { useEffect, useState } from "react";
import { fetchPosts } from "../Api/Api";

function FetchOld() {

  const [posts, setposts] = useState([]);
  
  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      res.status === 200 ? setposts(res.data) : []

      console.log(res.data);
      // log the data property
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
          {posts.map((curElem)=>{
            const {id, title, body} = curElem
            return (
              <li key={id}>
                <p> <span style={{color:"red"}}>Title :</span>{title}</p>
                <p> <span style={{color:"red"}}>Body :</span>{body}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default FetchOld;

