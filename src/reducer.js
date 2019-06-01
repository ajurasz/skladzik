export const initialState = {
    user: undefined,
    coals: {
        loading: false,
        data: []
    }
};

export const reducer = (state, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
};
