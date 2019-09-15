// module
import Vue from 'vue'
import Vuex from 'vuex'
// shareDB
import * as db from './helper/function/changeTodo.js'
// helpers
import { findResult, getExamData } from './helper/function/calculate'
// R, W
const {
  R,
} = window
const generateId = () => Math.floor(Math.random() * 1e15)

// set vue plugin
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // stuff came from weblite
    title: 'آزمون جامع دین و زندگی',
    userInfo: {},
    isAdmin: false,

    // view states
    page: 1, // 1: TEST, 0: RESULT
    dialogIsOpen: false,
    // isDataFetched: false,
    // isComponentLoaded: false,
    finalizeTest: false,

    // test states
    question: '',
    firstOption: '',
    secondOption: '',
    thirdOption: '',
    forthOption: '',
    answer: 'firstOption',

    // main data
    test: [], // [{ id, question, firstOption, ...., forthOption, answer }]
    results: [], // [{ id, name, score }],
    userResult: null,
    activeResult: null,
  },

  mutations: {
    changeWebliteRelatedData(state, {
      title,
      userInfo,
      isAdmin
    }) {
      state.title = title || 'آزمون جامع'
      state.userInfo = userInfo
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
        id: generateId(),
        question: state.question,
        firstOption: state.firstOption,
        secondOption: state.secondOption,
        thirdOption: state.thirdOption,
        forthOption: state.forthOption,
        answer: state.answer,
        userAnswer: '',
      }
      state.test = R.append(newQuestion, state.test)
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
    addTest({ state }) {
      db.addTest(state.test, state.finalizeTest)
      // window.W && window.W.analytics("ADD_TEST")
    },

    addResult({ state }) {
      const examInfo = getExamData(state.test)
  
      db.addResult(state.test, state.userInfo, examInfo)
      // window.W && window.W.analytics("ADD_RESULT")
    }
  },

  plugins: [
    ({
      commit, state,
    }) => window.W && window.W.share.subscribe(res => {
        commit('changeTest', res[0].test)
        commit('changeFinalizeTest', res[0].finalizeTest)
        commit('changeResults', R.drop(1, res))

        commit('changeUserResult', findResult(res, state.userInfo))
      },
    ),
  ],
})