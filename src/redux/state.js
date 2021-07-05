const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, How are you', likesCount: 12 },
        { id: 2, message: 'First post', likesCount: 11 },
        { id: 3, message: '111', likesCount: 20 },
        { id: 4, message: '2222', likesCount: 35 },
        { id: 5, message: '3333', likesCount: 33 },
        { id: 6, message: '44444', likesCount: 27 }],
      newPostText: 'TESTtestTEST'
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Test' },
        { id: 3, message: '111' },
        { id: 4, message: '2222' },
        { id: 5, message: '3333' },
        { id: 6, message: '44444' }
      ],
      dialogs: [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
        { id: 4, name: 'User 4' },
        { id: 5, name: 'User 5' },
        { id: 6, name: 'User 6' }
      ]
    }
  },
  _callSubscriber() {
    console.log("The state has changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });


window.store = store;
export default store;