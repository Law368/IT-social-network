let rerenderEntireTree = () => {
    console.log("Hello")
}

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;