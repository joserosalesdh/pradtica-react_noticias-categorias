const ADD_CATEGORY ='category/add'
const SELECT_CATEGORY ='category/select'

export const addCategory = payload => ({
    type: ADD_CATEGORY,
    payload:{
        ...payload, 
        id: Math.random().toString(36) // Me devuelve strign completamente distintos, de esta manera me aseguro que mi id va a ser unico cuando este ejecutando mi aplicación 
    }
})

const initialState = {
    data: [{id: 1, name: 'Defecto'}],
    selected: 1
}

export const selectCategory = payload => ({
    type: SELECT_CATEGORY,
    payload
})

export default function reducer (state = initialState, action){
    switch (action.type) {
        case ADD_CATEGORY:
            return{
                ...state,
                data: [...state.data, action.payload] // Esto lo que hace es crear una copia del arreglo, pero le va a agregar lo que venga dentro de payload
            }
            case SELECT_CATEGORY:
            return{
                ...state,
                selected: action.payload // selected indica cual es la categoria seleccionada 
            }
        default:
            return state
    }
}
