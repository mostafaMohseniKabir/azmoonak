// module
import Vue from 'vue'
import Vuex from 'vuex'
// shareDB
import * as db from './helper/function/changeTodo.js'
// R, W
const {
  R,
} = window

// set vue plugin
Vue.use(Vuex)

// variable declaration
let timer = null

export default new Vuex.Store({
  state: {
    // stuff came from weblite
    title: 'آزمون جامع دین و زندگی',
    username: 'mostafa_m_k',
    isAdmin: true,

    // view states
    page: 1, // 1: TEST, 0: RESULT
    dialogIsOpen: false,
    isDataFetched: false,
    isComponentLoaded: false,
    finalizeTest: false,

    // test states
    question: '',
    firstOption: '',
    secondOption: '',
    thirdOption: '',
    forthOption: '',
    answer: 'گزینه اول',

    // main data
    test: [], // [{ id, question, firstOption, ...., forthOption, answer }]

    results: [
      {
        id: 1,
        name: "مصطفی محسنی کبیر",
        score: '100%',
      },
      {
        id: 2,
        name: "علی عسگری",
        score: '50%',
      },
    ], // [{ id, name, score }],
  },

  mutations: {
    changeWebliteRelatedData(state, {
      title,
      username,
      isAdmin
    }) {
      state.title = title || 'TODOLITE'
      state.username = username
      state.isAdmin = isAdmin
    },

    changeTitle(state, title) {
      state.title = title
    },

    changeQuestion(state, question) {
      state.question = question
    },

    changeFirstOption(state, firstOption) {
      state.firstOption = firstOption
    },

    changeSecondOption(state, secondOption) {
      state.secondOption = secondOption
    },

    changeThirdOption(state, thirdOption) {
      state.thirdOption = thirdOption
    },

    changeForthOption(state, forthOption) {
      state.forthOption = forthOption
    },

    changeAnswer(state, answer) {
      state.answer = answer
    },

    addQuestion(state) {
      const newQuestion = {
        id: state.test.length,
        question: state.question,
        firstOption: state.firstOption,
        secondOption: state.secondOption,
        thirdOption: state.thirdOption,
        forthOption: state.forthOption,
        answer: state.answer,
      }
      state.test = R.prepend(newQuestion, state.test)
    },

    addTest(state, test) {
      state.test = test
    },

    changePage(state, page) {
      state.page = page
      window.W && window.W.analytics("CHANGE_TAB", {
        name: page
      })
    },

    changeResults(state, results) {
      state.results = results
    },

    changeCurrentAction(state, action) {
      state.currentAction = action
    },

    changeDialogIsOpen(state, dialogIsOpen) {
      state.dialogIsOpen = dialogIsOpen
    },

    changeFinalizeTest(state, finalizeTest) {
      state.finalizeTest = finalizeTest
    },

    changeIsDataFetched(state, isDataFetched) {
      state.isDataFetched = isDataFetched
    },

    changeIsComponentLoaded(state, isComponentLoaded) {
      state.isComponentLoaded = isComponentLoaded
    },
  },

  actions: { 
    changeCurrentAction({
      commit
    }, value) {
      if (timer) clearTimeout(timer)
      commit('changeCurrentAction', value)
      timer = setTimeout(() => commit('changeCurrentAction', ''), 0)
    },

    addTest({ state }) {
      db.add(state.test, state.finalizeTest)
      window.W && window.W.analytics("ADD_TEST")
    },
  },

  plugins: [
    ({
      commit
    }) => window.W && window.W.share.subscribe(res => {
      commit('addTest', res[0].test)
      commit('changeFinalizeTest', res[0].finalizeTest)
    }
    ),
  ],
})