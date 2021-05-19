const accordionItems = document.querySelectorAll('.accordion-item');
const accordionBodyItems = document.querySelectorAll('.accordion-body');
const buttonItems = document.querySelectorAll('.accordion-button');
const arrowItems = document.querySelectorAll('.arrow-down');


accordionItems.forEach(function(ind, key) {
    ind.addEventListener('click', function() {
    // const activeAccordion = accordionItems[key];
    // activeAccordion.firstElementChild.nextElementSibling.classList.toggle('accordion-body-active');
    arrowItems[key].classList.toggle('arrow-up');
    const activeAccordion = accordionItems[key];
    accordionItems[key].classList.toggle('accordion-body-active');
    })
}) 




// testing branching
// bootstrap branch testing