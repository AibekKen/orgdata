<template lang="">
  <div>
  <button @click="openModal" class="add-dep">+ Добавить</button>
    <form @submit="addDep" class="add-dep__modal">
      <h2 class="add-dep__title">Добавить отдел</h2>
      <div class="add-dep__city">
        <label class="labelInput" for="inputCity">Город:*</label>
        <input
          v-model="city"
          class="add-dep__input-city input"
          required
          type="text"
          id="inputCity"
        />
      </div>
      <div class="add-dep__center">
        <label class="labelInput" for="inputCenter">Центр:*</label>
        <input
        v-model="center"
          class="add-dep__input-center input"
          type="text"
          required
          id="inputCenter"
        />
      </div>
      <div class="add-dep__dep">
        <label class="labelInput" for="inputDep">Отдел:*</label>
        <input
        v-model="dep"
          class="add-dep__input-dep input"
          required
          type="text"
          id="inputDep"
        />
      </div>
      <div class="add__count general">
        <label class="labelInputNum" for="inputGen">Общее количество*:</label>
        <input
        v-model="genCount"
          class="add-dep__input-gen"
          required
          min="0"
          type="number"
          id="inputGen"
        />
      </div>
      <div class="add__count fact">
        <label class="labelInputNum" required for="inputFact"
          >Фактическое количество:*</label
        >
        <input
        v-model="factCount"
          class="add-dep__input-fact"
          min="0"
          type="number"
          id="inputFact"
        />
      </div>
      <button class="add-dep__submit" type="submit">Добавить</button>
      <button @click="closeModal" class="add-dep__close">Закрыть</button>
    </form>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      city: "",
      center: "",
      dep: "",
      genCount: "",
      factCount: "",
    };
  },
  methods: {
    ...mapMutations(["addDeps"]),
    openModal: () => {
      const modal = document.querySelector(".add-dep__modal");
      modal.classList.add("active");
    },
    closeModal: () => {
      const modal = document.querySelector(".add-dep__modal");
      modal.classList.remove("active");
    },
    addDep: function (e) {
      e.preventDefault();
      class Dep {
        constructor(city, center, dep, official, fact) {
          this.id = Date.now();
          this.city = city;
          this.center = center;
          this.dep = dep;
          this.official = official;
          this.fact = fact;
        }
      }
      const obj = new Dep(
        this.city,
        this.center,
        this.dep,
        this.genCount,
        this.factCount
      );
      this.$store.commit("addDeps", obj);
      this.city = "";
      this.center = "";
      this.dep = "";
      this.genCount = "";
      this.factCount = "";
      this.closeModal();
    },
  },
};
</script>
<style lang="scss">
.add-dep {
  &__modal {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #f9f9f9;
    z-index: 5;
    visibility: hidden;
    opacity: 0;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 0 3px #2d3e50;
    &.active {
      visibility: visible;
      opacity: 1;
    }
  }

  &__title {
    margin: 0 0 10px 0;
  }

  &__city {
    margin: 0 0 5px 0;
  }

  &__input-city {
  }

  &__center {
    margin: 0 0 5px 0;
  }

  &__input-center {
  }

  &__dep {
    margin: 0 0 5px 0;
  }

  &__input-dep {
  }

  &__input-gen {
    width: 50px;
    border: 1px solid #2d3e50;
  }

  &__input-fact {
    width: 50px;
    border: 1px solid #2d3e50;
  }
  &__submit {
    padding: 3px;
    color: #fff;
    background: rgb(13, 4, 80);
    margin: 0 10px 0 0;
    &:hover {
      background: rgb(36, 10, 236);
    }
  }
  &__close {
    padding: 3px;
    background: rgb(147, 147, 149);
  }
}
.input {
  border: 1px solid #2d3e50;
  width: 170px;
  pad: 2px;
}
.add {
  &__count {
  }
}
.general {
  margin: 0 0 5px 0;
}
.fact {
  margin: 0 0 5px 0;
}
.labelInput {
  display: inline-block;
  width: 50px;
}
.labelInputNum {
  display: inline-block;
  width: 170px;
}
</style>