const reducer=(globalState, action)=>{
switch(action.type){
    case"OBTENER_ROPA":
       return{
           ...globalState,
           clothes: action.payload
       }
    case "AGREGAR_PRENDA":
        return {
            ...globalState,
            clothes:[
                ...globalState.clothes,
                action.payload
            ]
        }
    default:
        return globalState  
}
}

export default reducer