export const initialState = {
    isAuthenticated: false,
    coalForm: undefined,
    coals: {
        loading: false,
        data: []
    }
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return {
                ...state,
                isAuthenticated: true
            };
        case 'LOAD_COALS':
            return {
                ...state,
                coals: {
                    ...state.coals,
                    loading: true
                }
            };
        case 'LOADED_COALS':
            return {
                ...state,
                coals: {
                    data: action.data,
                    loading: false
                }
            };
        case 'LOADED_USER':
            return {
                ...state,
                user: action.user
            };
        case 'OPEN_COAL_FORM':
            return {
                ...state,
                coalForm: action.data
            };
        case 'CLOSE_COAL_FORM':
            return {
                ...state,
                coalForm: undefined
            };
        case 'UPDATE_COAL_FORM': {
            return {
                ...state,
                coalForm: {
                    ...state.coalForm,
                    ...action.data
                }
            }
        }
        default:
            return state;
    }
};
