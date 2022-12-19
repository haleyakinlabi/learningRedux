//redux core concepts 


//import redux
const redux = require('redux')

//reducerFunction
//2 params Old State + Dispatched Action 
//must return new state object
//should be a pure function (inputs should have the same outputs)
const counterReducer = (state = {couner: 0}, action) => {

    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        } 
    }
    return state 
}

//store
const store = redux.createStore(counterReducer)

//subscription
const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscriber)

//action
store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})


