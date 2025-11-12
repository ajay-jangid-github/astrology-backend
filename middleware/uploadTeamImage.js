const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");

// Configure Cloudinary storage for images
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "astrology/photos",
    resource_type: "image",
    allowed_formats: ["jpg", "jpeg", "png"],
    public_id: (req, file) => {
      return `photo-${Date.now()}-${file.originalname.split(".")[0]}`;
    },
    quality: "auto",
    fetch_format: "auto",
  },
});

const upload = multer({ storage });

module.exports = upload;