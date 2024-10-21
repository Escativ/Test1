let x = 15;

if (x >= 10 && x <= 20) {
    console.log("Yra tarp 10 ir 20 (x: "+x+")");
} else {
    console.log("Kintamasis nėra tarp 10 ir 20.");
}


let temperature = 15;

switch (true) {
    case (temperature < 0):
        console.log("It's cool");
        break;
    case (temperature >= 0 && temperature < 10):
        console.log("Could be cooler");
        break;
    case (temperature >= 10 && temperature < 20):
        console.log("Okay I can feel the heat");
        break;
    case (temperature >= 20 && temperature < 30):
        console.log("");
        break;
    case (temperature >= 30):
        console.log("Karšta! Saugokite save nuo saulės ir gerkite daug vandens.");
        break;
    default:
        console.log("Temperatūra nežinoma.");
}
