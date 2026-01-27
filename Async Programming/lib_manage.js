/*
// Callback
function chkUser(userName, callback){
    console.log("Verifying Username......");
    setTimeout(() =>{
      if (userName === "admin"){
        console.log("User Verified Successfully");
        callback();
      }
      else{
        console.log(`Username ${userName} not found!`)
      }
    }, 2000)
}

function chkPass(Pass, callback){
    console.log("Verifying Password......");
    setTimeout(() =>{
      if (Pass === "12345"){
        console.log("User Login Successfully");
        callback();
      }
      else{
        console.log(`Incorrect Password`)
      }
    }, 2000)
}

function chkBook(bookId, callback){
    console.log("Checking Book ID......");
    let bookID1 = '10023';
    let bookID2 = '10024';
    let bookID3 = '10025';

    setTimeout(() =>{
      if (bookId === bookID1 || 
          bookId === bookID2 ||
          bookId === bookID3){
        console.log(`Book ${bookId} is available`);
        callback(bookId);
      }
      else{
        console.log(`Book ${bookId} is not available right now!`)
      }
    }, 2000)
}

function issueBook(bookId, callback){
    console.log("Your Book is being Issued......");
    setTimeout(() =>{
    console.log(`Book ${bookId} successfully Issued`);
    console.log("Enjoy your Book");
    callback(bookId);
    }, 2000)
}

function returnBook(bookid, returnBookId){
    if (returnBookId === bookid){
      console.log(`Your Book ${returnBookId} is in Return queue......`);
      setTimeout(() =>{
      console.log(`Book ${returnBookId} successfully Returned`);
    }, 2000)
    }
    else{
        console.log(`You cannot return book ${returnBookId} because it's not issued yet!`)
    }
}

chkUser(prompt("Enter Username"), () =>{
    chkPass(prompt("Enter Password"), () =>{
        chkBook(prompt("Enter Book Id"), (bookId) =>{
            issueBook(bookId, (bookId) =>{
                returnBook(bookId, prompt("Enter Book ID to return"))
            });
        });
    });
});
*/

/*
// Promise
function chkUser(userName){
    console.log("Verifying Username......");
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
      if (userName === "admin"){
        console.log("User Verified Successfully");
        resolve();
      }
      else{
        reject(`Username ${userName} not found!`)
      }
    }, 2000)
    }) 
}

function chkPass(Pass){
    console.log("Verifying Password......");
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
      if (Pass === "12345"){
        console.log("User Login Successfully");
        resolve();
      }
      else{
        reject(`Incorrect Password`);
      }
    }, 2000)
    })
}

function chkBook(bookId){
    console.log("Checking Book ID......");
    let bookID1 = '10023';
    let bookID2 = '10024';
    let bookID3 = '10025';
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
      if (bookId === bookID1 || 
          bookId === bookID2 ||
          bookId === bookID3){
        console.log(`Book ${bookId} is available`);
        resolve(bookId);
      }
      else{
        reject(`Book ${bookId} is not available right now!`);
      }
    }, 2000)
    })

}

function issueBook(bookId){
    console.log(`Your Book ${bookId} is being Issued......`);
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
      console.log(`Book ${bookId} successfully Issued`);
      console.log("Enjoy your Book");
      resolve(bookId);
    }, 2000)
    })
    
}

function returnBook(bookId, returnBookId){
    if (returnBookId === bookId){
        console.log(`Your Book ${returnBookId} is in Return queue......`);
        return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        console.log(`Book ${returnBookId} successfully Returned`);
    }, 2000)
    })
    }
    else{
        console.log(`You cannot return book ${returnBookId} because it's not issued yet!`);
    }
}

chkUser(prompt('Enter Username'))
        .then(() => {
            return chkPass(prompt("Enter Password"))
        })
        .then(() =>{
            return chkBook(prompt('Enter Book ID'))
        })
        .then((bookId) =>{
            return issueBook(bookId)
        })
        .then((bookId) =>{
            return returnBook(bookId, prompt("Enter Book ID to Return"))
        })
        .catch((reject) =>{
            console.log("Some Error Occurred: " + reject);
        })
*/

/*
// async-await
function chkUser(userName){
    console.log("Verifying Username......");
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
      if (userName === "admin"){
        console.log("User Verified Successfully");
        resolve();
      }
      else{
        reject(`Username ${userName} not found!`)
      }
    }, 2000)
    }) 
}

function chkPass(Pass){
    console.log("Verifying Password......");
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
      if (Pass === "12345"){
        console.log("User Login Successfully");
        resolve();
      }
      else{
        reject(`Incorrect Password`);
      }
    }, 2000)
    })
}

function chkBook(bookId){
    console.log("Checking Book ID......");
    let bookID1 = '10023';
    let bookID2 = '10024';
    let bookID3 = '10025';
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
      if (bookId === bookID1 || 
          bookId === bookID2 ||
          bookId === bookID3){
        console.log(`Book ${bookId} is available`);
        resolve(bookId);
      }
      else{
        reject(`Book ${bookId} is not available right now!`);
      }
    }, 2000)
    })

}

function issueBook(bookId){
    console.log(`Your Book ${bookId} is being Issued......`);
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
      console.log(`Book ${bookId} successfully Issued`);
      console.log("Enjoy your Book");
      resolve(bookId);
    }, 2000)
    })
    
}

function returnBook(bookId, returnBookId){
    if (returnBookId === bookId){
        console.log(`Your Book ${returnBookId} is in Return queue......`);
        return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        console.log(`Book ${returnBookId} successfully Returned`);
    }, 2000)
    })
    }
    else{
        console.log(`You cannot return book ${returnBookId} because it's not issued yet!`);
    }
}

async function library(){
    try{
        
        await chkUser(prompt('Enter Username'));

        await chkPass(prompt('Enter Password'));

        let receiveBookId = await chkBook(prompt('Enter Book ID to Issue'));

        await issueBook(receiveBookId);

        await returnBook(receiveBookId, prompt('Enter Book ID to Return'));
       
    }
    catch(reject){
     console.log(`Some error occurred - ${reject}`);
    }
}

library();
*/