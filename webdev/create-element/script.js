const mainEl = document.querySelector("main");

function CreateElement(tag, attributeName = '', attributeValue = '', content = '', parent = null) {
  this.element = document.createElement(tag);

 if (attributeName && attributeValue) {
    this.element.setAttribute(attributeName, attributeValue);
  }
  
  if (content) {
   this.element.textContent = content; 
  }

if (parent && typeof parent.appendChild === 'function') {
    parent.appendChild(this.element);
  }
  
this.getElement = function() {
    return this.element;
  };
}

const containerDiv = new CreateElement("div", "class", "container", "hello", mainEl);
const h1 = new CreateElement("h1", "", "", "Hello World", containerDiv);
const p = new CreateElement("p", "", "", "This is a paragraph", containerDiv);