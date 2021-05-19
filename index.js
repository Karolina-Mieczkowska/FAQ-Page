const accordionButton = document.querySelectorAll('.accordion-button');
const accordionSection = document.querySelectorAll('.accordion-item');

// accordionSection.forEach((item) => {
//     item.addEventListener('mouseover', (event) => {
//         item.firstElementChild.lastElementChild.firstElementChild.style.color = '#132C33';
//     })
//     item.addEventListener('mouseout', (event) => {
//         item.firstElementChild.lastElementChild.firstElementChild.style.color = '#D8E3E7';
//     })
// })

// Dodaj if do mouseover!

accordionSection.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
        console.log(item.firstElementChild);
    })
})

accordionButton.forEach((item) => {
    item.addEventListener('click', () => {
        let accordionCollapse = item.nextElementSibling;
        
        if (!item.classList.contains('collapsing')) {
            if (!item.classList.contains('open')) {
                accordionCollapse.style.display = 'block';
                let accordionHeight = accordionCollapse.clientHeight;
    
                setTimeout(() => {
                    accordionCollapse.style.height = accordionHeight + 'px';
                    accordionCollapse.style.display = '';
                }, 1);

                accordionCollapse.classList = 'accordion-collapse collapsing';

                setTimeout(() => {
                    accordionCollapse.classList = 'accordion-collapse collapse open';
                }, 500)
            } else {
                accordionCollapse.classList = 'accordion-collapse collapsing';

                setTimeout(() => {
                    accordionCollapse.style.height = '0px';
                }, 1);
    
                setTimeout(() => {
                    accordionCollapse.classList = 'accordion-collapse collapse';
                    accordionCollapse.style.height = '';
                }, 500);

            }

            item.classList.toggle('open')
            item.lastElementChild.firstElementChild.classList.toggle('arrow-up');
        }
    })
})