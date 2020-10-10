import image from './assets/image.png'
import {TitleBlock, ColumnsBlock, ImageBlock, TextBlock} from './classes/blocks'

const text = `My name is Volodya I'm Full-stack developer <a href="https://github.com/Lekhman-vold" target="_blank">GitHub</a>. Here you can look at my code. And my <a href="https://www.linkedin.com/in/volodya-lekhman-0a40121ab/" target="_blank">LinkedIn</a>`;
const textCol = [
    'Skills: ReactJS, JavaScript, ReactNative, Redux, NodeJS, Webpack, HTML, CSS, Bootstrap, Git',
    'Education TKTNTU I.Puluj 2016-2018',
    'Languages: English (beginner), Russian (proficiency) '];

export const model = [
    new TitleBlock( 'Designer sites on pure javascript', {
            tag: 'h3',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: `#fff`,
                padding: '1.5rem',
                'text-align': 'center'
            }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ImageBlock( image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '400px',
            height: 'auto'
        },
        alt: 'Its picture'
    }),
    new ColumnsBlock( textCol, {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    })
];