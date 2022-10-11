const pathApi = {
    user: {
        register: '/user/regUser',
        login: '/user/login',
        getUser: '/user/:id',
        update: '/user/:id'
    },
    post: {
        list: '/posts',
        post: '/post/:id',
        getCategories: '/post-categories',
        postCategory: '/post-category',
        getCategory: '/post-category/:id'
    }
};
export default pathApi;
