/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
  return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"

function hetSchool() {
  return "Novi hogeschool";
}

const school = hetSchool();

console.log(school);

/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"

function compliment(naam) {
  return "lekker bezig met die functies, " + naam + "!";
}

const bezig = compliment("Haiko");

console.log(bezig);

/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]

function getGrades() {
  return [8, 8.5, 6, 7]
}

const arrayNaam = getGrades();

console.log(arrayNaam);


/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }

function getDetails(name, lName) {
  return name + " " + lName;
}

  const name = getDetails("Haiko", "Wierda");

console.log(name);

const today = new Date();

console.log(today);

const dateOfBirth = new Date('Dec 26, 1992 15:45:55');

console.log(dateOfBirth);

const englishDate = dateOfBirth.toDateString();

console.log(englishDate);


