let store = {
    _state: {
        profilePage:{
            posts: [
                { id: 1, message: "Do not worry", likesCount: 777 },
                { id: 2, message: "Keep working hard", likesCount: 333 },
                { id: 3, message: "Do it all", likesCount: 444 },
                { id: 4, message: "In due time", likesCount: 888 },
            ],
            newPostText: 'Dev test',
        },
        dialogsPage:{

            dialogs: [
                { id: 1, name: "Iroh" },
                { id: 2, name: "Bang" },
                { id: 3, name: "Snow" },
                { id: 4, name: "Cloud" },
                { id: 5, name: "Tide" },
            ],

            messages: [
                { id: 1, message: "Study" },
                { id: 2, message: "for" },
                { id: 3, message: "the" },
                { id: 4, message: "Future" },
                { id: 5, message: "of yours" },
            ],
        },
        sidebar: {
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("Hello")
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
window.store = store;