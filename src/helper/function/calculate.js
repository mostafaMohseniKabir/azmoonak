const {
  R
} = window


export const findResult = (res, userInfo) => {
  const usersInfo = R.map(item => item.userInfo)(R.drop(1, res))
  const index = R.findIndex(R.propEq('username', userInfo.username))(usersInfo)
  

  return res[index === -1 ? -1 : index + 1]
}

export const correctsNumber = result => R.length(R.filter(item => item.userAnswer === item.answer , result))

export const emptiesNumber = result => R.length(R.filter(item => item.userAnswer === '' , result))


export const getExamData = (result) => {
  const corrects = correctsNumber(result)
  const empties = emptiesNumber(result)
  const total = R.length(result)
  const wrongs = total - corrects - empties
  const percentage = ( ( (3 * corrects - wrongs) / (3 * total) ) * 100 ).toFixed(0)

  return ({
    percentage,
    corrects,
    empties,
    wrongs,
  })
}