import { sign, verify} from 'jsonwebtoken'  //funcao resp  p gerar o token

const AUTH_SECRET = 'secret'

export const generateAcessToken =(data) => sign(data, AUTH_SECRET)

export const verifyAcessToken = (req, res, next) => {
  try {
const {authirization} = req.cookies
if (!authirization) throw new Error('authorization_not_found')

const user = verify(authirization, AUTH_SECRET)
req.user = user 
next()

  } catch (err) {
    res.status(401).send()
  }
}


