import { Cormorant_Garamond, Playfair_Display } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['light','regular', 'italic', 'medium', 'semibold', 'bold'],
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['regular', 'italic', 'medium', 'semibold', 'bold', 'extrabold', 'black' ],
  subsets: ['latin'],
  display: 'swap',
})