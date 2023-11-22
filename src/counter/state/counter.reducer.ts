import { createReducer, on, reduceState } from "@ngrx/store";
import { CounterInterface } from "./counter-interface";
import { customCounterAction, decrementAction, incrementAction, resetAction, updateChannelAction } from "./counter.action";

let initialState: CounterInterface = {
  count: 0,
  channelName: 'HelloWorld Redux'
}


//createReducer(initialState, on(incrementAction,(state)=>{ return{...state, count:state.count+1}}))

export const counterReducer = createReducer(initialState,

  on(incrementAction, (state, action) => {
    return {
      ...state,
      count: state.count + 1
    }
  }),
  on(decrementAction, (state, action) => {
    return {
      ...state,
      count: state.count - 1
    }
  }),
  on(resetAction, (state, action) => {
    return {
      ...state,
      count: 0
    }
  }),
  on(customCounterAction, (state, action) => {
    return {
      ...state,
      count: state.count + Number(action.val)
    }
  }),
  on(updateChannelAction, (state, action) => {
    return {
      ...state,
      channelName: action.someValue

    }
  })

)