const reducer=(globalState, action)=>{
switch(action.type){
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