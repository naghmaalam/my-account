import { ref, onMounted, Ref } from "vue";

export function useTest(): {
  testVar: Ref<string>;
} {
  const testVar = ref("testing 123");

  onMounted(() => {
    console.log("TESTING ONMOUNTED!!! FFFFFFFFFFFFFFFFFFFFF");
  });

  return {
    testVar,
  };
}
