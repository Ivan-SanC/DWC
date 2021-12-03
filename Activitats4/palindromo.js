function palindromeChecker(str) {
    const newStr = str.replace(/[" "]/g, "").toLowerCase()
    const strReversed = newStr.split("").reverse().join("")
  
    return newStr === strReversed ? "es palindromo" : "no es palindromo"
  }
  
  console.log(palindromeChecker("Ali tomo tila")) // es palindromo
  console.log(palindromeChecker("Amad a la dama")) // es palindromo
  console.log(palindromeChecker("otra cosa")) // no es palindromo