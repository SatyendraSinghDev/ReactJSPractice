import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { IPost, useAddPostMutation, useGetPostQuery } from "./services/post";

export const Posts = () => {

  // Need to call getAPi
  // const { data = [], isLoading, error } = useGetPostQuery();

  const { data = [], isLoading, error } = useGetPostQuery(undefined, {
    pollingInterval: 10000,  // It will fetch data after every 10 sec
    skip: false,             // By default it is false
  });

  const [post, setPost] = useState("");
  const [totalPosts, setTotalPosts] = useState<IPost[]>([]);
  const [addPost] = useAddPostMutation();  // create a mutation at here
  // const [addPost, {isLoading, isFetching}] = useAddPostMutation(); // it will return method and object by RTK library

  useEffect(() => {
    if (data.length > 0) {  
      setTotalPosts(data);
    }
  }, [data]);

  // Create post and Add them into the backend
  const onAddPost = async () => {
    const p: IPost = {
      title: post,
      body: post,
      userId: Math.random(),
      id: Math.random(),
    };
    await addPost(p);
    setTotalPosts([p, ...totalPosts]);  // add in total record
  };

  return (
    <div>
      Post components
      <div>
        <input
          type="text"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
        <button onClick={onAddPost}>Add Post</button>
      </div>
      <div>{isLoading ? "isFetching" : "Fetched"}</div>
      {error && <div>{JSON.stringify(error)}</div>}
      {totalPosts &&
        totalPosts.map((d) => (
          <ListGroup>
            <ListGroup.Item>{d.title}</ListGroup.Item>
          </ListGroup>
        ))}
    </div>
  );
};
