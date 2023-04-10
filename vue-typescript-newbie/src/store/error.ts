import { defineStore, StateTree } from "pinia";
import { reactive } from "vue";

interface IValidationError {
  title: string;
  content: string;
}

export const useErrorStore = defineStore("error", () => {
  const validations = reactive<IValidationError>({ title: "", content: "" });

  function setValidationError(state: StateTree, error: string) {
    state.validations = error;
  }

  return { validations, setValidationError };
});
