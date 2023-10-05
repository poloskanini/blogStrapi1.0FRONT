import image1 from '../public/assets/images/carousel1.jpeg'
import image2 from '../public/assets/images/carousel2.jpeg'
import image3 from '../public/assets/images/carousel3.jpeg'
import image4 from '../public/assets/images/carousel4.jpeg'
export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
