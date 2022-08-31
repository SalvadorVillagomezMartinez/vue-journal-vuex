//  export const myGetter =  (state) =>{
//     return state
//  }


 export const currentState =  (state) =>{
    
    console.log(state.status)
    return state.status
 }
 export const username = ( state ) => {
   return state.user?.name || ''
}