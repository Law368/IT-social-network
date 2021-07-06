const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: 'Hi, How are you', likesCount: 12 },
        { id: 2, message: 'First post', likesCount: 11 },
        { id: 3, message: '111', likesCount: 20 },
        { id: 4, message: '2222', likesCount: 35 },
        { id: 5, message: '3333', likesCount: 33 },
        { id: 6, message: '44444', likesCount: 27 }],
    newPostText: 'TESTtestTEST'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;