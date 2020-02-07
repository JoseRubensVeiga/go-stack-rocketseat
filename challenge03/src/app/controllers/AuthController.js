import bcriptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import User from '../models/User';

class AuthController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({error: 'Validation fails'});
    }

    const { email, password } = req.body;

    // Pesquisa se há um usuário com com o email no banco de dados
    const user = await User.findOne({where: {email}});

    // Caso não tenha nenhum usuário, retorna erro
    if (!user) {
      return res.status(401).json({error: 'Invalid credentials'});
    }

    // Caso a senha não bata com a senha do usuário, retorna erro
    if (!(await bcriptjs.compare(password, user.password_hash))) {
      return res.status(401).json({error: 'Invalid credentials'});
    }

    const { id } = user;
    const { expiresIn } = authConfig;

    // Usuário válido
    const token = await jwt.sign({id}, authConfig.secret, {expiresIn});

    return res.json({
      user: {
        name: user.name,
        email: user.email,
      },
      access_token: token,
      token_type: 'Bearer',
      expires_in: authConfig.expiresIn,
    });
  }
}

export default new AuthController();
