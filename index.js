const accordionItems = document.querySelectorAll('.accordion-item');
const accordionBodyItems = document.querySelectorAll('.accordion-body');

function addClass(el, klass) {
    el.classList.add(klass);
}

function removeClass(el, klass) {
    el.classList.remove(klass);
}

accordionItems[0].querySelector('.accordion-body').classList.add('accordion-body-active');

accordionItems.forEach(function(ind) {
    const accordionButton = ind.firstElementChild;
    accordionButton.addEventListener('click', AccordionToggle);
})

function AccordionToggle(event) {
    accordionBodyItems.forEach(function(accordionBody) {
        if (accordionBody.previousElementSibling === event.target) {
            addClass(accordionBody, 'accordion-body-active');
        } else {
            removeClass(accordionBody, 'accordion-body-active');
        }
    })
}

// testing branching
