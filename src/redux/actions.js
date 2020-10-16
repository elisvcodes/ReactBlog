export const addAPost = (post => {
    return {
        type: 'ADD_POST',
        post
    }
})

export const editPost = (id, updates) => {
    return {
        type: "EDIT_POST",
        id,
        updates
    }
}

export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}