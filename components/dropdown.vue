<template>
  <div class="dropdown">
    <ul class="dropdown__list">
      <li
        :class="['dropdown__item', classHandler(index)]"
        v-for="(item, index) in data"
        :key="index"
        @click="clickHandler(item, index, id, field_id)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      selectedItem: 0,
    };
  },
  props: {
    data: {
      type: Array,
    },
    id: {
      type: Number,
    },
    activeItem: {
      type: String,
    },
    onClick: {
      type: Function,
    },
    field_id: {
      type: Number,
    },
    field_type: {
      type: String,
    },
  },
  methods: {
    classHandler(id) {
      return id === this.selectedItem ? "active" : "";
    },

    clickHandler(item, index, id, field_id) {
      this.selectedItem = index;
      this.onClick({
        title: item.title,
        type: item.type,
        fieldType: item.fieldType,
        id: id,
        field_id: field_id,
      });
    },
  },
};
</script>

<style lang="css">
.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 40px;
  margin: 0;
  padding: 0;
  z-index: 0;
}
.dropdown__list {
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0 10px;
  width: 100%;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 5px;
}
.dropdown__item {
  color: #888;
  cursor: pointer;
  display: none;
  margin: 10px 0;
  border-radius: 5px;
}
.dropdown:hover .dropdown__list {
  height: unset;
}
.dropdown:hover {
  z-index: 10;
}
.dropdown__item:hover {
  opacity: 1;
  color: #151515;
}
.dropdown__item.active {
  color: #000;
  order: -1;
  display: block;
}

.dropdown:hover .dropdown__item {
  display: block;
}
</style>
