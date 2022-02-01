function WebLanguage(myName, myBestPart, myEaseToLearn, myRating){
    this.name= myName;
    this.bestPart=myBestPart;
    this.easeToLearn=myEaseToLearn;
    this.rating= myRating;

}
function show(languageShow){
document.write('language name: '+ languageShow.name+ "<br>")
document.write('best part: '+ languageShow.bestPart)
document.write('ease of leaning '+ languageShow.easeToLearn+ " <br>")
document.write(' rating 1-10 '+ languageShow.rating)
}

var  javascript= new WebLanguage('Javascript', 'makes cool effects', 'moderate',10);
var java = new WebLanguage('java', 'makes platform-independant application', 'hard ',8)
var html= new WebLanguage('html5/css', 'makes pretty pages', ' easy',9)
function start(){
    document.write('<h1>Javascript Specialist</h1>')
    document.write('<h3> rating web languages</h3>')
    show(java)
    show(javascript)
    show(html)
}