import { createStore } from 'vuex'
import journal from '../modules/daybook/store/journal'
import auth from '../modules/auth/store'

// Create a new store instance.
const store = createStore({
    modules:{
       journal,
       auth
        
    }
    
})

export default store