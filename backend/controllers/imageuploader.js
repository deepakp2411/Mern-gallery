import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.fieldname}`);
  },
});

const upload = multer({ storage: storage });

export default upload
