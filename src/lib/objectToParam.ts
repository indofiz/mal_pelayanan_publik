export const objectToParam = (data = {}) => {
  let newArr: string[] = []

  if (Object.keys(data).length) {
    for (const [key, value] of Object.entries(data)) {
      if (key == 'skip') {
        newArr = [...newArr, `${key}=${value}`]
      } else {
        if (value) {
          newArr = [...newArr, `${key}=${value}`]
        }
      }
    }
  }

  return newArr.join('&').toString()
}
