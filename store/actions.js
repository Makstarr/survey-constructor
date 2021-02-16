const changeCardType = ({
  commit,
  state
}, payload) => {
  commit("changeCardType", payload)
}
const ADD_FIELD = ({
  commit,
  state
}, payload) => {
  console.log(payload.id)
  commit("ADD_FIELD", {
    id: payload.id
  })
}
const changeCardFieldActive = ({
  commit,
  state
}, payload) => {
  console.log(payload)
  commit("CHANGE_CARD_FIELD_ACTIVE", payload)
}
const updateFieldRange = ({
  commit,
  state
}, payload) => {
  commit("UPDATE_CARD_FIELD_RANGE", payload)
}
const addCard = ({
  commit,
  state
}, payload) => {
  commit("ADD_CARD", payload)
}
const deleteCard = ({
  commit,
  state
}, payload) => {
  commit("DELETE_CARD", payload)
}


export default {
  changeCardType,
  ADD_FIELD,
  changeCardFieldActive,
  updateFieldRange,
  addCard,
  deleteCard
}
