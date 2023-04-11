import { defineStore } from "pinia";
import { ref } from "vue";

interface IValidationError {
  title?: string;
  content?: string;
}

export const useErrorStore = defineStore("error", () => {
  const validations = ref<IValidationError>({});

  function setValidationError(error: IValidationError) {
    validations.value = error;
  }

  function $reset() {
    validations.value = {};
  }

  return { validations, setValidationError, $reset };
});
