import { useEffect } from 'react'
import styles from '../styles/Timeline.module.css'
import Image from 'next/image'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
]
const timeline = [
  {
    name: 'Création du cabinet',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Janvier 2017',
    dateTime: '2017-01',
  },
  {
    name: 'Partenariat',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: 'Extension',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Fev 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Émancipation',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2023-03',
  },
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" id='path'
          />
        </svg>
      ),
    },
  ],
}

export default function TimeLine() {

  useEffect(() => {

    // TIMELINE ANIMATION SVG
    let path = document.querySelector('#svg-path');
    let pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + ' ' + pathLength;

    path.style.strokeDashoffset = pathLength;

    window.addEventListener('scroll', () => {

      // What % down is it ?
      let scrollPercentage = ((document.documentElement.scrollTop) + document.body.scrollTop) / (document.documentElement.scrollHeight - (document.documentElement.clientHeight));

      // Length to offset the dashes
      let drawLength = pathLength * (scrollPercentage)

      // Draw in reverse
      path.style.strokeDashoffset = pathLength - drawLength;

      if(scrollPercentage >= .99) {
        path.style.strokeDasharray = 'none'
      }
      else {
        path.style.strokeDasharray = pathLength + ' ' + pathLength
      }

      // PARALLAX EFFECTS on TIMELINECARDS
      // const target = document.querySelectorAll('.scroll')

      // let index = 0;
      // let length = target.length;

      // for (index; index < length; index++) {
      //   let pos = window.scrollY * target[index].dataset.rate;

      //   if(target[index].dataset.direction === 'vertical') {
      //     target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
      //   } else {
      //     let posX = window.scrollY * target[index].dataset.ratex;
      //     let posY = window.scrollY * target[index].dataset.ratey;

      //     target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)'
      //   }
      // }

    })


  }, [])


  return (

    <div className={styles.container}>
      <main className='w-full flex justify-center svg-animation'>
        
        <div className="mx-auto max-w-2xl text-center absolute mt-20">
          <h2 className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl font-bold">
            L&apos; histoire du Cabinet
          </h2>
          {/* <p className='mt-2 text-lg tracking-tigh sm:text-lg text-custom-purple'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
        </div>


        <div className="line-container w-[60vh] fixed -z-index-1 overflow-hidden text-center mt-52">
        {/* <svg viewBox="0 0 34 813" fill="none" id='svg-draw'>
          <path d="M20.5 0.5C22.6667 40.1667 25.7 121.8 20.5 131C14 142.5 1.50002 147.5 1.50002 160.5C1.50002 173.5 31.5 193 32.5 202C33.5 211 1.50002 221 1.50002 234.5C1.50002 248 32.5 262.5 32.5 273.5C32.5 284.5 3.50002 294 1.50002 301.5C-0.49998 309 20.5 315.5 20.5 322.5C20.5 328.1 20.5 401.833 20.5 438C20.5 476.667 20.5 556.4 20.5 566C20.5 578 32.5 574.5 32.5 581.5C32.5 588.5 1.50002 600 1.50002 612.5C1.50002 625 37.5 635 32.5 647.5C27.5 660 20.5 664.5 20.5 671C20.5 676.2 20.5 767.833 20.5 813" stroke="black" id="svg-path"/>
        </svg> */}

        {/* <svg viewBox="0 0 34 813" fill="none" id='svg-draw'>
          <path d="M20.5 0.5C20.5 40.5 21.7 121.3 16.5 130.5C10 142 1.50002 147.5 1.50002 160.5C1.50002 173.5 31.5 193 32.5 202C33.5 211 1.50002 221 1.50002 234.5C1.50002 248 32.5 262.5 32.5 273.5C32.5 284.5 3.50002 294 1.50002 301.5C-0.49998 309 20.5 315.5 20.5 322.5C20.5 328.1 20.5 401.833 20.5 438C20.5 476.667 20.5 556.4 20.5 566C20.5 578 32.5 574.5 32.5 581.5C32.5 588.5 1.50002 600 1.50002 612.5C1.50002 625 37.5 635 32.5 647.5C27.5 660 20.5 664.5 20.5 671C20.5 676.2 20.5 767.833 20.5 813" stroke="red" id="svg-path"/>
        </svg> */}
{/* 
        <svg viewBox="0 0 34 666" fill="none" id='svg-draw'>
          <path d="M20.3699 0C20.3699 32.7877 21.5847 99.0188 16.3206 106.56C9.74059 115.986 1.13595 120.495 1.13595 131.151C1.13595 141.807 31.5053 157.791 32.5177 165.168C33.53 172.545 1.13595 180.742 1.13595 191.808C1.13595 202.874 32.5177 214.759 32.5177 223.776C32.5177 232.793 3.16058 240.58 1.13595 246.727C-0.888675 252.875 20.3699 258.203 20.3699 263.941C20.3699 268.531 20.3699 328.97 20.3699 358.615C20.3699 390.31 20.3699 455.667 20.3699 463.536C20.3699 473.372 32.5177 470.503 32.5177 476.241C32.5177 481.979 1.13595 491.406 1.13595 501.652C1.13595 511.898 37.5792 520.095 32.5177 530.341C27.4561 540.587 20.3699 544.276 20.3699 549.604C20.3699 553.866 20.3699 628.977 20.3699 666" stroke="black" opacity={.4} id="svg-path"/>
        </svg> */}

        {/* <svg viewBox="0 0 34 1365" fill="none" id='svg-draw'>
          <path d="M20.3699 0C20.3699 67.2 21.5847 202.944 16.3206 218.4C9.74059 237.72 1.13595 246.96 1.13595 268.8C1.13595 290.64 31.5053 323.4 32.5177 338.52C33.53 353.64 1.13595 370.44 1.13595 393.12C1.13595 415.8 32.5177 440.16 32.5177 458.64C32.5177 477.12 3.16058 493.08 1.13595 505.68C-0.888675 518.28 20.3699 529.2 20.3699 540.96C20.3699 550.368 20.3699 674.24 20.3699 735C20.3699 799.96 20.3699 933.912 20.3699 950.04C20.3699 970.2 32.5177 964.32 32.5177 976.08C32.5177 987.84 1.13595 1007.16 1.13595 1028.16C1.13595 1049.16 37.5792 1065.96 32.5177 1086.96C27.4561 1107.96 20.3699 1115.52 20.3699 1126.44C20.3699 1135.18 20.3699 1289.12 20.3699 1365" stroke="black" opacity={.4} id="svg-path"/>
        </svg> */}

        {/* <svg viewBox="0 0 34 669" fill="none" id='svg-draw'>
          <path d="M20.3699 0C20.3699 32.9354 21.5847 99.4649 16.3206 107.04C9.74059 116.509 1.13595 121.038 1.13595 131.742C1.13595 142.446 31.5053 158.502 32.5177 165.912C33.53 173.322 1.13595 181.556 1.13595 192.672C1.13595 203.788 32.5177 215.727 32.5177 224.784C32.5177 233.841 3.16058 241.663 1.13595 247.839C-0.888675 254.014 20.3699 259.366 20.3699 265.13C20.3699 269.741 20.3699 330.452 20.3699 360.231C20.3699 392.068 20.3699 457.72 20.3699 465.624C20.3699 475.505 32.5177 472.623 32.5177 478.386C32.5177 484.15 1.13595 493.619 1.13595 503.911C1.13595 514.204 37.5792 522.438 32.5177 532.73C27.4561 543.022 20.3699 546.727 20.3699 552.079C20.3699 556.361 20.3699 631.81 20.3699 669" stroke="black" opacity={.4} id="svg-path"/>
        </svg> */}

        <svg viewBox="0 0 131 930" fill="none" id='svg-draw'>
          <path d="M67.0129 0.5C67.0129 153.152 67.0129 62.4444 67.0129 93.7333C67.0129 125.022 123.681 136.4 129.699 164.844C135.717 193.289 8.84026 244.489 1.31794 272.933C-6.20438 301.378 122.177 333.615 129.699 385.763C137.221 437.911 1.31794 429.378 1.31794 490.059C1.31794 550.741 67.0129 555.481 67.0129 619.007C67.0129 669.828 67.0129 847.511 67.0129 930" stroke="black" opacity={.10} id="svg-path"/>
        </svg>

        
{/* <svg viewBox="0 0 83 395" fill="none" id='svg-draw'>
<path d="M48 0C48 6.82643 53.5 12 60 16.5C73.7976 25.3 46.3081 39.8333 37 47C23.5 54.5 16 57.8354 16 76.5C16 107.789 66.9821 114.556 73 143C79.0178 171.444 23.5223 155.556 16 184C8.47768 212.444 73.9777 181.852 81.5 234C89.0223 286.148 1 254.819 1 315.5C1 376.181 50.5 333 48 394" stroke="black" opacity={.10} id="svg-path"/>
</svg> */}





        {/* <svg viewBox="0 0 131 1024" fill="none" id='svg-draw'>
        <path d="M67.0129 0C67.0129 152.652 67.0129 156.444 67.0129 187.733C67.0129 219.022 123.681 230.4 129.699 258.844C135.717 287.289 8.84026 338.489 1.31794 366.933C-6.20438 395.378 122.177 427.615 129.699 479.763C137.221 531.911 1.31794 523.378 1.31794 584.059C1.31794 644.741 67.0129 649.481 67.0129 713.007C67.0129 763.828 67.0129 941.511 67.0129 1024" stroke="black" opacity={.4} id="svg-path"/>
        </svg> */}



{/* <svg width="34" height="889" viewBox="0 0 34 889" fill="none" id='svg-draw'>
<path d="M20.3699 0C20.3699 43.7662 21.5847 132.174 16.3206 142.24C9.74059 154.823 1.13595 160.841 1.13595 175.065C1.13595 189.289 31.5053 210.625 32.5177 220.472C33.53 230.319 1.13595 241.261 1.13595 256.032C1.13595 270.803 32.5177 286.668 32.5177 298.704C32.5177 310.74 3.16058 321.134 1.13595 329.34C-0.888675 337.546 20.3699 344.658 20.3699 352.318C20.3699 358.445 20.3699 439.12 20.3699 478.692C20.3699 521 20.3699 608.24 20.3699 618.744C20.3699 631.874 32.5177 628.044 32.5177 635.703C32.5177 643.362 1.13595 655.945 1.13595 669.622C1.13595 683.299 37.5792 694.241 32.5177 707.918C27.4561 721.594 20.3699 726.518 20.3699 733.63C20.3699 739.32 20.3699 839.581 20.3699 889" stroke="black" opacity={.4} id="svg-path"/>
</svg> */}




        {/* <svg viewBox="0 0 34 1635" fill="none" id='svg-draw'>
          <path d="M20.3699 0C20.3699 80.4923 21.5847 243.087 16.3206 261.6C9.74059 284.742 1.13595 295.809 1.13595 321.969C1.13595 348.129 31.5053 387.369 32.5177 405.48C33.53 423.591 1.13595 443.714 1.13595 470.88C1.13595 498.046 32.5177 527.225 32.5177 549.36C32.5177 571.495 3.16058 590.612 1.13595 605.705C-0.888675 620.797 20.3699 633.877 20.3699 647.963C20.3699 659.232 20.3699 807.606 20.3699 880.385C20.3699 958.194 20.3699 1118.64 20.3699 1137.96C20.3699 1162.11 32.5177 1155.06 32.5177 1169.15C32.5177 1183.24 1.13595 1206.38 1.13595 1231.53C1.13595 1256.69 37.5792 1276.81 32.5177 1301.96C27.4561 1327.12 20.3699 1336.17 20.3699 1349.25C20.3699 1359.72 20.3699 1544.11 20.3699 1635" stroke="black" id="svg-path" opacity={.4}/>
        </svg> */}


        </div>
        
        <div className="image-wrapper md:grid items-center justify-items-center grid-rows-3 grid-cols-2 absolute w-full mt-40 text-center h-full">
          <div></div>

          <div className='px-12 mb-10 lg:mb-0 timeCard scroll' data-rate='-0.1' data-direction='vertical'>
            <Image
              src="https://res.cloudinary.com/dbff7xgqx/image/upload/v1695852635/smalloffice_labota.webp"
              alt=""
              className="object-cover image-1 h-32 image"
              width={500}
              height={500}
            />
            <time className="mt-4 flex flex-col items-center text-xl font-semibold leading-6 text-custom-purple">
              Janvier 2017
            </time>
            <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Création du Cabinet</p>
          </div>
   
          <div className='px-12 mb-10 lg:mb-0 timeCard scroll' data-rate='-0.1' data-direction='vertical'>
            <Image
              src="https://res.cloudinary.com/dbff7xgqx/image/upload/v1695852637/mediumoffice_aotj1n.webp"
              alt=""
              className="object-cover image-2 h-32 image"
              width={500}
              height={500}
            />
            <time className="mt-4 flex flex-col items-center text-xl font-semibold leading-6 text-custom-purple">
              Décembre 2021
            </time>
            <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Partenariat</p>
          </div>
          <div></div>
          <div></div>

           <div className='px-12 mb-10 lg:mb-0 timeCard scroll' data-rate='-0.1' data-direction='vertical'>
            <Image
              src="https://res.cloudinary.com/dbff7xgqx/image/upload/v1695852640/largeoffice_ltxd8n.webp"
              alt=""
              className="object-cover image-3 h-32 image"
              width={500}
              height={500}
            />
            <time className="mt-4 flex flex-col items-center text-xl font-semibold leading-6 text-custom-purple">
              Décembre 2022
            </time>
            <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Émancipation</p>
          </div>
           
        </div>
          

        {/* <div className="timeline grid grid-cols-2 grid-rows-4">
          <div className='h-40 mt-40'>1</div>
          <div></div>
          <div></div>
          <div>2</div>
          <div>3</div>
          <div></div>
          <div></div>
          <div>4</div>
        </div> */}

        {/* Timeline section */}
        {/* <div className="mx-auto xl:mt-40 max-w-7xl p-6 lg:px-8 rounded">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-custom-purple"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div> */}
        
      </main>
    </div>
  )
}
