const accordionItems = document.querySelectorAll('.accordion-item');
const accordionBodyItems = document.querySelectorAll('.accordion-body');
const buttonItems = document.querySelectorAll('.accordion-button');
const arrowItems = document.querySelectorAll('.arrow-down');

accordionItems.forEach(function(ind) {
    ind.firstElementChild.nextElementSibling.style.transform = 'translateY(-100%)';
})

// buttonItems (na jutro)


accordionItems.forEach(function(ind, key) {
    ind.addEventListener('click', function() {
    // const activeAccordion = accordionItems[key];
    // activeAccordion.firstElementChild.nextElementSibling.classList.toggle('accordion-body-active');
    arrowItems[key].classList.toggle('arrow-up');
    const activeAccordion = accordionItems[key];
    // accordionItems[key].classList.toggle('accordion-body-active');
    accordionItems[key].firstElementChild.nextElementSibling.style.transform = 'translateY(0)';
    accordionItems[key].firstElementChild.nextElementSibling.style.opacity = '1';
    })
}) 




// testing branching