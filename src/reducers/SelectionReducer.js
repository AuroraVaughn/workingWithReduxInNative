

export default function (state = null, action) {
  switch (action.type) {
    case 'SET_SELECTED':
      return action.selected
    default: return null
  }
}
