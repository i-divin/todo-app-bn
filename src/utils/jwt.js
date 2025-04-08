import jwt from 'jsonwebtoken';
import config from '../config/env.js';
	
// Generate JWT token
export const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    config.jwtsecretkey,
    { expiresIn: config.jwtexpiration }
  );
};

// Verify JWT token
export const verifyToken = (token) => {

  try {
    const decoded = jwt.verify(token, config.jwtsecretkey);
    return { valid: true, expired: false, decoded };
  } catch (error) {
    console.log("error", error)
			return {
      valid: false,
      expired: error.name === 'TokenExpiredError',
      decoded: null
    };
  }
};
