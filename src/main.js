import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'





export const store = createStore({
  state() {
    return {
      companyEmployers: [
        {
          id: 1,
          city: 'Нур-Cултан',
          center: 'Центр 1',
          dep: 'Управление 1',
          official: 46,
          fact: 14
        },
        {
          id: 2,
          city: 'Нур-Cултан',
          center: 'Центр 1',
          dep: 'Управление 2',
          official: 17,
          fact: 6
        },
        {
          id: 3,
          city: 'Нур-Cултан',
          center: 'Центр 2',
          dep: 'Управление 1',
          official: 48,
          fact: 13
        },
        {
          id: 4,
          city: 'Нур-Cултан',
          center: 'Центр 2',
          dep: 'Управление 2',
          official: 18,
          fact: 5
        },
        {
          id: 5,
          city: 'Алматы',
          center: 'Центр 1',
          dep: 'Управление 1',
          official: 40,
          fact: 25
        },
        {
          id: 6,
          city: 'Алматы',
          center: 'Центр 1',
          dep: 'Управление 2',
          official: 24,
          fact: 13
        },
        {
          id: 7,
          city: 'Алматы',
          center: 'Центр 2',
          dep: 'Управление 1',
          official: 50,
          fact: 15
        },
        {
          id: 8,
          city: 'Алматы',
          center: 'Центр 2',
          dep: 'Управление 2',
          official: 16,
          fact: 7
        },
        {
          id: 9,
          city: 'Атырау',
          center: 'Центр 1',
          dep: 'Управление 1',
          official: 6,
          fact: 4
        },
        {
          id: 10,
          city: 'Атырау',
          center: 'Центр 1',
          dep: 'Управление 2',
          official: 40,
          fact: 8
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
          official: 15,
          fact: 5
        }
      ]
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
              dataTree[j].centers.push({ city: deps[i].city, name: deps[i].center, deps: [] })
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
              if (check()) dataTree[j].centers.push({ city: deps[i].city, name: deps[i].center, deps: [] })
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

      for (let n = 0; n < dataTree.length; n++) {
        dataTree[n].fact = 0;
        dataTree[n].official = 0;
        for (let k = 0; k < deps.length; k++) {
          if (dataTree[n].city === deps[k].city) {
            dataTree[n].fact += deps[k].fact
            dataTree[n].official += deps[k].official
          }
        }
      }

      for (let n = 0; n < dataTree.length; n++) {
        for (let k = 0; k < dataTree[n].centers.length; k++) {
          dataTree[n].centers[k].fact = 0;
          dataTree[n].centers[k].official = 0;
          for (let i = 0; i < deps.length; i++) {
            if (deps[i].city === dataTree[n].city && deps[i].center === dataTree[n].centers[k].name) {
              dataTree[n].centers[k].fact += deps[i].fact;
              dataTree[n].centers[k].official += deps[i].official;
            }
          }
        }

      }
      return dataTree
    }
  },
  mutations: {
    addDeps(state, obj) {
      state.companyEmployers.push(obj)
    },
    removeCity(state, city) {
      state.companyEmployers = state.companyEmployers.filter((deps) => deps.city !== city)
    },
    removeCenter(state, center) {
      state.companyEmployers = state.companyEmployers.filter((deps) => deps.city !== center.city || deps.center !== center.center)
    },
    editCityName(state, changeCityObj) {
      state.companyEmployers.forEach((dep) => {
        if (dep.city === changeCityObj.city) {
          dep.city = changeCityObj.newCity
        }
      })
    },
    editCenterName(state, changeCenter) {
      state.companyEmployers.forEach((dep) => {
        if (dep.city === changeCenter.city && dep.center === changeCenter.center) {
          dep.center = changeCenter.newCenter
        }
      })
    },
    editDep(state, changeDep) {
      state.companyEmployers.forEach((dep) => {
        if (dep.id === changeDep.id) {
          dep.city = changeDep.city;
          dep.center = changeDep.center;
          dep.fact = changeDep.fact;
          dep.official = changeDep.official
        }
      })
    }
  }
})

const app = createApp(App)
app.use(store)
app.mount('#app')

