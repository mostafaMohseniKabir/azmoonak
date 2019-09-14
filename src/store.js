// module
import Vue from 'vue'
import Vuex from 'vuex'
// shareDB
import * as db from './helper/function/changeTodo.js'
// helpers
import { findResult } from './helper/function/time'
// R, W
const {
  R,
} = window
const generateId = () => Math.floor(Math.random() * 1e15)

// set vue plugin
Vue.use(Vuex)

// variable declaration
let timer = null

export default new Vuex.Store({
  state: {
    // stuff came from weblite
    title: 'آزمون جامع دین و زندگی',
    userInfo: {},
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

    results: [], // [{ id, name, score }],
    userResult: null,
    activeResult: {},
  },

  mutations: {
    changeWebliteRelatedData(state, {
      title,
      isAdmin
    }) {
      state.title = title || 'آزمون جامع'
      state.isAdmin = isAdmin
    },

    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
        id: generateId,
        question: state.question,
        firstOption: state.firstOption,
        secondOption: state.secondOption,
        thirdOption: state.thirdOption,
        forthOption: state.forthOption,
        answer: state.answer,
        userAnswer: '',
      }
      state.test = R.prepend(newQuestion, state.test)
    },

    changeTest(state, test) {
      state.test = test
    },

    changePage(state, page) {
      state.page = page
      // window.W && window.W.analytics("CHANGE_TAB", {
      //   name: page
      // })
    },

    changeResults(state, results) {
      state.results = results
    },

    changeUserResult(state, userResult) {
      state.userResult = userResult
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

    changeActiveResult(state, activeResult) {
      state.activeResult = activeResult
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
      db.addTest(state.test, state.finalizeTest)
      // window.W && window.W.analytics("ADD_TEST")
    },

    addResult({ state }) {
      db.addResult(state.test, state.userInfo)
      // window.W && window.W.analytics("ADD_RESULT")
    }
  },

  plugins: [
    ({
      commit, state,
    }) => window.W && window.W.share.subscribe(res => {
        // console.log(res)
        commit('changeTest', res[0].test)
        commit('changeFinalizeTest', res[0].finalizeTest)
        commit('changeResults', R.drop(1, res))
    
        window.W && window.W.getUsersInfo([name]).then(info => {
          const userInfo = R.head(R.values(info))
          commit('changeUserInfo', userInfo)
          commit('changeUserResult', findResult(res, state.userInfo)) 
        })

        console.log('what the hell', state.userInfo)
        console.log('res:', res)
        console.log('results:', state.results)
        console.log('userResult:', state.userResult)
      },
    ),
  ],
})