export const updateListItems = (lists, current, cb) => {
    return lists.map(list => {
        if (list.id === current) {
            return {
                ...list,
                tasks: cb(list.tasks)
            }
        }
        return list
    })
};

export const updateCurrentList = (state, cb) => ({
    ...state,
    lists: updateListItems(state.lists, state.currentListId, cb)
});