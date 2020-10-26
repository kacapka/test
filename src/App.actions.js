export const ActionTypes = {
    fetchUsers: 'APP_fetchUsers',
    fetchUsersCompleted: 'APP_fetchUsersCompleted',
    fetchUsersError: 'APP_fetchUsersError',
    setFilterByName: 'APP_setFilterByName',
};

export const fetchUsers = () => {
    return {
        type: ActionTypes.fetchUsers
    }
}

export const setFilterByName = () => {
    return {
        type: ActionTypes.setFilterByName
    }
}