import state from './state';
import * as actions from './actions';
import * as getters from './getters';
import * as mutuations from './mutuations';

const journalModule={
    namespaced: true,
    actions,
    getters,
    mutuations,
    state
    
}
export default journalModule
