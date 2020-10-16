
let initState = {
    posts: [
        {
            id: 1,
            title: 'I am a Lorem blog Post',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 2,
            title: 'I am a Lorem blog Post Number 2',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ]
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: [...initState.posts, action.post]
            }
        case 'EDIT_POST':
            const afterUpdate = state.posts.map(post => {
                if (post.id === action.id) {
                    return {
                        ...post, ...action.updates
                    }
                } else {
                    return post
                }
            })
            return {
                posts: afterUpdate
            }
        case 'DELETE_POST':
            const afterDelete = state.posts.filter(post => {
                return post.id !== action.id
            })
            return {
                posts: afterDelete
            }

        default:
            return state
    }
}

export default reducer;