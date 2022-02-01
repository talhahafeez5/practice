class animal {
    constructor(theName){
        //property
        this.name = theName
    }
    //methods
    speak(){
        return(this.name +' makes a noise.')
}
toString(){
    return(this.name + ' is an animal. '+ this.speak());
}
}
class cat extends animal {
    speak(){
        return(this.name + " meows")
    }
    toString(){
        return(this.name+ ' is a cat. '+ this.speak())
    }
}
class dog extends animal{
    speak(){
        return(this.name + " barks")
    }
    toString(){
        return(this.name+ ' is a dog. '+ this.speak())

    }
}
class goat extends animal{
    constructor(theName, theAge){
        super(theName);
        this.age = theAge
    }
    speak(){
        return(this.name + " barks")
    }
    toString(){
        return(this.name+ ' is a goat. '+ this.speak()+ ' '+ this.name + ' is '+ this.age+ ' years old.');
        

    }
}