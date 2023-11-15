new Vue({
  el: "#app",
  data: {
    firstValueUser: null,
    secondValueUser: null,
    optionUser: null,
    resultOperation: null,
  },
  methods: {
    result() {
      switch (this.optionUser) {
        case "Soma":
          this.resultOperation =
            Number(this.firstValueUser) + Number(this.secondValueUser);
          break;

        case "Multiplicação":
          this.resultOperation =
            Number(this.firstValueUser) * Number(this.secondValueUser);
          break;

        case "Divisão":
          this.resultOperation =
            Number(this.firstValueUser) / Number(this.secondValueUser);
          break;

        case "Subtração":
          this.resultOperation =
            Number(this.firstValueUser) - Number(this.secondValueUser);
          break;

        default:
          this.resultOperation = "Deu ruim";
          break;
      }
    },
  },
});
