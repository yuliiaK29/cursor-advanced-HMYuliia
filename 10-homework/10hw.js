const container = document.getElementById('squares');
const getColor = () => {
    return `#${Math.random().toString(16).slice(2, 8)}`
};

const generateBlocks = () => {
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div')
        container.append(div)
        div.style.backgroundColor = getColor()
    }
}   

const generateBlocksInterval = () => {
    setInterval(() => {
        container.innerHTML = ''
        generateBlocks()
    }, 1000);
}
generateBlocksInterval()    