let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2019,
      "genre": "Romantik",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": 12.30,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ];

  
  // ich brauche eine function mit der ich ähnlich wie bei fotogram durch das array(JSON) irretriere(wiederhole), bis das array am ende ist

  function render() {
    let contentRef = document.getElementById('content');              // ich bestimme eine Variable in der ich das HTML Elemnt speichere, das die ID content hat                                       
    for (let i = 0; i <books.length; i++) {                           // ich erstelle eine schleife, ich sage das die schleife nur solange geht bis das ende des arrays erreicht ist 
      contentRef.innerHTML += getBookCardTemplate(i);                 // ich sage das contentRef mit innerHTML das Template aus der getbookcardTemplate function hinzugefügt wird
    renderBookTitle(i);                                               // die function wird mit dem parameter i aus der schleife ausgeführt so wir der index weitergegeben und wir könnne uns ind der function durch den index den gewünschten wert rendern lassen                
    renderBookPrice(i);                                               // das selbe wie bei renderBookTitle
    renderBookAuthor(i);
    renderBookPbYear(i);
    renderBookGenre(i);
    renderBookLikes(i);
    setLikeButtonColor(i);
    }
  }
  

  //eine template function mit der ich einen container(bookCard) hinzufügen will
  function getBookCardTemplate(index) {                                                    // das Template was ich hinzufügen möchte
    return `<div class="book-Card">
                <h3 id="book-title-${index}" class="title">Titel</h3>
                <div class="img-section"><img src="./img/buch.png" alt="Buch"></div>
                <div class="price-like-section">
                  <div id="book-price-${index}" class="price">Preis</div>
                  <div class="like-button"><div id="book-likes-${index}">Likes</div><button id="like-button-${index}" onclick="addOneLike(${index}, this)" class="like-icon">&hearts;</button></div>
                </div>
                <div class="apg-section">
                  <div class="author-genre-section"><p>Author :</p><div id="book-author-${index}" >name</div></div>
                  <div class="author-genre-section"><p>Erscheinungsjahr :</p><div id="book-pbYear-${index}">name</div></div>
                  <div class="author-genre-section"><p>Genre :</p><div id="book-genre-${index}">name</div></div>
                </div>
            </div>`;
  } 

  // ich brauche eine function mit der ich jetzt den Buch title rendern kann
  function renderBookTitle(index) {
    let bookTitelRef = document.getElementById(`book-title-${index}`);        // ich bestimme den Ort wo ich den Title rendern will im Tmeplate mit der dynamischen Id
    bookTitelRef.innerHTML = books[index].name;                               // ich gebe der Variable den Wert was reinkommen soll--> imm array Books greifen ich auf den index(parameter)auf das objekt name zu und hole mir den Wert(titelnamen)
  }
  
  // ich brauche eine function um den preis der bücher zu rendern
  function renderBookPrice(index) {
    let bookPriceRef = document.getElementById(`book-price-${index}`);      // ähnlich wie die title render function , ich habe wieder einfach eine dynamische id benutzt mit der ich zugreifen kann
    let price = books[index].price.toFixed(2);                              // mit der to fixed methode lasse ich auf 2 nachkomma stellen anzeigen (übung dazu auf W3 ganz gut)
    bookPriceRef.innerHTML = price + "€" ;                                  // ich füge also den wert der neuen variablen den string € hinzu damit das in dem gerenderten dann schöner ausschaut
  }

  // ich brauche eine function die den author rendert
  function renderBookAuthor(index) {
    let bookAuthorRef = document.getElementById(`book-author-${index}`);   // im Prinzip das selbe wie bei den anderen render function
    bookAuthorRef.innerHTML = books[index].author;
  }


  // ich brauche eine function die das Erscheinungsjahr rendert
  function renderBookPbYear(index) {
    let bookPbYearRef = document.getElementById(`book-pbYear-${index}`);   // auch das selbe 
    bookPbYearRef.innerHTML = books[index].publishedYear;
  }




  // ich brauche eine function die das Genre rendert
  function renderBookGenre(index) {
    let bookGenreRef = document.getElementById(`book-genre-${index}`);     // auch das selbe
    bookGenreRef.innerHTML = books[index].genre;
  }

  // ich brauche eine function die die likes rendert
  function renderBookLikes(index) {
    let bookLikesRef = document.getElementById(`book-likes-${index}`);
    bookLikesRef.innerHTML = books[index].likes;
    
  }

  // ich brauche einen like button, dabei muss ich mehrere sachen beachten
  // der likebutton muss standardmäßig gerendert werden 
    
  // der button muss die funktion haben das er von einem grau zu einem roten  wechselt sobald man ihn drückt (onclick), zudem muss sich onclick die zahl im array der likes für das asugesuchte array erhöhen

  /* function addLike(button) {            // eine function mit einem parameter in diesem fall this: das bedeutet dieses Elemnt selber, damit kann ich also direkt auf diesen button zugreifen
    button.classList.toggle('liked')    // ich greife über den parameter(in dem fall this um auf den diesesn button zuzugreifen) auf die classList zu und toggle die Class liked
  } */

  // danach muss ich eine function schreiben die automatisch abfrägt ob im array liked : true oder false ist, bei false ist der likebutton noch nicht gedrückt also ohn hintergrund, bei true muss er bereits rot also gedrückt sein

  /* function addOneLike(index, button) {        // eine function mit der ich die likes um 1 erhöhen kann
    books[index].likes++;             // der index wird im Template weitergegeben und die eigenschaft likes wird um ++ also 1 erhöht
    renderBookLikes(index);           // ich render book likes nochmal neu da sich ja was verändert hat und ich die aktualisierten likes anzeigen lassen möchte
    button.classList.toggle('liked'); // ich verbinde die obere function mit der function hier in dem ich der function einfach 2 parameter gebe und beides ansprechen kann, so ändert sich die farbe und es wird +1 hinzugefügt

  } */

  //ich brauche jetzt eie function die nicht nur hinzufügt sondern wenn das like entfernt wird auch wieder -1 abzieht bei likes
  function addOneLike(index, button) {
    if (button.classList.contains('liked')) {           // ich stelle eine abfrage mit der methode .contains (das ist eine methode von classList um abzufragen ob das html element eine css klasse bereits hat('der name der css class'))
      books[index].likes--;                             // wenn das der fall ist, also es bereits geliked ist, dann -1 bei likes 
    } else {
      books[index].likes++;                             // wenn nicht dann wird +1 draufgezählt bei likes, ---> so verhindern wird, dass einfach jedesmal +1 auf likes gerechnet wird wenn wir den button betätigen
    }
  
    button.classList.toggle('liked');                   // ich übernehme den Teil aus der oberen function die ich nun nichtmehr nutzte --> es wird die class getoggled und die 'neuen' likes werden gerendert
    renderBookLikes(index);                
  }
    

  // als letztes für die likes brauche ich jetzt eine function die abfrägt im JSON ob das buch bereits geliked ist und dies dann auch so anzeigt
  // ich muss also einmal eine function haben die abfrägt ob true or flase und einmal eine die beim rendern der seite ausgeführt wird und dann die farbe des button updatet

  function isBookLiked(index) {
    return books[index].liked;      // ich gebe hier einfach nur zurück ob es true oder false ist
  }

  function setLikeButtonColor(index) {
    const likeButton = document.getElementById(`like-button-${index}`);       // ich definiere eine variable mit der dynamischen id aus der template function um so auf die richtige id zuzugreifen
  
    if (isBookLiked(index) === true) {                                         // ich stelle eine abfrage ob der return wert true ist, wenn ja dann add ich die class liked wenn flase entferne ich sie
      likeButton.classList.add('liked');
    } else {
      likeButton.classList.remove('liked');
    }
    
  }