let myString = "";

try {
    myString += "a";
    throw Error();
} catch (error) {
    myString += "b";
} finally {
    myString += "a"
    try {
        myString += "a";
        throw Error();
    } catch (error) {
        myString += "b";
    } finally {
        myString += "a"
    }
}

console.log(myString)