import { Router } from 'express'

import { signup, login } from './userService'

const AUTH_COOKIE_NAME = 'authorization'

const router = Router()
router.post('/signup', (req, res) => {
  try {                                                             //passa para dentro do try td q pode dar erro
    const token = signup(req.body)
    res.cookie('AUTH_COOKIE_NAME', token).status(201).send()        //a funcao que cria o cookie

  } catch (err) {                                                   //se der erro no try entra no catch
    if (err.message === 'email_existente')
      return res.status(400).send(err.message)
    res.status(500).send(err.message)
  }
})


router.post('/login', (req, res) => {
  try {
    const token = login(req.body)
    res.cookie('AUTH_COOKIE_NAME', token).status(200).send()
  } catch (err) {
    if (err.message === 'email_nao_encontrado' || err.message === 'senha_incorreta')
      return res.status(400).send(err.message)
    res.status(500).send()

  }
})

router.get('/test', (req, res) => {
  res.send('USER TEST 2 /')
})

export default router