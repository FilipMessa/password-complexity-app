import express from 'express';
import zxcvbn from 'zxcvbn';
import { BadRequest } from '../../modules/errors';
const router = express.Router();

router.post('/zxcvbn', (req, res, next) => {
  if (req.body.password) {
    res.send(zxcvbn(req.body.password));
  } else {
    const err = new BadRequest('password missing in POST body');
    next(err);
  }
});

export default router;
