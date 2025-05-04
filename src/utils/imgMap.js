// src/utils/imageMap.js
const imageFiles = import.meta.glob('../assets/**/*.{svg,png,jpg,jpeg}', { eager: true });

const imageMap = {};

for (const path in imageFiles) {
  const cleanPath = path.replace('../assets/', '');
  imageMap[cleanPath] = imageFiles[path].default;
}

export default imageMap;
