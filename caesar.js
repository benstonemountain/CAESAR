
export function caesar(karakter, amennyivelMegnovelem) {

    let kisbetuk = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";
    let nagybetuk = "AÁBCDEÉFGHIÍJKLMNOÓÖŐPQRSTUÚÜŰVWXYZ";
    let szamok = "0123456789";
    let titkosSzam;
    let betumSzama;
    let letterRange = kisbetuk.length;
    let capitalRange = nagybetuk.length;
    let numberRange = szamok.length;

    //Megnézem, hogy kis-nagybetű vagy szám (vagy egyik sem) a
    //felhasználó által megadott karakter

    //Ha kisbetű, akkor kap egy sorszámot és jön a képlet
    if (kisbetuk.includes(karakter)) {

        betumSzama = kisbetuk.indexOf(karakter);

        if (betumSzama + (amennyivelMegnovelem % letterRange) < letterRange) {
            titkosSzam = betumSzama + (amennyivelMegnovelem % letterRange);
        } else {
            let temp1 = betumSzama + (amennyivelMegnovelem % letterRange);
            titkosSzam = temp1 - letterRange;
        }

    }
    //Ugyanezt eljátszom a nagybetűvel...
    else if (nagybetuk.includes(karakter)) {
        betumSzama = nagybetuk.indexOf(karakter);

        if (betumSzama + (amennyivelMegnovelem % capitalRange) < capitalRange) {
            titkosSzam = betumSzama + (amennyivelMegnovelem % capitalRange);
        } else {
            let temp1 = betumSzama + (amennyivelMegnovelem % capitalRange);
            titkosSzam = temp1 - capitalRange;
        }
    }
    //...és ugyanezt eljátszom a számmal is 
    else if (szamok.includes(karakter)) {
        betumSzama = szamok.indexOf(karakter);

        if (betumSzama + (amennyivelMegnovelem % numberRange) < numberRange) {
            titkosSzam = betumSzama + (amennyivelMegnovelem % numberRange);
        } else {
            let temp1 = betumSzama + (amennyivelMegnovelem % numberRange);
            titkosSzam = temp1 - numberRange;
        }
    }
    //ha egyik sem, akkor simán adja vissza a megadott karaktert
    else {
        betumSzama = -1;
        return karakter;
    }

    //Egyelőre nincs jobb ötletem, minthogy újra megvizsgálom, h milyen karaktert kaptam
    //és annak megfelelően osztom ki a titkosított karaktert
    if (karakter.charCodeAt(0) >= 48 && karakter.charCodeAt(0) <= 57) {
        return szamok[titkosSzam];

    } else if (karakter === karakter.toLowerCase()) {
        return kisbetuk[titkosSzam];
    } else if (karakter === karakter.toUpperCase()) {
        return nagybetuk[titkosSzam];
    }

}


//VISSZAFEJTÉS
export function decrypt(karakter, amennyivelCsokkentem) {

    let kisbetuk = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";
    let nagybetuk = "AÁBCDEÉFGHIÍJKLMNOÓÖŐPQRSTUÚÜŰVWXYZ";
    let szamok = "0123456789";
    let titkosSzam;
    let betumSzama;
    let letterRange = kisbetuk.length;
    let capitalRange = nagybetuk.length;
    let numberRange = szamok.length;


    if (kisbetuk.includes(karakter)) {

        betumSzama = kisbetuk.indexOf(karakter);

        if (betumSzama - (amennyivelCsokkentem % letterRange) >= 0) {
            titkosSzam = betumSzama - (amennyivelCsokkentem % letterRange);
        } else {
            let temp1 = (amennyivelCsokkentem % letterRange) - betumSzama;
            titkosSzam = letterRange - temp1;
        }

    }

    else if (nagybetuk.includes(karakter)) {
        betumSzama = nagybetuk.indexOf(karakter);
        console.log("Betűm száma: " + betumSzama);

        if (betumSzama - (amennyivelCsokkentem % capitalRange) >= 0) {
            titkosSzam = betumSzama - (amennyivelCsokkentem % capitalRange);
        } else {
            let temp1 = (amennyivelCsokkentem % capitalRange) - betumSzama;
            titkosSzam = capitalRange - temp1;
        }
    }


    else if (szamok.includes(karakter)) {
        betumSzama = szamok.indexOf(karakter);
        console.log("Betűmszáma: " + betumSzama);
        if (betumSzama - (amennyivelCsokkentem % numberRange) >= 0) {
            titkosSzam = betumSzama - (amennyivelCsokkentem % numberRange);
            console.log("Titkos szám: " + titkosSzam);
            console.log("kivonandó: " + (amennyivelCsokkentem%numberRange));
        } else {
            let temp1 = (amennyivelCsokkentem % numberRange) - betumSzama;
            console.log("kivonandó: (else) " + (amennyivelCsokkentem%numberRange));
            titkosSzam = numberRange - temp1;
            console.log("Titkos szám: (else)" + titkosSzam);
        }
    }
    
    else {
        betumSzama = -1;
        return karakter;
    }

    if (karakter.charCodeAt(0) >= 48 && karakter.charCodeAt(0) <= 57) {
        return szamok[titkosSzam];
    
    } else if (karakter === karakter.toLowerCase()) {
        return kisbetuk[titkosSzam];
    } else if (karakter === karakter.toUpperCase()) {
        return nagybetuk[titkosSzam];
    }

}