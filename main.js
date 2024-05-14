function solution(str, ending){
    for (let i = 0; i < ending.length; i++){
      if (str[str.length - i - 1] != ending[ending.length - i - 1])
        {
          return false
        }
    }
    return true
  }