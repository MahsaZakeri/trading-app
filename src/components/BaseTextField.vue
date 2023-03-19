<template>
  <input
    :value="inputValue"
    @input="emitUpdatedModelValueForVModel"
    class="textField"
    :placeholder="placeholder"
    required
    type="text"
    maxlength="12"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputEvent from "../types/inputEvent";

export default defineComponent({
  name: "TheMain",
  props: {
    inputValue: { type: String, required: true },
    placeholder: { type: String },
  },
  emits: ["update:modelValue"],
  data() {
    return {};
  },
  methods: {
    emitUpdatedModelValueForVModel(e: InputEvent) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
});
</script>

<style lang="scss">
.textField {
  width: 100%;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid var(--color-foreground1);
  background: transparent;
  font-family: inherit;
  font-size: 1.8rem;
  color: var(--color-text-secondary);

  &:focus {
    outline: none;
    border-color: var(--color-foreground2);
    color: var(--color-text-primary);
  }
  &:invalid {
    color: var(--color-primary-red1);
  }
}
</style>
