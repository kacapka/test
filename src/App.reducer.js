import { ActionTypes } from './App.actions';

const initialState = {
    isLoaded: false,
    users: [],
    filterByName: false
};

const normalize = (data) => {
    const companies = [];
    const users = data.map(user => {
        if (!companies.some(el => el.id === user.company.id)) {
            const companyObj = Object.assign({}, user.company);
            delete companyObj.suppliers;
            companies.push(companyObj)
        }
        return {
            ...user,
            company: {
                id: user.company.id,
                suppliers: user.company.suppliers.map(supplier => {
                    return {
                        id: supplier.id
                    }
                })
            }
        }
    });

    return { companies, users }

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.fetchUsersCompleted: {
            const normalizedData = normalize(action.payload.users);
            console.log(normalizedData);
            return {
                ...state,
                users: action.payload.users,
                isLoaded: true
            }
        }
        case ActionTypes.setFilterByName: {
            const filterByName = state.filterByName;
            return {
                ...state,
                filterByName: !filterByName
            }
        }
        default: {
            return state;
        }
    }
};

export default rootReducer;