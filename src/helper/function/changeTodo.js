// W & R
const { W } = window 
const dispatch = qlite => W.share.dispatch([], qlite, [])

export const addTest = (test, finalizeTest, index = -1 ) =>
  dispatch([
    '__insert',
    [index, { test, finalizeTest }],
  ])

export const addResult = (result, userInfo, examInfo, index = -1) =>
  dispatch([
    '__insert',
    [index, { result, userInfo, examInfo }],
  ])


export const changeText = (id, text) =>
  dispatch([
    '__map',
    [
      [
        '__ifElse',
        [
          ['__propEq', ['id', id]],
          ['__assoc', ['text', text]],
          ['__identity', []],
        ],
      ],
    ],
  ])

export const changeFunctor = (id, name) =>
  dispatch([
    '__map',
    [
      [
        '__ifElse',
        [
          ['__propEq', ['id', id]],
          ['__mergeDeepLeft', [{ functor: name, vit: false }]],
          ['__identity', []],
        ],
      ],
    ],
  ])

export const changeVit = (id, vit) =>
  dispatch([
    '__map',
    [
      [
        '__ifElse',
        [
          ['__propEq', ['id', id]],
          ['__assoc', ['vit', vit]],
          ['__identity', []],
        ],
      ],
    ],
  ])

export const remove = id => dispatch(['__reject', [['__propEq', ['id', id]]]])
