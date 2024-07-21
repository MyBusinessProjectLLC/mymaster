import { createStore } from 'vuex';

export default createStore({
    state: {
        userData: null, // Store user data here
        elementsColor: '#293E89', // Standard color for elements
        colors: {
            standard: '#123369',
            employer: '#4B0084',
            worker: '#35ABBF'
        }
    },
    getters: {
        isLoggedIn(state) {
            return !!state.userData; // Check if user data exists
        },
    },
    mutations: {
        setUserData(state, data) {
            state.userData = data; // Update user data in store
        },
    },
    actions: {
        fetchUserData(context) {
            const userFromStorage = localStorage.getItem('user');

            if (userFromStorage) {
                context.commit('setUserData', userFromStorage); // Commit user data to store
            } else {
                // Handle unauthorized case (redirect or prompt login)
                // Consider using a dedicated login component or service
                console.warn('User is not authorized'); // Placeholder for handling unauthorized cases
            }
        },
    },
});