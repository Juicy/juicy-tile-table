function getGridCols(element, propertyName) {
    // check W3C and IE convention
    return Array.prototype.map.call(element.shadowRoot.querySelectorAll('table>col'), function(e) {
        return e.style[propertyName || 'width']
    });
}

function getGridRows(element, propertyName) {
    // check W3C and IE convention
    return Array.prototype.map.call(element.shadowRoot.querySelectorAll('table>tr'), function(e) {
        return e.style[propertyName || 'height']
    });
}

function realRelativePosition(element, context) {
    var contextPosition = context.getBoundingClientRect(),
        elementPosition = element.getBoundingClientRect();
    return {
        top: elementPosition.top - contextPosition.top,
        right: contextPosition.right - elementPosition.right,
        bottom: contextPosition.bottom - elementPosition.bottom,
        left: elementPosition.left - contextPosition.left,
        width: elementPosition.width,
        height: elementPosition.height
    }
}
