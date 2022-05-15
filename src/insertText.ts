const jsonData = require('./thumbnail.json')

const wrapperElement: any = document.getElementById('img-wrapper')
const textElement: any = document.createElement('p')
const titleText: any = jsonData.title
const authorText: any = jsonData.author.github
const spaceCount = (titleText.match( /　/g ) || []).length

// TODO: 今後デザイン崩れが発生した場合、行ごとにスタイルを適応
if( spaceCount === 0) {
    textElement.classList.add('one-line')
}
else if(spaceCount === 1) {
    textElement.classList.add('two-lines')
} else if(spaceCount === 2) {
    textElement.classList.add('three-lines')
} else {
    textElement.classList.add('four-lines')
}

const formatText = titleText.replace(/　/g, '\n')
textElement.textContent = formatText

wrapperElement.appendChild(textElement)
const authorElement: any = document.createElement('div')
authorElement.classList.add('author-wrapper')

// 画像
const imgElement: any = document.createElement('img')
imgElement.src = 'github.png'
imgElement.width = 40
imgElement.height = 40
authorElement.appendChild(imgElement)
// 著名
const authorTextElement: any = document.createElement('p')
authorTextElement.textContent = authorText
authorTextElement.classList.add('author-text')
authorElement.appendChild(authorTextElement)

wrapperElement.appendChild(authorElement)