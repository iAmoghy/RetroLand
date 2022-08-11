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
                window.location.href = "https://www.retrogames.cz/play_1570-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_352-Atari2600.php";
            }
        } else if (genreVal == "platformer") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_003-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_029-Atari2600.php";
            }
        } else if (genreVal == "sport") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_057-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_664-Atari2600.php";
            }
        }
    } else if (eraVal == "1990s") {
        if (genreVal == "action") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_1061-N64.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_973-DOS.php";
            }
        } else if (genreVal == "adventure") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_900-SNES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_1360-DOS.php";
            }
        } else if (genreVal == "platformer") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_1066-N64.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_479-DOS.php";
            }
        } else if (genreVal == "sport") {
            if (platVal == "nintendo") {
                window.location.href = "retrogames.cz/play_1617-Genesis.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_1311-Genesis.php";
            }
        }
    }  else if (eraVal == "2000s") {
        if (genreVal == "action") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_1443-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_737-DOS.php";
            }
        } else if (genreVal == "adventure") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_1608-N64.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_001-NES.php";
            }
        } else if (genreVal == "platformer") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_1108-N64.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_736-DOS.php";
            }
        } else if (genreVal == "sport") {
            if (platVal == "nintendo") {
                window.location.href = "https://www.retrogames.cz/play_1337-NES.php";
            } else {
                window.location.href = "https://www.retrogames.cz/play_1461-Atari7800.php";
            }
        }
    }
};