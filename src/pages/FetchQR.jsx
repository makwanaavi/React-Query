// import { useEffect, useState } from "react";
import { fetchPosts } from "../Api/Api";
import { useQuery } from "@tanstack/react-query";
function FetchQR() {
  // const getPostData = async () => {
  //   try {
  //     const res = await fetchPosts();
  //     console.log(res.data);
  //     return res.status === 200 ? res.data : []
  //   } catch (error) {
  //     console.log(error);
  //     return [];
  //   }
  // };
  const { data = [], isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error : {error.message || "Something is Wrong in this fetchinfg methode !"}</div>
  return (
    <>
      <div>
        <ul className="section-accordion">
          {data?.map((curElem) => {
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
export default FetchQR;

