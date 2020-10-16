import React from 'react'
import { connect } from 'react-redux'
import { addAPost } from '../redux/actions'
import BlogForm from './BlogForm'

function AddPost(props) {
    console.log(props)
    return (
        <>
            <BlogForm onSubmit={(post) => {
                props.dispatch(addAPost(post))
                props.history.push(`/post/${post.id}`)
            }} />
        </>
    )
}

export default connect()(AddPost)