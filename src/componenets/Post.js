import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../redux/actions'

function Post(props) {
    return (
        <div className='container' style={{ marginTop: '1%' }}>
            <h1>{props.post.title}</h1>
            <p>{props.post.body}</p>
            <button className='btn btn-danger' style={{ marginRight: '1%' }} onClick={() => [
                props.dispatch(deletePost(props.post.id)),
                props.history.push('/')
            ]}> Remove</button>
            <button className='btn btn-primary' onClick={() => {
                props.history.push(`/edit/${props.post.id}`)
            }}> Edit</button>

        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        post: state.posts.find(post => {
            return post.id === Number(id)
        })
    }
}
export default connect(mapStateToProps)(Post)