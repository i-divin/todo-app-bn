import dotenv from 'dotenv';

dotenv.config();

export default{
  port: process.env.PORT || 5000,
  mongodbUri: process.env.MONGODB_URI,
  jwtsecretkey: process.env.JWT_SECRET,
  jwtexpiration: process.env.JWT_EXPIRE || '7d'
}

