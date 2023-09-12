
function makeBook(t,a,m,g,n,d){
    return {
        title:t,
        author:a,
        msrp:m,
        genre:g,
        numberofpages :n,
        description:d
    }
}

var book1=makeBook('harry potter','j.k rowling','30$','Fantasy literature','300','The novels chronicle the lives of a young wizard')



function displayBook(book) { 
    return book.title+' by '+book.author+','+book.msrp+','+book.genre
    }

var book2=makeBook('Romeo and Juliet','william shakespeare','£615','tragedy','480','It tells the story of a young couple from rival families in medieval Verona, Italy, who fall in love despite their families’ ongoing conflict.')


var book3=makeBook('Structure and Interpretation of Computer Programs','Gerald Jay Sussman, Hal Abelson','$55','Programmation informatique','574','Structure and Interpretation of Computer Programs is a computer science textbook.')


var books=[book1,book2,book3]



function displayBooks(array){
    for (var i=0;i<array.length;i++){
        console.log((i+1)+'.'+' '+displayBook(array[i])+'/n')
                    }
}


function isMatch(query,book){
    for (var key in book){
        if (book[key]===query.toLowerCase() || book[key].substr(0, 5)===query){
            return true 
        }
        else 
         return false
}
}


function removeB(t,array){
    for (var i=0;i<array.length;i++){
        if (array[i].title===t){
            array.splice(i,1)
        }
    }
    return array
}