
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var student = {
  nome : 'samuel',
  cognome : 'Gbadamosi',
  eta : 45,
  sesso : 'Male'
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
    eta : 25,
    sesso : 'Male'

 },
   {
     nome : 'jessy',
     cognome : 'angela',
     eta : 35,
     sesso : 'Female'

   },
   {
     nome : 'bryan',
     cognome : 'paul',
     eta : 33,
     sesso : 'Trans'

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
var sex = prompt(`insert 'm' or 'f' or 'tr' `);

if(sex == 'm'){
  sex = 'male';
} else if (sex == 'f'){
  sex = 'female';
} else if (sex == 'tr'){
  sex = 'trans'
}


var newStudent = {
   nome : name,
   cognome : surname,
   eta : eta,
   sesso : sex

}

school.push(newStudent);
console.log(school);

// will work on css graphics later








// ..
