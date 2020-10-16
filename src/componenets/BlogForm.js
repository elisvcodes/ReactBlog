import React, { Component } from 'react'

export default class BlogForm extends Component {
    state = {
        id: this.props.post ? this.props.post.id : Math.random() * 1000000,
        title: this.props.post ? this.props.post.title : '',
        body: this.props.post ? this.props.post.body : ''
    }
    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onBodyChange = (e) => {
        this.setState({
            body: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div className='container' style={{ marginTop: '1%' }}>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="blogPostTitle">Post Title</label>
                        <input autoFocus type="text" value={this.state.title} onChange={this.onTitleChange} className="form-control" id="blogPostTitle" aria-describedby="blogPostTitle" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="blogPostBody">Body</label>
                        <textarea className="form-control" id="blogPostBody" value={this.state.body} onChange={this.onBodyChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
