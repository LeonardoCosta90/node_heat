import { Request, Response } from 'express';
import AuthenticateUserService from '../services/authenticate-user-service';

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const service = new AuthenticateUserService();
    service.execute('');
  }
}

export default AuthenticateUserController;
