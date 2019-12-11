import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";


class AddPost extends Component {

  render() {
  const { userId, title, body } = this.state;
  return (
    <div className="AddPost">
      <h4 align="center">This is AddPost componet</h4>
      <hr></hr>
      <Form className="col-md-6 offset-md-3" onSubmit={this.onSubmit}>
      <FormGroup>
        <Label>User ID</Label>
        <Input type="number" name="userId" value={userId} placeholder="type user id" onChange={this.onChange}/>
      </FormGroup>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" name="title" value={title}  placeholder="type post tile" onChange={this.onChange}/>
      </FormGroup>
      <FormGroup>
        <Label>Body</Label>
        <textarea type="text" className="form-control" name="body" value={body}  rows="3" placeholder="Write your text here." onChange={this.onChange}></textarea>
      </FormGroup>
      <Button className="btn btn-success">Submit</Button>
      <Link to="/">
        <Button type="button" className="btn-info ml-1">Go back!</Button>
      </Link>
    </Form>
    </div>
  );
  }
}

export default AddPost;
