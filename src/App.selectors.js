import { createSelector } from 'reselect';

export const getIsLoaded = state => state.isLoaded;
export const getUsers = state => state.users;
export const getFilterByName = state => state.filterByName;

export const getSortedUsers = createSelector(
    [getUsers, getFilterByName],
    (users, filterByName) => {
        if (!filterByName) return users;

        return [...users].sort((a, b) => {
            if (a.firstName < b.firstName) { return -1; }
            if (a.firstName > b.firstName) { return 1; }
            return 0;
        });
    }
)