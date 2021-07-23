class CardContent {
    name : string
    cssClass : string
    key : number


    constructor(name : string, cssClass : string, key : number) {
        this.name = name
        this.cssClass = cssClass
        this.key = key
    }
}


let Rex = new CardContent("Rex", "bg-rexBaground", 1 );
let Camptosaurus  = new CardContent ("Camptosaurus", "bg-camptosaurusBaground", 2);
let Stegosaurus  = new CardContent ("Stegosaurus", "bg-stegosaurusBaground", 3);

export { CardContent, Rex, Camptosaurus, Stegosaurus }