<template>
  <div>
    <div class="card__line">
      <span class="card__title">{{ data.name }}</span>
      <Dropdown
        :data="cardTypes"
        :id="index"
        :activeItem="data.type"
        :onClick="changeCardType"
      />
    </div>
    <ul class="card__fields">
      <li class="card__line" v-for="(field, field_id) in data.fields" :key="field_id">
        <Field :data="field" :id="index" :field_id="field_id" :field_type="data.type" />
      </li>
    </ul>
    <button class="card__add" v-if="data.fieldType" @click="addField({ id: index })">
      + Добавить {{ data.type.toLowerCase() }}
    </button>
    <button class="delete" @click="deleteCard({ id: index })">Удалить условие</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

import Dropdown from "@/components/dropdown";
import Field from "@/components/field";

export default {
  name: "Survey-section",
  props: {
    data: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  components: {
    Dropdown,
    Field,
  },
  computed: {
    ...mapState(["cardTypes"]),
  },
  methods: {
    ...mapActions(["changeCardType", "addField", "deleteCard"]),
  },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 800px;
  background-color: rgb(255, 242, 185);
  border: 1px solid gray;
  border-radius: 5px;
  padding-bottom: 50px;
  margin: 10px 0;
}
.card:first-of-type:before {
  display: none;
}
.card::before {
  content: "И";
  position: absolute;
  top: -25px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: rgb(103, 180, 96);
  border: 1px solid rgb(103, 180, 96);
  background-color: #fff;
  border-radius: 5px;
}
.card__line {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 600px;
  margin: 20px 10px;
}
.card__line > .dropdown {
  width: 500px;
}
.card__title {
  font-weight: bold;
  margin-right: 10px;
  opacity: 0.6;
}
.card__add {
  box-shadow: none;
  outline: none;
  position: absolute;
  background-color: #fff;
  color: rgb(103, 180, 96);
  border: 1px solid rgb(103, 180, 96);
  border-radius: 5px;
  bottom: 10px;
  padding: 10px 5px;
  left: 200px;
}
.card__fields {
  width: 500px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.delete {
  position: absolute;
  background-color: #fff;
  color: #f00;
  border: 1px solid #f00;
  border-radius: 5px;
  bottom: 10px;
  padding: 10px 5px;
  right: 5px;
}
</style>
