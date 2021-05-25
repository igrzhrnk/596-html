(function () {
    
    for(let i = 0; i < 2; i++) {
        const groupItem = document.querySelector('.carousel-inner');
        groupItem.innerHTML += document.createElement('div')
        groupItem.addClass('carousel-item active');
        for(let j = 0; j < i * 2; j++) {
            groupItem.innerHTML += `
            const currentItem = document.querySelector('#item-'+${j});
            const nextItem = document.querySelector('#item-'+${j+1});
            `;
        }
    }
    
})();