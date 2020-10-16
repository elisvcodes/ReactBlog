import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <div className={'container'} style={{ marginTop: '1%' }}>
            {props.posts.map(post => {
                return (
                    <div className="card" style={{ width: '60rem' }} key={post.id}>
                        <div className="card-body">
                            <Link to={`/post/${post.id}`} className="card-title">{post.title}</Link>
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);