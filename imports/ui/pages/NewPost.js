import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import Dropzone from "react-dropzone";
import axios from "axios";
import Navbar from "../components/Navbar";
import keys from '../../keys'

const CLOUDINARY_UPLOAD_PRESET = keys.cloudinary.presetName;
const CLOUDINARY_UPLOAD_URL = keys.cloudinary.uploadUrl;

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      uploading: false,
      showUploading: false,
      uploadedFileCloudinaryUrl: ""
    };
    this.createPost = this.createPost.bind(this);
  }

  createPost(newPost) {
    Meteor.call("posts.insert", newPost, (err, res) => {
      if (err) {
        console.log(err.reason);
      } else {
        this.refs.title.value = "";
        this.refs.content.value = "";
        this.props.history.push("/");
      }
    });
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.setState({ uploading: true, showUploading: true });
    this.handleImageUpload(files);
  }

  handleImageUpload(files) {
    console.log(files[0]);

    const uploaders = files.map(file => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      //formData.append("api_key", "1234567"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      axios
        .post(CLOUDINARY_UPLOAD_URL, formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" }
        })
        .then(response => {
          const data = response.data;
          const fileURL = data.secure_url; // You should store this URL for future references in your app
          this.setState({
            uploadedFileCloudinaryUrl: fileURL,
            uploading: false
          });
          console.log(data);
          return data;
        });
    });
    if (uploaders) {
      console.log(uploaders);
    }
  }

  handleSubmit(e) {
    const newPost = {
      title: this.refs.title.value,
      content: this.refs.content.value,
      author: "Kehinde Orilogbon",
      featuredImage: this.state.uploadedFileCloudinaryUrl,
      createdAt: new Date()
    };
    //console.log(newPost);
    this.createPost(newPost);
    e.preventDefault();
  }

  handleTextChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  componentDidUpdate(prevProps, prevState) {
    $(".button-collapse").sideNav({
      closeOnClick: true,
      draggable: true
    });
  }
  render() {
    console.log(this.state.uploadedFileCloudinaryUrl);
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <h2>New Post</h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    autoFocus
                    id="title"
                    type="text"
                    className="validate"
                    onChange={this.handleTextChange.bind(this)}
                    ref="title"
                    value={this.state.title}
                    name="title"
                  />
                  <label>Title</label>
                </div>
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                    onChange={this.handleTextChange.bind(this)}
                    ref="content"
                    value={this.state.content}
                    name="content"
                  />
                  <label>Content</label>
                </div>
                <div className="row">
                  <div className="col s12 m6">
                    <Dropzone
                      multiple={false}
                      accept="image/*"
                      onDrop={this.onImageDrop.bind(this)}
                    >
                      <p>Drop an image or click to select a file to upload.</p>
                    </Dropzone>
                  </div>
                  <div className="col s12 m6">
                    {this.state.uploading ? (
                      <div className="progress">
                        <div className="indeterminate" />
                      </div>
                    ) : null}
                    <img
                      src={this.state.uploadedFileCloudinaryUrl}
                      width="250"
                      height="auto"
                    />
                  </div>
                </div>
                <input type="submit" value="Submit" className="btn red" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
