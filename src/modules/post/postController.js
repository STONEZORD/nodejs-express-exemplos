import { Router } from 'express'
import { verifyAcessToken } from '../../utils/auth'                  // funcao de middleware

const router = Router()

router.post('/', verifyAcessToken, (req, res) => {
  res.send('CREATE POST /')
})

router.get('/:id?', verifyAcessToken, (req, res) => {
  res.send('GET POST /')
})

export default router