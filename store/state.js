let cards = []

const cardTypes = [{
    title: "Выберите условие",
    type: "",
    fieldType: "",
  },
  {
    title: "Возраст респондента",
    type: "Диапазон",
    fieldType: "range",
  },
  {
    title: "Тип карты лояльности",
    type: "Тип",
    fieldType: "dropdown",
    parameters: [{
      title: "Выберите тип",
      type: ""
    }, {
      title: "Золотая",
      type: "gold"
    }, {
      title: "Голубая",
      type: "blue"
    }]
  },
  {
    title: "Статус карты лояльности",
    type: "Статус",
    fieldType: "dropdown",
    parameters: [{
        title: "Выберите статус",
        type: ""
      },
      {
        title: "Активна",
        type: "active"
      }, {
        title: "Просрочена",
        type: "notactive"
      }
    ]
  },

]
export default {
  cards,
  cardTypes
}
