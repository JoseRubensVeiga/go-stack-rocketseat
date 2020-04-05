import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';
import User from '../models/User';

export default async (req, res, next) => {

  const authorization = req.headers.authorization;

  // Caso não tenha o header authorization
  if (!authorization) {
    return res.status(401).json({
      error: 'Not Allowed.'
    });
  }

  const [token_type, access_token] = authorization.split(' ');

  // caso o tipo do authorization não for Bearer
  if(token_type !== 'Bearer') {
    return res.status(400).json({
      error: 'Token type not allowed'
    });
  }

  try {
    const result = await jwt.verify(access_token, authConfig.secret);

    req.userId = result.id;

    return next();

  }catch(e) {
    // Caso o token não for válido
    return res.status(401).json({
      error: 'Access Token invalid'
    });
  }
}