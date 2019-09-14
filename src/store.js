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
    userInfo: {
      firstname: "مصطفی",
      id: "5c30dc0cdf7c064bfdf85f7d",
      lastname: "محسنی کبیر",
      profileImage: "download-1.jpg-@-0125fd72-4a56-4391-8281-f5957a3d94b0.jpg",
      username: "mostafa_m_k"
    },
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
        userInfo: {
          firstname: "مصطفی",
          id: "5c30dc0cdf7c064bfdf85f7d",
          lastname: "محسنی کبیر",
          profileImage: "download-1.jpg-@-0125fd72-4a56-4391-8281-f5957a3d94b0.jpg",
          username: "mostafa_m_k"
        },
        score: '100%',
      },
      {
        id: 2,
        userInfo: {
          firstname: "علی",
          id: "5c30dc0cdf7c064bfdf85f4d",
          lastname: "عسگری",
          profileImage: "download-1.jpg-@-0125fd72-4a56-4391-8281-f5957a3d94b0.jpg",
          username: "ali"
        },
        score: '50%',
      },
      {
        id: 3,
        userInfo: {
          firstname: "علیرضا",
          id: "5c30dc0cdf7c064bfdf85f8d",
          lastname: "محسنی کبیر",
          profileImage: "download-1.jpg-@-0125fd72-4a56-4391-8281-f5957a3d94b0.jpg",
          username: "ُSSuNAm1"
        },
        score: '33%',
      },
      {
        id: 4,
        userInfo: {
          firstname: "کایند",
          id: "5c30dc0cdf7c064bfdf85f8d",
          lastname: "محسنی کبیر",
          profileImage: "download-1.jpg-@-0125fd72-4a56-4391-8281-f5957a3d94b0.jpg",
          username: "kind"
        },
        score: '12%',
      },
    ], // [{ id, name, score }],
    userResult: null,
    activeResult: {},
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
        commit('changeUserResult', findResult(res, state.userInfo))
      },
    ),
  ],
})