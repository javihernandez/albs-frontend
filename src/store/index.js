import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import { UsersModule } from './modules/users'
import { PlatformsModule } from './modules/platforms'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(createStore({
    modules: {
      users: UsersModule,
      platforms: PlatformsModule
    },

    getters: {
      /* Returns true if user is authenticated, false otherwise. */
      isAuthenticated: state => {
        return state.users.self !== null
      },
      accessToken: state => {
        if (state.users.self === null) {
          return null
        }
        return state.users.self.jwt_token
      }
    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })
)