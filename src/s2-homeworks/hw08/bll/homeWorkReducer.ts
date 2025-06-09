// homeWorkReducer.ts
import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            // Создаем новый массив перед сортировкой
            const newState = [...state];
            if (action.payload === 'up') {
                newState.sort((a, b) => a.name.localeCompare(b.name));
            } else {
                newState.sort((a, b) => b.name.localeCompare(a.name));
            }
            return newState;
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload);
        }
        default:
            return state;
    }
}