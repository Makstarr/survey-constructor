const CHANGE_CARD_TYPE = (state, payload) => {
  state.cards[payload.id].fields = []
  state.cards[payload.id].type = payload.type
  state.cards[payload.id].fieldType = payload.fieldType
  state.cards[payload.id].title = payload.title

}
const ADD_FIELD = (state, payload) => {
  let card = state.cards[payload.id]
  let cardType = card.type
  if (card.fieldType == "dropdown") {
    state.cards[payload.id].fields = [...state.cards[payload.id].fields, {
      active: "",
      activetitle: "",
      parameters: state.cardTypes.find(item => item.type == cardType).parameters
    }]
  } else if (card.fieldType == "range") {
    state.cards[payload.id].fields = [...card.fields, {
      from: "",
      to: ""
    }]
  }
}
const CHANGE_CARD_FIELD_ACTIVE = (state, payload) => {
  state.cards[payload.id].fields[payload.field_id].active = payload.type
  state.cards[payload.id].fields[payload.field_id].activetitle = payload.title
}
const UPDATE_CARD_FIELD_RANGE = (state, payload) => {
  if (payload.from) {
    state.cards[payload.id].fields[payload.field_id].from = payload.from
  } else if (payload.to) {
    state.cards[payload.id].fields[payload.field_id].to = payload.to
  }
}
const ADD_CARD = (state, payload) => {
  const name = `Условие ${state.cards.length+1} `
  const fields = []
  state.cards = [...state.cards, {
    name,
    fields
  }]
}
const DELETE_CARD = (state, payload) => {
  let cards = state.cards
  delete cards[payload.id]
  state.cards = [...cards]
}
export default {
  CHANGE_CARD_TYPE,
  ADD_FIELD,
  CHANGE_CARD_FIELD_ACTIVE,
  UPDATE_CARD_FIELD_RANGE,
  ADD_CARD,
  DELETE_CARD
}
