


// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Buon lavoro :muscle:

// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var student = {
  nome : 'samuel',
  cognome : 'Gbadamosi',
  eta : 45
}

// console.log(student);
// Stampare a schermo attraverso il for in tutte le proprietà.
for (var k in student) {
console.log(k + ' ' + student[k]);
}

// - Creare un array di oggetti di studenti.
var school = [
   {
    nome : 'mike',
    cognome : 'rainbow',
    eta : 25
 },
   {
     nome : 'john',
     cognome : 'angela',
     eta : 35
   },
   {
     nome : 'bryan',
     cognome : 'paul',
     eta : 13
   }

];
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for(var i=0; i < school.length; i++){
       console.log(school[i].nome);
      console.log(school[i].cognome);
}

 // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var name = prompt('insert your name ?');
var surname = prompt('insert your surname ?');
var eta = parseInt(prompt('insert your age ?'));

var newStudent = {
   nome : name,
   cognome : surname,
   eta : eta
}

school.push(newStudent);
console.log(school);








// ..
