<template>
  <div class="card__fields-item">
    <span class="card__logic" v-if="field_type == 'Диапазон' && field_id > 0">Или</span>
    <span class="card__title">{{ `${field_type} ${field_id + 1}` }}</span>
    <Dropdown
      v-if="data.parameters"
      :data="data.parameters"
      :onClick="changeCardFieldActive"
      :id="id"
      :field_id="field_id"
      :field_type="field_type"
    />
    <div class="card__range" v-else>
      <span class="card__title"> от </span>
      <input :value="data.from" @keyup="changeFrom" />
      <span class="card__title"> до </span> <input :value="data.to" @keyup="changeTo" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Dropdown from "@/components/dropdown";
export default {
  name: "Field",

  props: {
    data: {
      type: Object,
    },
    id: {
      type: Number,
    },
    field_id: {
      type: Number,
    },
    field_type: {
      type: String,
    },
  },
  components: {
    Dropdown,
  },
  methods: {
    ...mapActions(["changeCardFieldActive", "updateFieldRange"]),
    changeFrom(event) {
      console.log("to");
      this.updateFieldRange({
        from: event.target.value,
        id: this.id,
        field_id: this.field_id,
      });
    },
    changeTo(event) {
      console.log("from");
      this.updateFieldRange({
        to: event.target.value,
        id: this.id,
        field_id: this.field_id,
      });
    },
  },
};
</script>

<style>
.card__fields-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
}
.card__fields-item > .dropdown {
  width: 200px;
}
.card__logic {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  opacity: 0.7;
  margin: 0 5px 0 0;
  background-color: #fff;
  border-radius: 5px;
}
.card__range {
  margin-left: 10px;
}
.card__range input {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid gray;
  margin-right: 10px;
  padding: 10px;
}
</style>
