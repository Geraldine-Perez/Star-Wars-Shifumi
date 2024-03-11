/**
      * TERMES GENERIQUES
      */
     //Je souhaite pouvoir cliquer sur un des trois élements
     // où les trouver? comment les identifier?
     //en cliquant dessus, je joue contre l'ordinateur
     // l'ordinateur lance un chiffre au hasard (3 choix)
     //L'élément que j'ai cliqué a aussi une valeur
     //l'ordinateur compare les éléments
     // il voit si victoire, défaite ou égalité
     // il envoie un message
     //affichage des scores
     /**
      * TERMES TECHNIQUES
      */
     //je sélectionne les éléments individuellement dans le html
     //j'ajoute un écouteur d'évènement
     //le click lance le calcul de l'odinateur
     // le click a une valeur
     // il enregistre les valeurs, elles sont comparables (de type yoda, papier, stormtrooper)
     // il compare cette valeur random à la valeur de la touche appuyée
     // si gagné, message et affichage du score
     //si perdu, message et affichage du score
     //si égalité, message et affichage du score
     /**
      * JS OU PSEUDO CODE
      */
      //      ok, ça marche, maintenant la mise en page des scores
      /**
       * TERMES GENERIQUES
       */
      //je fais une partie
      //le score s'affiche à chaque manxhe sur un petie encart
      //je continue comme ça pendant 10 manches
      //au bout de 10, je peux démarrer une nouvelle partie de 10 manches
      //un encart central s'affiche avec mon score de la partie 
      // l'ordi me propose de rejouer ou pas
      /**
       * TERMES TECHNIQUES
       */
      //je mets en place une boucle qui compte les parties et s'arrête à 10
      //au bout de 10, je peux redémarrer une partie
      //où la démarrer? quelle boucle utiliser? où la terminer?  quels chiffres récupérer pour le score? 
      //le score s'affiche à chaque manche : petite modale
      //DOM  (quoi et où?) + bulma?
      //le jeu s'arrête après 10 manches et le score final de la partie s'affiche  sur une plus grande modale
      //DOM + nouvelle modale?
      //Comment utiliser le DOM? Où? Comment uriliser bulma?
      //affichage score
      //comment bien terminer la partie?
      //affichage proposant de continuer ou pas (dans cette même modale finale?)
      /**
       * JS OU PSEUDO CODE
       */
      //for(let i=0; i<10 ; i++) {}
      //erreurs de nommage DOM : utilser next sibling pour appel modal???


      const app = {


        text : {
             text1: '<p>Dagobah est une planète tellurique de l\'univers de fiction Star Wars. Située dans la Bordure extérieure, cette petite planète orbite autour de l\'étoile Dagobah Prime. Elle est notamment célèbre pour être le lieu où maître Yoda, dans son exil, forme Luke Skywalker à devenir un Chevalier Jedi.</p>',
             text2: '<p>Une Étoile de la mort est une station de combat spatiale de l’univers de fiction Star Wars. Mobile et de forme sphérique, elle a une taille équivalente à celle d\'une petite lune et a une puissance de feu suffisante pour anéantir une planète entière, grâce au superlaser dont elle est équipée.</p>',
             text3: '<p>Kashyyyk est une planète fictive de Star Wars. Située dans la Bordure médiane, elle orbite autour de l\'étoile homonyme. Elle est principalement connue pour être la planète d\'origine du personnage Chewbacca, célèbre membre de l\'Alliance rebelle</p>',
       },
 
       init: function() {
       app.closeAllModals();
       console.info('initialization');
       app.attempts = 0;
       console.log(app.attempts);
       app.pointWon = 0;
       app.score = [];
       app.listenHeroes(); 
       app.listenWorlds();
       
       },
 
       listenHeroes: function () {
             const yoda = document.getElementById("button1");
             yoda.addEventListener('click', app.gameYoda);
             const stormtrooper = document.getElementById('button2');
             stormtrooper.addEventListener('click', app.gameStormtrooper);
             const Chewbacca = document.getElementById('button3');
             Chewbacca.addEventListener('click', app.gameChewbacca);
 
       },
 
       listenWorlds: function () {
             const divWorld1 = document.querySelector('.monde1');
             const divWorld2 = document.querySelector('.monde2');
             const divWorld3 = document.querySelector('.monde3');
             const heroeWorld1 = divWorld1.firstElementChild;  
             heroeWorld1.addEventListener('click', app.showCard1);
             const heroeWorld2 = divWorld2.firstElementChild;  
             heroeWorld2.addEventListener('click', app.showCard2);    
             const heroeWorld3 = divWorld3.firstElementChild;  
             heroeWorld3.addEventListener('click', app.showCard3);  
             console.log(app.text.text1);   
       },
       
 
       showCard1: function () {
             console.log('bouh');
             const card = document.querySelector('.hidden');
             const cardContent = card.lastElementChild;
             console.log(cardContent);
             cardContent.innerHTML = app.text.text1;
             card.style.display = "inline-block";
             card.addEventListener('click', app.closeCard);
       },
 
       showCard2: function () {
             console.log('bouh');
             const card = document.querySelector('.hidden');
             const cardContent = card.lastElementChild;
             console.log(cardContent);
             cardContent.innerHTML = app.text.text2;
             card.style.display = "inline-block";
             card.addEventListener('click', app.closeCard);
       },
 
       showCard3: function () {
             console.log('bouh');
             const card = document.querySelector('.hidden');
             const cardContent = card.lastElementChild;
             console.log(cardContent);
             cardContent.innerHTML = app.text.text3;
             card.style.display = "inline-block";
             card.addEventListener('click', app.closeCard);
       },
 
       closeCard: function () {
             const card = document.querySelector('.hidden');
             card.style.display = "none";
       },
 
       gameYoda: function () {
             let playerChoice = 'yoda';
             //console.info(playerChoice);
             let compNumber =  Math.floor(Math.random()*3);
             //console.info(compNumber);
             if (compNumber===0) { newCompNumber = "stormtrooper";}
             else if (compNumber===1) { newCompNumber = "yoda";}
             else {newCompNumber = "Chewbacca";}
             //console.info(newCompNumber);
             app.play(playerChoice, newCompNumber);
 
       },
 
       gameStormtrooper: function() {
             let playerChoice = 'stormtrooper'; 
             //console.info(playerChoice);
             let compNumber =  Math.floor(Math.random()*3);  
             //console.info(compNumber); 
             if (compNumber===0) { newCompNumber = "stormtrooper";}
             else if (compNumber===1) { newCompNumber = "yoda";}
             else {newCompNumber = "Chewbacca";} 
             //console.info(newCompNumber);
             app.play(playerChoice, newCompNumber);
       },
 
       gameChewbacca: function() {
             let playerChoice = 'Chewbacca';
             //console.info(playerChoice);
             let compNumber =  Math.floor(Math.random()*3);   
             //console.info(compNumber);
             if (compNumber===0) { newCompNumber = "stormtrooper";}
             else if (compNumber===1) { newCompNumber = "yoda";}
             else {newCompNumber = "Chewbacca";}  
             //console.info(newCompNumber);
             app.play(playerChoice, newCompNumber);
 
       },
 
       play: function (playerChoice, newCompNumber) {
             app.attempts++;
 
             if ((playerChoice==="yoda" && newCompNumber==="stormtrooper") ||
             (playerChoice==="stormtrooper" && newCompNumber=== "Chewbacca") ||
             (playerChoice==="Chewbacca" && newCompNumber=== "yoda")) {     
             app.pointWon ++;
            // alert (`Bravoooo, tu as joué ${app.attempts} parties sur 10, tu en as gagné ${app.gameScore}`);
           // alert ('Bravo! Tu as gagné!');
             const modalJeu = document.querySelector('.modal');  
             const modBack = modalJeu.firstElementChild;
             const scoreGame = modBack.nextElementSibling;
             scoreGame.innerHTML = '<center><p>Bravo! Tu as gagné!</p></center>';
             scoreGame.style.fontSize = "2.5em";
             //console.log(modalJeu);
             modalJeu.classList.add('is-active');
             app.listenCloseAllModals();
            
         }
             else if ((playerChoice==="yoda" && newCompNumber==="Chewbacca") ||
             (playerChoice==="stormtrooper" && newCompNumber==="yoda") ||
             (playerChoice==="Chewbacca" && newCompNumber==="stormtrooper")
       ) {   
             //alert (`Perduuu, tu as joué ${app.attempts} parties sur 10, tu en as gagné ${app.gameScore}`);
             //alert ('Dommage! Tu as perdu');
             const modalJeu = document.querySelector('.modal');  
             const modBack = modalJeu.firstElementChild;
             const scoreGame = modBack.nextElementSibling;
             scoreGame.innerHTML = ' <center><p>Dommage, tu as perdu...</p> </center> ';
             scoreGame.style.fontSize = "2.5em";
             modalJeu.classList.add('is-active');
             app.listenCloseAllModals();
         }
             else if ((playerChoice === "stormtrooper" && newCompNumber === "stormtrooper") || 
             (playerChoice === "yoda" && newCompNumber === "yoda") || 
             (playerChoice === "papier" && newCompNumber === "papier")) {
             
             //alert (`Egalité, tu as joué ${app.attempts} parties sur 10, tu en as gagné ${app.gameScore}`); 
             //alert ('Egalité!');
             const modalJeu = document.querySelector('.modal');  
             const modBack = modalJeu.firstElementChild;
             const scoreFinalGame = modBack.nextElementSibling;
             scoreFinalGame.innerHTML = ' <center><p>Egalité!</p> </center>';
             scoreFinalGame.style.fontSize = "2.5em";
             modalJeu.classList.add('is-active');
             app.listenCloseAllModals();
       }
             app.game();
       },
 
       game: function () {
             console.log(app.attempts);
             if (app.attempts === 5) {
             //alert (`Parfait! tu viens de finir la partie! tu as joué ${app.attempts} parties sur 10, tu en as gagné ${app.pointWon}`); 
             app.closeAllModals();
             app.showFinalScore();    
       }    
       },
             
       showFinalScore: function () {
             app.score.push(app.pointWon);
             const modal = document.querySelector('.modal');  
             const modalFinaleJeu = modal.nextElementSibling;
             const modBack = modalFinaleJeu.firstElementChild;
             const modContent = modBack.nextElementSibling;
             const scoreGame = modContent.childNodes[3];
             scoreGame.innerHTML = `<center><p> Parfait! tu viens de finir la partie! tu as joué ${app.attempts} parties sur 10, tu en as gagné ${app.pointWon} </p></center>`;
             scoreGame.style.fontSize = "2em";
             modalFinaleJeu.classList.add('is-active');
             app.listenFinalModal();
       },
 
       listenCloseAllModals: function () {
             //fermer les modales en cliquant sur le fond de la modale ou le bouton fermer
 
             const modals = document.querySelectorAll('.modal');
             for (const modal of modals) {  
                   const modBack = modal.firstElementChild;
                   const btnC = modal.lastElementChild;
                   modBack.addEventListener('click', app.closeAllModals);
                   btnC.addEventListener('click', app.closeAllModals);     
             }                           
       },
 
       closeAllModals: function () {
             const modals = document.querySelectorAll('.modal');
             for (const modal of modals) {
                 modal.classList.remove('is-active');
             }
       },
 
       listenFinalModal: function () {
             //la fermer et arrêter partie
             const modal = document.querySelector('.finaleJeu'); 
             const modBack = modal.firstElementChild;
             const btnC = modal.lastElementChild;
             modBack.addEventListener('click', app.bye);
             btnC.addEventListener('click', app.bye); 
             console.log(btnC);
             
             // refaire une partie en appuyant sur le bouton 'jouer' 
             const modClose = modal.lastElementChild;
             const anotherGame = modClose.previousElementSibling;
             anotherGame.addEventListener('click', app.init);
             console.log(anotherGame);
       },
 
       bye: function () {
             //afficher la modale bye
             const modalBye = document.querySelector('.byeBye');
             const modBack = modalBye.firstElementChild;
             const modContent = modBack.nextElementSibling;
             const byeContent = modContent.childNodes[3];
             byeContent.innerHTML = `<p> ${app.pointWon} gagnés / ${app.attempts}  Bye bye les petits loups! </p>`;
             //byeContent.style.fontSize = "2em";
             //byeContent.style.color = "red";
             
 
             modalBye.classList.add('is-active');
             
             setTimeout(() => {
                  app.closeAllModals();
                  app.init();
             }, "3000");
             
       },
 };
      
 document.addEventListener('DOMContentLoaded', app.init);