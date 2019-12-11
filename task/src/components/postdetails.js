import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function PostDetails(props){
    let history = useHistory();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetchPost();
      });

    const fetchPost = async () => {
        const fetchItem = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
        );
        const post = await fetchItem.json();
        setPost(post);
    };

    function handleClick() {
        history.push("/");
      }

    return (
        <div>
            <h4 align="center">Detailed post review page</h4>
            <hr></hr>
            <Table className="table table-bordered table-dark col-md-8 offset-2">
                <tbody>
                    <tr>
                    <th>User ID:</th>
                    <td>{post.userId}</td>
                    </tr>
                    <tr>
                    <th>Post ID:</th>
                    <td>{post.id}</td>
                    </tr>
                    <tr>
                    <th>Title:</th>
                    <td>{post.title}</td>
                    </tr>
                    <tr>
                    <th>Body:</th>
                    <td>{post.body}</td>
                    </tr>       
                </tbody>
                
            </Table>
            <Button type="button" className="btn btn-success offset-md-2" onClick={handleClick} >Go back!</Button>
        </div>
    );
}
export default PostDetails;
