import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export default createParamDecorator(
  (data, req): User => {
    return req.user;
  },
);
