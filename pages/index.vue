<template>
  <div class="container">
    <h1 class="survey-h1">Добавить опрос</h1>
    <div class="survey-cards">
      <div class="card" v-for="(card, index) of cards" :key="index">
        <SurveySection v-if="card" :data="card" :index="index" />
      </div>
    </div>
    <button class="big-button" @click="addCard">
      Нажмите чтобы добавить новое условие выборки
    </button>
    <nuxt-link class="big-button" to="/survey"> Проверить опрос </nuxt-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import SurveySection from "@/components/survey-section";
export default {
  components: {
    SurveySection,
  },
  computed: {
    ...mapState(["cards"]),
  },
  methods: {
    ...mapActions(["addCard"]),
  },
};
</script>

<style>
.big-button {
  margin: 10px 0;
  width: 800px;
  display: block;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
  color: rgb(103, 180, 96);
  border: 1px solid rgb(103, 180, 96);
  border-radius: 5px;
  box-shadow: none;
  outline: none;
  text-decoration: none;
}
.survey-h1 {
  color: gray;
  text-align: left;
  width: 800px;
  font-size: 20px;
  margin: 0;
}
</style>
