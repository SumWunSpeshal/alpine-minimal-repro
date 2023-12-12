document.addEventListener("alpine:init", () => {
  console.log("on alpine init");

  Alpine.data("myModule", (initialParam) => ({
    init() {
      console.log("on component init", initialParam);
    },
  }));
});
