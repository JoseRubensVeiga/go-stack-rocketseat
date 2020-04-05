import multer from 'multer';
import crypto from 'crypto';
import { resolve, extname } from 'path';
import { promisify } from 'util';


export default {
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    async filename(req, file, cb) {
      const fileExtension = extname(file.originalname);
      const randomBytesAsync = promisify(crypto.randomBytes);
      const randomBytes = await randomBytesAsync(16);
      const randomString = randomBytes.toString('hex');

      const fileName = `${Date.now()}-${randomString}${fileExtension}`;

      cb(null, fileName);
    },
  }),
};
