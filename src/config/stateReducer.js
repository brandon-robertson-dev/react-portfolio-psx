export default function (state, action) {
  switch(action.type) {
    case "setAttr1": {
      return {
        ...state,
        attr1: action.data
      }
    }
    case "setAttr2": {
      return {
        ...state,
        attr2: action.data
      }
    }
    default: 
      return state
  }
}