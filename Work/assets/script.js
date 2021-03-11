const characteramountrange = document.getElementById
('characteramountrange')
const characteramountnumber = document.getElementById
('characteramountnumber')
const form = document.getElementById('passwordgeneratorform')
const passworddisplay = document.getElementById('passworddisplay')
const capitalizeelement = document.getElementById('capitalize')
const addnumberselement = document.getElementById('addnumbers')
const addspeccharacterselement = document.getElementById('addspeccharacters')

const uppercase_char_codes = arrayfromlowtohigh(65 , 90)
const lowercase_char_codes = arrayfromlowtohigh(97 , 122)
const number_char_codes = arrayfromlowtohigh(48 , 57)
const symbol_char_codes = arrayfromlowtohigh(33 , 47).concat(
    arrayfromlowtohigh(58 , 64)
).concat(
    arrayfromlowtohigh(91 , 96)
).concat(
    arrayfromlowtohigh(123 , 126)
)



characteramountnumber.addEventListener('input' , synccharacteramount)
characteramountrange.addEventListener('input' , synccharacteramount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characteramount = characteramountnumber.value
    const includeuppercase = capitalizeelement.checked 
    const includenumbers = addnumberselement.checked
    const includespecialcharacters = addspeccharacterselement.checked
    const password = generatepassword(characteramount, includeuppercase, includenumbers,
         includespecialcharacters)
         passworddisplay.innerText = password
})

function generatepassword(characteramount, includeuppercase, includenumbers,
    includespecialcharacters){
        let charcodes = lowercase_char_codes
        if (includeuppercase) charcodes = charcodes.concat(uppercase_char_codes)
        if (includespecialcharacters) charcodes = charcodes.concat(symbol_char_codes)
        if (includenumbers ) charcodes = charcodes.concat(number_char_codes)

        const passwordcharacters = []
        for (let i = 0; i < characteramount; i++){
            const charactercode = charcodes[Math.floor(Math.random()* charcodes.length)]
            passwordcharacters.push(String.fromCharCode(charactercode))
        }
        return passwordcharacters.join('')
    }
    

function arrayfromlowtohigh(low,high){
    const array = []
for (let i = low; i <= high; i++){
    array.push(i)
}
return array
}


function synccharacteramount(e){
const value = e.target.value
characteramountnumber.value = value
characteramountrange.value = value
}








 