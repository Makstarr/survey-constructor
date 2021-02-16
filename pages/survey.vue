<template>
  <div>
    <form class="test-survey">
      <div v-for="(card, id) in cards" :key="id">
        <div v-if="card">
          <h2 class="card__title">{{ card.name }}</h2>
          <h3 class="card__title">{{ card.title }}</h3>
          <p v-if="!card.fieldType">Не выбрано условие</p>
          <div v-if="card.fieldType == 'dropdown'">
            <p v-if="!card.fields || card.fields.length < 1">Не выбран параметр</p>
            <div
              class="test-survey__line"
              v-for="(field, index) in card.fields"
              :key="index"
            >
              <input
                v-if="field.activetitle"
                type="radio"
                :name="card.name"
                id=""
                :value="card.name"
              />
              <label v-if="field.activetitle" :for="card.name">{{
                field.activetitle
              }}</label>
            </div>
          </div>
          <div v-if="card.fieldType == 'range'">
            <p v-if="!card.fields || card.fields.length < 1">Не выбран диапазон</p>
            <div
              class="test-survey__line"
              v-for="(field, index) in card.fields"
              :key="index"
            >
              <p v-if="!field.from || !field.to">Не выбран диапазон</p>
              <label v-if="field.from && field.to" :for="card.name">{{
                `От ${field.from} до ${field.to} `
              }}</label>
              <input
                v-if="field.from && field.to"
                type="number"
                :min="field.from"
                :max="field.to"
                :name="card.name"
                id=""
              />
            </div>
          </div>
        </div>
      </div>
    </form>

    <nuxt-link class="big-button" to="/"> Исправить </nuxt-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Survey",
  computed: {
    ...mapState(["cards"]),
  },
};
</script>

<style>
.test-survey {
  margin: 20px 0;
}
.test-survey input {
  width: 40px;
  margin: 0 10px;
}
.test-survey__line {
  margin: 10px 0;
}
</style>
