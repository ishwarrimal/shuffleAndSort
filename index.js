(function(){
    const shuffleBtn = document.getElementById('shuffle');
    const sortBtn = document.getElementById('sort');
    const cubeContainer = document.getElementById('cubeContainer');

    const cubeItems = [1,2,3,4,5,6,7,8,9]

    const randomizeCube = () => {
        var newItems = [...cubeItems]
        let len = newItems.length;
        let temp;
        let index;
        while (len > 0) {
            index = Math.floor(Math.random() * len);
            len--;
            temp = newItems[len];
            newItems[len] = newItems[index];
            newItems[index] = temp;
        }
        return newItems;
    }

    const generateCube = (random = false) => {
        let elementsToAppend = '';
        cubeContainer.innerHTML = elementsToAppend;
        const items = random ? randomizeCube() : cubeItems;
        console.log(items)
        items.forEach(item => {
            elementsToAppend += `<div class='cube-item'>${item}</div>`
        })
        cubeContainer.innerHTML = elementsToAppend;
    }

    shuffleBtn.addEventListener('click', () => { generateCube(true)})
    sortBtn.addEventListener('click', () => { generateCube()})

    generateCube();

})()