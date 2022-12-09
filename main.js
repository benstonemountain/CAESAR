import { caesar, decrypt } from "/caesar.js";


const s = id => document.getElementById(id);

const ABC_SMALL = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";
const ABC_LARGE = "AÁBCDEÉFGHIÍJKLMNOÓÖŐPQRSTUÚÜŰVWXYZ";
const ABC_NUMS = "0123456789";
const default_abc = ABC_SMALL + ABC_LARGE + ABC_NUMS;
const default_offset = 0;


const kodol = s("kodol");
const dekodol = s("dekodol");
const torol = s("torol");

const userMessage = s("user_message"); //eredeti szöveg
const resultMessage = s("result_message"); //kódolt szöveg
const messageOffset = s("message_offset"); //amennyivel eltolom 
const messageCharacters = s("message_characters"); //karakterkészlet

kodol.onclick = () => {
    if (messageOffset.value === "") {
        messageOffset.value = default_offset;
    }
    if (messageCharacters.value === "") {
        messageCharacters.value = default_abc;
    }
    resultMessage.value = userMessage.value.split("").map(chr => caesar(chr, messageOffset.value)).join("");
};

 dekodol.onclick = () => {
    if (messageOffset.value === "") {
        messageOffset.value = default_offset;
    }
    if (messageCharacters.value === "") {
        messageCharacters.value = default_abc;
    }
    userMessage.value = resultMessage.value.split("").map(chr => decrypt(chr, messageOffset.value)).join("");
};

torol.onclick = () => {

userMessage.value = "";       //eredeti szöveg
resultMessage.value = "";     //kódolt szöveg
messageOffset.value = "";     //amennyivel eltolom 
messageCharacters.value = ""; //karakterkészlet

};






