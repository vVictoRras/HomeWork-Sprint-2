const initState = {
    themeId: 1,
}
type InitStateType = typeof initState

export const themeReducer = (state:InitStateType = initState, action: any): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.themeId}// дописать

        default:
            return state
    }
}

export const changeThemeId = (themeId: number) => ({ type: 'SET_THEME_ID', themeId } as const)