import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

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

let companyEmployers = [
  {
    id: 1,
    city: 'Нурсултан',
    center: 'Центр 1',
    dep: 'Управление 1',
    official: 10,
    fact: 3
  },
  {
    id: 2,
    city: 'Нурсултан',
    center: 'Центр 1',
    dep: 'Управление 2',
    official: 10,
    fact: 3
  },
  {
    id: 3,
    city: 'Нурсултан',
    center: 'Центр 2',
    dep: 'Управление 1',
    official: 10,
    fact: 3
  },
  {
    id: 4,
    city: 'Нурсултан',
    center: 'Центр 2',
    dep: 'Управление 2',
    official: 10,
    fact: 3
  },
  {
    id: 5,
    city: 'Алматы',
    center: 'Центр 1',
    dep: 'Управление 1',
    official: 10,
    fact: 3
  },
  {
    id: 6,
    city: 'Алматы',
    center: 'Центр 1',
    dep: 'Управление 2',
    official: 10,
    fact: 3
  },
  {
    id: 7,
    city: 'Алматы',
    center: 'Центр 2',
    dep: 'Управление 1',
    official: 10,
    fact: 3
  },
  {
    id: 8,
    city: 'Алматы',
    center: 'Центр 2',
    dep: 'Управление 2',
    official: 10,
    fact: 3
  },
  {
    id: 9,
    city: 'Атырау',
    center: 'Центр 1',
    dep: 'Управление 1',
    official: 10,
    fact: 3
  },
  {
    id: 10,
    city: 'Атырау',
    center: 'Центр 1',
    dep: 'Управление 2',
    official: 10,
    fact: 3
  },
  {
    id: 11,
    city: 'Атырау',
    center: 'Центр 2',
    dep: 'Управление 1',
    official: 10,
    fact: 3
  },
  {
    id: 12,
    city: 'Атырау',
    center: 'Центр 2',
    dep: 'Управление 2',
    official: 10,
    fact: 3
  }
]

const store = createStore({
  state() {
    return {
      companyEmployers: companyEmployers
    }
  },
  getters: {
    getDataTree(state) {
      let dataTree = [];
      let deps = state.companyEmployers;
      let cities = Array.from(new Set(state.companyEmployers.map((el) => el.city)));
      cities.forEach((city) => dataTree.push({ city, centers: [] }));

      for (let i = 0; i < deps.length; i++) {
        for (let j = 0; j < dataTree.length; j++) {
          if (deps[i].city === dataTree[j].city) {
            if (dataTree[j].centers.length === 0) {
              dataTree[j].centers.push({ name: deps[i].center, deps: [] })
            }
            else {
              let check = () => {
                for (let k = 0; k < dataTree[j].centers.length; k++) {
                  if (dataTree[j].centers[k].name === deps[i].center) {
                    return false
                  }
                }
                return true
              }
              if (check()) dataTree[j].centers.push({ name: deps[i].center, deps: [] })
            }
          }
        }


      }
      for (let j = 0; j < deps.length; j++) {
        for (let i = 0; i < dataTree.length; i++) {
          if (dataTree[i].city === deps[j].city) {
            for (let k = 0; k < dataTree[i].centers.length; k++) {
              if (dataTree[i].centers[k].name == deps[j].center) {
                dataTree[i].centers[k].deps.push({
                  name: deps[j].dep,
                  id: deps[j].id,
                  official: deps[j].official,
                  fact: deps[j].fact
                });
              }
            }
          }
        }
      }



      return dataTree
    }
  },
  mutations: {
    addDep(state, obj) {
      state.companyEmployers.push(obj)
    }
  }
})

const app = createApp(App)
app.use(store)
app.mount('#app')
store.commit('addDep', new Dep("Караганда", 'Центр 1', "Управление 2", 10, 5))
console.log(store.state.companyEmployers)
console.log(store.getDataTree())
