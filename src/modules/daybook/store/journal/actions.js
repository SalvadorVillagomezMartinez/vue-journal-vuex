// export const myActions = async ({commit}) =>{

import journalApi from "@/api/journalApi"

// }

export const loadEntries = async ({commit}) =>{
    //Obtemos la data de firebase
    const {data} = await journalApi.get('/entries.json')
    if(! data){
        commit('setEntries', [] )
        return
    }
    const entries = []
    //Generamos array de la data obtenida de firebase
    for (let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries )
}

export const updateEntries = async ({commit},entrie) =>{
    
    const {date ,text , id} = entrie   
    const ObjEntryUpdate = {
        'date':date,
        'text':text,
    }
    await journalApi.put(`/entries/${id}.json`,ObjEntryUpdate)
    commit('updateEntries',{...entrie})
}
export const createEntries = async ({commit},entrie) =>{
    const {date ,text } = entrie   
    const ObjEntryCreate = {date,text} 
    const {data } = await journalApi.post('/entries.json',ObjEntryCreate)
    ObjEntryCreate.id = data.name
    
    commit('addEntries',{...ObjEntryCreate})

    return data.name
    
}
                           
export const deleteEntrie = async ({ commit }, id) => {
     await journalApi.delete(`/entries/${id}.json`)
     commit('deleteEntrie',id)
     return id
    
 
}