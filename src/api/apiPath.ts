const pathApi = {
    user: {
        register: '/user/regUser',
        login: '/user/login',
        getUser: '/user/:id',
        update: '/user/:id',
        getListUser: '/users',
        getUserCategories: '/user-categories?status=active',
        deleteUser: '/user/:id'
    },
    post: {
        list: '/posts',
        post: '/post/:id',
        getCategories: '/post-categories',
        postCategory: '/post-category',
        getCategory: '/post-category/:id',
        deletePost: '/post/:id',
        createPost: '/post'
    },
    media: {
        uploadFile: '/media'
    }
};
export default pathApi;
