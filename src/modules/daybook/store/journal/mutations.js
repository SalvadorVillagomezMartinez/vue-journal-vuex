// export const myActions = (state) =>{
    
// }


export const setEntries = ( state, entries ) => {
    //Acceso al state
    //Modifica el state

    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false
}
export const updateEntries = (state, entrie) =>{
    const idx = state.entries.map( e => e.id ).indexOf( entrie.id )
    state.entries[idx] = entrie 
    
    
}
export const addEntries = (state, entrie) =>{
    state.entries = [ entrie, ...state.entries  ]
    
}
export const deleteEntrie = (state,id) =>{
    state.entries = state.entries.filter( entry => entry.id !== id )
}

export const clearEntries = ( state ) => {
    state.entries = []
}