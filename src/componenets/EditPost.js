import React from 'react'
import { connect } from 'react-redux'
import { editPost } from '../redux/actions'
import BlogForm from './BlogForm'

function EditPost(props) {
    return (
        <>
            <BlogForm post={props.post} onSubmit={(post) => {
                props.dispatch(editPost(post.id, post))
                props.history.push(`/post/${post.id}`)
            }} />
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    return {
        post: state.posts.find(post => {
            return post.id === Number(id)
        })
    }
}

export default connect(mapStateToProps)(EditPost)