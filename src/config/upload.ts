import multer from 'multer';
import { join } from 'path';

export default {
  storage: multer.diskStorage({
    destination: join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, done) => {
      const fileName = `${Date.now()}-${file.originalname}`;
      done(null, fileName);
    },
  }),
};
