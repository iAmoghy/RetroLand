var submitAnswer = function() {
    eraAns = ""
    genreAns = ""
    platformAns = ""
    
    var eraRadios = document.getElementsByName('era');
    var eraVal= "";
    for (var i = 0, length = eraRadios.length; i < length; i++) {
        if (eraRadios[i].checked) {
           eraVal = eraRadios[i].value; 
           break;
         }
    }

    var genreRadios = document.getElementsByName('genre');
    var genreVal= "";
    for (var i = 0, length = genreRadios.length; i < length; i++) {
        if (genreRadios[i].checked) {
           genreVal = genreRadios[i].value; 
           break;
         }
    }

    var platRadios = document.getElementsByName('plat');
    var platVal= "";
    for (var i = 0, length = platRadios.length; i < length; i++) {
        if (platRadios[i].checked) {
           platVal = platRadios[i].value; 
           break;
         }
    }

    // Compute recommendation

    if (eraVal == "") {
        alert("Please choose an option :)")
    } else if (eraVal == "1980s") {
        if (genreVal == "action") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            }
        } else if (genreVal == "adventure") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            }
        } else if (genreVal == "platformer") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            }
        } else if (genreVal == "sport") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            }
        }
    } else if (eraVal == "1990s") {
        if (genreVal == "action") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            }
        } else if (genreVal == "adventure") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_1102-SNES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_1102-SNES.php";
            }
        } else if (genreVal == "platformer") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            }
        } else if (genreVal == "sport") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            }
        }
    }  else if (eraVal == "2000s") {
        if (genreVal == "action") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            }
        } else if (genreVal == "adventure") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            }
        } else if (genreVal == "platformer") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            }
        } else if (genreVal == "sport") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            }
        }
    }


    // zelda link to the past , 1990s, rpg
























    
    // if (eraVal == "")  {
    //   alert('Please choose an option :)');
    // } else if (eraVal == "1980s") {
    //     eraAns = "1980s"
    // } else if (eraVal == "1990s") {
    //     alert('Answer is correct !');
    // } else if (eraVal == "2000s") {
    //     alert('Answer is correct !');
    // }

    // if (genreVal == "")  {
    // alert('Please choose an option :)');
    // } else if (genreVal == "action") {
    // alert('Answer is correct !');
    // } else if (genreVal == "adventure") {
    //     alert('Answer is correct !');
    // } else if (genreVal == "platformer") {
    //     alert('Answer is correct !');
    // } else if (genreVal == "sport") {
    //     alert('Answer is correct !');
    // }

    // if (platVal == "")  {
    // alert('Please choose an option :)');
    // } else if (platVal == "nintendo") {
    //     alert('Answer is correct !');
    // } else if (platVal == "sega") {
    //     alert('Answer is correct !');
    // } else if (platVal == "sony") {
    //     alert('Answer is correct !');
    // } else if (platVal == "noPreference") {
    //     alert('Answer is correct !');
    // }


};