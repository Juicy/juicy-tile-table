function getGridCols(element, propertyName) {
    // check W3C and IE convention
    return Array.prototype.map.call(element.shadowRoot.querySelectorAll('table>col'), function(e){ return e.style[propertyName || 'width']});
}
function getGridRows(element, propertyName){
    // check W3C and IE convention
    return Array.prototype.map.call(element.shadowRoot.querySelectorAll('table>tr'), function(e){ return e.style[propertyName || 'height']});
}
