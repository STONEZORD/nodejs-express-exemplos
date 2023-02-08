import { sign } from 'jsonwebtoken'                          //funcao resp  p gerar o token

let users = []

const generateAcessToken =(data) => sign(data, 'secret')

const getUserByEmail = (searchEmail) => 
users.find((obj) => obj.email === searchEmail)

export const signup = (data) => {
  if (getUserByEmail(data.email)) 
  throw new Error ('email_existente')                         //throw retorna a funcao tipo um return

  users.push(data)

  return generateAcessToken({email: data.email})
}

export const login  = (data) => {
  const user = getUserByEmail(data.email)
  if (!user) throw new Error('email_nao_encontrado')

  if (user.password !== data.password) throw new Error('senha_incorreta')

  return
}