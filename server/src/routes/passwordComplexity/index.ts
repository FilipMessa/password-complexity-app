import express from 'express';
import zxcvbn from 'zxcvbn';
import passwordStrength from 'password-strength';
import { BadRequest } from '../../modules/errors';
const router = express.Router();

function getPasswordStrengthText(score: number) {
  switch (score) {
    case 0:
      return 'Worst';
    case 1:
      return 'Bad';
    case 2:
      return 'Weak';
    case 3:
      return 'Good';
    default:
      return 'Strong';
  }
}

function createResponse(score: number) {
  return {
    score,
    strength: getPasswordStrengthText(score),
    statusCode: 200,
  };
}

const BadRequestError = new BadRequest('password missing in POST body');

router.post('/v1', (req, res, next) => {
  if (req.body.password) {
    const { score } = zxcvbn(req.body.password);

    res.json(createResponse(score));
  } else {
    next(BadRequestError);
  }
});

router.post('/v2', (req, res, next) => {
  if (req.body.password) {
    const score = passwordStrength(req.body.password);
    res.json(createResponse(score));
  } else {
    next(BadRequestError);
  }
});

export default router;
