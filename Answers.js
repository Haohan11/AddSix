export default [

    array => {
      array[array.length] = 6
      return array
    },
  
    array => {
      return [...array, 6] 
    },
  
    array => {
      return array.concat([6])
    },
  
    array => {
      array.push.apply(array, [6])
      return array
    },
  
    array => {
      array.push.call(array, 6)
      return array
    },
  
    array => {
      return Array(array, 6).flat()
    },
  
    array => {
      return Array.of(array, 6).flat()
    },
  
    array => {
      array.splice(array.length, 0, 6)
      return array
    }
]