function Book(theTitle,theAuthor,thePrice){
    this.title = theTitle
    this.author = theAuthor
    this.price=thePrice
};
function showProps(){
    var result=' '
    for (var property in this){
        if (property== 'show' || property == 'addTax')continue;
        result += property +'='+ this[property] + '<br>';
    }
    return result;
}