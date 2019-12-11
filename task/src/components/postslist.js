import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Table, Button } from "reactstrap";

class PostList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        };
      }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(json => {
            this.setState({
              posts: json
            });
          });
    }


    render() {
        var {posts}  = this.state;
        const { history } = this.props;
    return (
        <div className="PostList">
            <h4 align="center">This is posts list page</h4>
            <hr></hr>
            <Button type="button" className="btn btn-success offset-md-2 " onClick={() => history.push(`/addpost`)}>Add new post!</Button>    
            <Table className="col-md-8 offset-2 mt-2 table-dark">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Post ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id} onClick={() => history.push(`/details/${post.id}`)}>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
    }
}

export default withRouter(PostList);
