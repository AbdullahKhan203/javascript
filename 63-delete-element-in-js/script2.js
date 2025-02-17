

const imageelement=document.querySelector("body > div.container > div:nth-child(3)")
// console.log(imageelement)
// imageelement.remove();

// another mehod to delete element.
imageelement.parentElement.removeChild(imageelement)