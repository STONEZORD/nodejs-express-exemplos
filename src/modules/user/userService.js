let users = []

const getUserByEmail = (searchEmail) => 
users.find((obj) => obj.email === searchEmail)

export const signup = (data) => {
  if (getUserByEmail(data.email)) 
  throw new Error ('email_existente')                         //throw retorna a funcao tipo um return

  users.push(data)
  return true
}

