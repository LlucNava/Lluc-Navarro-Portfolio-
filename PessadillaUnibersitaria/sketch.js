let v1, v2, v3, v4, v5, v6, v7, v8, v9, v10;// Els videos per a cada stat;
let stat = -2; //-2;// Estat inicial;
let I1, I2;//Imatges;
let b1, b2, b3, b4, b5, b6, b7, b8, b9;//BOTONS;
let jugar, credits;//Fotos dels botons de la portada(Pantalla d'inici) CREDITS I JUGAR;
let xt = 816, xt2 = 1056, xt3 = 936;//els 3 punts de X del triangle i com nomes es mou oritzontal es lo unic que fa falta;
let s = 1;//Per poder posar la velocitat del triangle del minijoc en negatiu;
let v = 1;//La velocitat en la que es mou el triangle;
let stat2 = -1;//stats dins del videojoc;
let temps = 0;//temps dins del minijoc;
let T = 1;
let c = 0;
let F1, F2, F3;//CREDITS DEL FINAL;//INSTRUCCIONS;//VIDEO DEL PRINCIPI;
let q = 0;//temps pels botons inicials;
let x = 0, y = 0;//grandaria i amplada dels botons inicials;
let tempo = 0, tempo1 = 0; tempo2 = 0, tempo3 = 0, tempo4 = 0; tempo5 = 0, tempo6 = 0, tempo7 = 0, tempo8 = 0, tempo9 = 0, tempo10 = 0, tempo11=0;
let z1 = 0, z2 = 0, z3 = 0, z4 = 0, z5 = 0, z6 = 0, z7 = 0, z8 = 0, z9 = 0, z10 = 0;//condicio per a que passin nomes desp de mostrar els botons;
let susto=0;//jumpscare per si et maten;
let jumpscare;//Susto x si falles;
let Inst;
let tempo22=0; let tempo20=0;let tempo21=0;let u=0;//Minijoc
let p=0;
let m=0;
let a;
let M1,M2;




//carrega de videos && imatges;
function preload() {
  //Bonons de la pàgina d'inici;
  v1 = createVideo('Videos editados/Video Inicial.mp4');
  v1.hide();
  v1.stop();
  jugar = loadImage("Videos editados/game (2).png");
  credits = loadImage("Videos editados/game (1).png");
  //So
  M1= loadSound('Videos editados/Musica pausa 1.mp3');
  M2= loadSound('Videos editados/Pulsar boton.mp3');
  //Bonons;
  a = loadImage("Videos editados/Adobe Express - file.png");
  b9 = loadImage("Videos editados/9.png");
  b8 = loadImage("Videos editados/8.png");
  b7 = loadImage("Videos editados/7.png");
  b6 = loadImage("Videos editados/6.png");
  b5 = loadImage("Videos editados/5.png");
  b4 = loadImage("Videos editados/4.png");
  b3 = loadImage("Videos editados/3.png");
  b2 = loadImage("Videos editados/2.png");
  b1 = loadImage("Videos editados/1.png");
  I2 = loadImage("Videos editados/game (1).png");
  I1 = loadImage("Videos editados/Portada Inicio.png");


 //Videos que no son história;
 F1 = createVideo('Videos editados/Creditos Finales.mp4');
 F1.hide();//CREDITS DEL FINAL;
 F1.stop();
 F2 = createVideo('Videos editados/Instrucciones (SIN GLITCH).mp4');
 F2.hide();//INSTRUCCIONS;
 F2.stop();
 F3 = createVideo('Videos editados/Video Inicio.mp4');
 F3.hide();//VIDEO DEL PRINCIPI;
 F3.stop();


 //Videos;
 
 Inst = createVideo('Videos editados/Instrucciones (SIN GLITCH).mp4');
 Inst.hide();
 Inst.stop();
 v2 = createVideo('Videos editados/Nodo 2. Salir al pasillo.mp4');
 v2.hide();
 v2.stop();
 v3 = createVideo('Videos editados/Nodo 3. Ver la clase.mp4');
 v3.hide();
 v3.stop();
 v4 = createVideo('Videos editados/Nodo 4. Salir de la clase.mp4');
 v4.hide();
 v4.stop();
 v5 = createVideo('Videos editados/Nodo 5. Acercarse al cuadro.mp4');
 v5.hide();
 v5.stop();
 v6 = createVideo('Videos editados/Nodo 6. Ir al ascensor.mp4');
 v6.hide();
 v6.stop();
 v7 = createVideo('Videos editados/Nodo 7. Parking.mp4');
 v7.hide();
 v7.stop();
 v8 = createVideo('Videos editados/Nodo 8. Salir corriendo.mp4');
 v8.hide();
 v8.stop();
 v9 = createVideo('Videos editados/Nodo 9. Coger una llave.mp4');
 v9.hide();
 v9.stop();
 v10 = createVideo('Videos editados/Nodo 10. Subida por las escaleras.mp4');
 v10.hide();
 v10.stop();


 jumpscare = createVideo("Videos editados/Jumpscare Chroma.mp4");
 jumpscare.hide();
 jumpscare.stop();
}




//Lienzo;
function setup() {
  createCanvas(1920, 1080);
  F3.play();
  F3.loop();
}


function draw() {
  //PÀG D'INICI;
//OK;
  if (stat == -2) {
    tempo = 0; tempo1 = 0; tempo2 = 0; tempo3 = 0; tempo4 = 0; tempo5 = 0; tempo6 = 0; tempo7 = 0; tempo8 = 0; tempo9 = 0; tempo10 = 0; tempo11=0;
    background(0);
    image(F3, 0, 0, width, height);
    F3.play();
    q = q + 1;//es temps
    x = x + 3;//grandaria
    y = y + 0.42;
    
    if (q > 100 && x < 550) {
      image(credits, 1100, 790, x, y);
      image(jugar, 1100, 940, x, y);
    } if (x >= 550) {
      z1 = 1;
      image(F3, 0, 0, width, height);
      image(credits, 1100, 790, 600, 80);
      image(jugar, 1100, 940, 600, 80);


      if (mouseX > 1100 && mouseX < 1700 && mouseY > 790 && mouseY < 870) {
        image(credits, 1075, 785, 650, 95);
      }
      if (mouseX > 1100 && mouseX < 1600 && mouseY > 940 && mouseY < 1020) {
        image(jugar, 1075, 935, 650, 95);
      }
      else { }


    }
  }
  //INICI CLASSE;
  //ok;
  if (stat == -1) {
    background(0);
    tempo8 = tempo8 + 1;
    image(v1, 0, 0, width, height);

    v1.play();

    if (tempo8 >= 780) {
      background(0,0,0,95);
      v1.pause();
      z2 = 1;
      if (mouseX > 700 && mouseX < 1100 && mouseY > 900 && mouseY < 960) {
        image(b1, 600, 900, 600, 80);//SALIR AL PASILLO;
      } else {
        image(b1, 700, 900, 400, 60);//SALIR AL PASILLO;
      }
    }
  }
  //PASSADIS;
  if (stat == 0) {
    background(0);
    tempo9 = tempo9 + 1;
    image(v2, 0, 0, width, height);
      //D
    if (tempo9 >= 840) {
      v2.pause();
      z3 = 1;
      if (mouseX > 350 && mouseX < 750 && mouseY > 900 && mouseY < 960) {
        image(b2, 250, 900, 600, 80);//VER LA CLASE
      } else {
        image(b2, 350, 900, 400, 60);//VER LA CLASE
      }
      //E
      if (mouseX > 1000 && mouseX < 1400 && mouseY > 900 && mouseY < 960) {
        image(b3, 900, 900, 600, 80);//IR AL ASCENSOR
      } else {
        image(b3, 1000, 900, 400, 60);//IR AL ASCENSOR
      }
    }
  }
  //SORTIR CLASSE;//v3
  if (stat == 1) {
    background(0);
    tempo2 = tempo2 + 1;
    image(v3, 0, 0, width, height);
    //D
    if (tempo2 >= 780) {
      //tempo2=785;
      v3.pause();
      z4 = 1;
      if (mouseX > 350 && mouseX < 750 && mouseY > 900 && mouseY < 960) {
        image(b4, 250, 900, 600, 80);//ACERCARSE
      } else {
        image(b4, 350, 900, 400, 60);//ACERCARSE
      }
      //E
      if (mouseX > 1000 && mouseX < 1400 && mouseY > 900 && mouseY < 960) {
        image(b5, 900, 900, 600, 80);//SALIR DE LA CLASE
      } else {
        image(b5, 1000, 900, 400, 60);//SALIR DE LA CLASE
      }
    }
   
  }
  //ANNAR AL ASCENSOR;
  if (stat == 2) {
    background(0);
    tempo3 = tempo3 + 1;
    v2.stop();
    image(v6, 0, 0, width, height);
    if (tempo3 >= 1260) {
      v6.pause();
      z5 = 1;
      if (mouseX > 700 && mouseX < 1100 && mouseY > 900 && mouseY < 960) {
        image(b6, 600, 900, 600, 80);//PARKING
      } else {
        image(b6, 700, 900, 400, 60);//PARKING
      }
    }
    //image(b6,700, 900, 400, 60);//PARKING
  }
  //APROPAR-SE AL QUADRE;
  if (stat == 3) {
    background(0);
    tempo4 = tempo4 + 1;
    image(v5, 0, 0, width, height);
   
    if (tempo4 >= 2100) {
      background(0,0,0,95);
      v5.pause();
      z5 = 1;
      if (mouseX > 700 && mouseX < 1100 && mouseY > 900 && mouseY < 960) {
        image(b6, 600, 900, 600, 80);//PARKING
      } else {
        image(b6, 700, 900, 400, 60);//PARKING
      }
    }
    
  }
  //SORTIR DE CLASSE;
  if (stat == 4) {
    background(0);
    tempo5 = tempo5 + 1;
    image(v4, 0, 0, width, height);
    if (tempo5 >= 1620) {
      v4.pause();
      z5 = 1;
      if (mouseX > 700 && mouseX < 1100 && mouseY > 900 && mouseY < 960) {
        image(b6, 600, 900, 600, 80);//PARKING
      } else {
        image(b6, 700, 900, 400, 60);//PARKING
      }
    }
  }
  //PARKING
  if (stat == 5) {
    background(0);
    tempo6 = tempo6 + 1;
    image(v7, 0, 0, width, height);
      //D
    if (tempo6 >= 4080) {
      v7.pause();
      z6 = 1;
      if (mouseX > 350 && mouseX < 750 && mouseY > 900 && mouseY < 960) {
        image(b7, 250, 900, 600, 80);//COGER LA LLAVE
      } else {
        image(b7, 350, 900, 400, 60);//COGER LA LLAVE
      }
      //E
      if (mouseX > 1000 && mouseX < 1400 && mouseY > 900 && mouseY < 960) {
        image(b8, 900, 900, 600, 80);//SALIR CORRIENDO
      } else {
        image(b8, 1000, 900, 400, 60);//SALIR CORRIENDO
      }
    }
  }


  //CLAU;
  if (stat == 8) {
    z7 = 1;
    background(0);
    tempo7++;
    image(v9, 0, 0, width, height);
 
    if (tempo7 >= 90) {
      c += 4;
      temps += (1 * T);
      xt += (v * s);
      xt2 += (v * s);
      xt3 += (v * s);
 
      if (stat2 == 0) {
        tempo22++;
        if (tempo22 >= 80) {
          v9.pause();
          v = 4;
          fill(255,255,255,210);
          triangle(xt, 405, xt2, 405, xt3, 513);
          fill(255, 0, 0,220);
          rect(240, 540, 1440, 162);
          fill(0, 255, 0, 220);
          rect(720, 540, 480, 162);
          image(a,860,550,140,130);
 
          if (xt2 >= 1680) {
            s = -1;
          }
          if (xt <= 240) {
            s = 1;
          }
          if (c == 1440) {
            c = 0;
            stat2 = 4;
          }
 
          fill(255);
          fill(57,255,20);
          text("CORRE QUE NOS COMEN", 650, 918);
          fill(255, 0, 0,220);
          rect(240, 945, 1440, 27);
          fill(0);
          rect(240, 945, c, 27);
          background(0,0,0,60);
        }
      }
 
      if (stat2 == 1) {
        tempo20++;
        if (tempo20 >= 80) {
          v9.pause();
          v = 9;
          fill(255,255,255,210);
          triangle(xt, 405, xt2, 405, xt3, 513);
          fill(255, 0, 0,220);
          rect(240, 540, 1440, 162);
          fill(0, 255, 0,220);
          rect(720, 540, 240, 162);
          image(a,765,553,130,130);
 
          if (xt2 >= 1680) {
            s = -1;
          }
          if (xt <= 240) {
            s = 1;
          }
          if (c == 1440) {
            c = 0;
            stat2 = 4;
          }
 
          fill(57,255,20);
          textSize(50);
          text("CORRE QUE NOS COMEN", 650, 918);
          fill(255, 0, 0,220);
          rect(240, 945, 1440, 27);
          fill(0);
          rect(240, 945, c, 27);
          background(0,0,0,60);
        }
      }
 
      if (stat2 == 2) {
        background(0,0,0,90);
        tempo21++;
        if (tempo21 >= 90) {
          v9.pause();
          v = 10;
          fill(255,255,255,210);
          triangle(xt, 405, xt2, 405, xt3, 513);
          fill(255, 0, 0,220);
          rect(240, 540, 1440, 162);
          fill(0, 255, 0,220);
          rect(720, 540, 120, 162);
          image(a,730,565,100,100);
 
          if (temps > 20 && temps < 130) {
            v = 17;
          } else {
            v = 8;
          }
          if (temps >= 130) {
            T = -1;
          } else if (temps <= 0) {
            T = 1;
            temps = 0;
          }
           if (xt2 >= 1680) {
            s = -1;
          }
          if (xt <= 240) {
            s = 1;
          }
          if (c == 1440) {
            c = 0;
            stat2 = 4;
          }
 
          fill(57,255,20);
          textSize(50);
          textFont('monospace');
          textSize(48);
          fill(0, 240, 0); // Verde neón clásico
          stroke(0, 150, 0); // Contorno más oscuro
          strokeWeight(2);
          text("CORRE QUE NOS COMEN", 635, 918);
          fill(255, 0, 0,220);
          rect(240, 945, 1440, 27);
          fill(0);
          rect(240, 945, c, 27);
          background(0,0,0,60);
        }
      }
      if (stat2 == 3){
        background(0,0,0,90);
        m++;
        v9.play();
        if(m>=450){
        v9.pause();
        background(0,0,0,70);
        if (mouseX > 700 && mouseX < 1100 && mouseY > 900 && mouseY < 960) {
          image(b9, 600, 900, 600, 80);
          } else {
          image(b9, 700, 900, 400, 60);
          }
        }
        }
      if (stat2 == 4) {
        background(0,0,0,90);
        image(jumpscare, 0, 0, width, height);
        jumpscare.play();
        jumpscare.loop();
        textFont('monospace');
        fill(255, 0, 0)
        textSize(200);
        strokeWeight(0);
        text("YOU LOSE", 550, 600);
         //NO
        textFont('monospace');
        textSize(48);
        fill(0, 240, 0); // Verde neón clásico
        stroke(0, 150, 0); // Contorno más oscuro
        strokeWeight(2);
        text("ESC TO RESTART",800, 680);
        
      }
    }
  }
  if (stat == 9) {
    u++;
    background(0);
    v7.stop();
    image(v8, 0, 0, width, height);
    if (u>=660) {
      v8.stop();
      image(F1, 0, 0, width, height);
      F1.play();
      F1.loop();
      fill(57,255,20);
       textSize(50);
       textFont('monospace');
       textSize(48);
      fill(0, 240, 0); // Verde neón clásico
      stroke(0, 150, 0); // Contorno más oscuro
      strokeWeight(2);
      text("F5 TO RESTART", 20, 60);
      p=1;
    }
 
  }


  //ESCAPAR y GUANYAR;
  if (stat == 10) {
    background(0);
    tempo = tempo + 1;
    v7.stop();
    image(v10, 0, 0, width, height);
    v10.play();
    if (tempo >= 2580) {
      v10.stop();
      image(F1, 0, 0, width, height);
      F1.play();
      F1.loop();
      fill(57,255,20);
      textSize(50);
      text("F5 TO RESTART", 20, 60);
    }
  }
  if(susto==1){
    //image(Boo,0,0,width,height);
  }
  if (stat == 20) {
    background(0);
    tempo11 = tempo11 + 1;
    image(Inst, 0, 0, width, height);
    Inst.play();
    if (tempo11 >= 100) {
      Inst.pause();
      fill(57,255,20);
      textSize(50);
       textFont('monospace');
       textSize(48);
      fill(0, 240, 0); // Verde neón clásico
      stroke(0, 150, 0); // Contorno más oscuro
      strokeWeight(2);
      text("ESC TO PLAY", 20, 60);
     
    }
  }
  //PER PODER VEURE L'ESTAT;
  /*fill(255);
  textSize(30);
  text(stat, 50, 60);
  textSize(30);
  text(stat2, 50, 100);*/
  }


//INTERACCÓ AL CLIKAR
function mousePressed() {
  if (stat == -2 && mouseX > 1100 && mouseX < 1700 && mouseY > 790 && mouseY < 870 && z1 == 1) {
    stat =20;
    M2.play();
    //sleep(10);//COM QUE EL BOTO ESTA SITUAT EN LA MATEIXA POSSICIÓ, SI NO POSSO SLEEP, ES SOLAPA;
  } else{}
  if (stat == -2 && mouseX > 1100 && mouseX < 1600 && mouseY > 940 && mouseY < 1020 && z1 == 1) {
    stat =-1;
    M2.play();
    v1.play();
    //sleep(10);//COM QUE EL BOTO ESTA SITUAT EN LA MATEIXA POSSICIÓ, SI NO POSSO SLEEP, ES SOLAPA;
  } else{}
    //SORTIR AL PASSADIS;
  if (stat == -1 && mouseX > 700 && mouseX < 1100 && mouseY > 900 && mouseY < 960 && z2 == 1) {
    v1.hide();
    v2.play();
    M2.play();
   stat = 0;
  } else{}
      //SORTIR CLASSE;
  if (stat == 0) {
    if(mouseX > 350 && mouseX < 750 && mouseY > 900 && mouseY < 960 ) {
      if(z3 == 1) {
        M2.play();
          v2.stop();
          v3.play();
         stat = 1;
      }
    }
  }else{}
  //ASCENSOR;
  if (stat == 0 && mouseX > 1000 && mouseX < 1400 && mouseY > 900 && mouseY < 960 && z3 == 1) {
    M2.play();
    v2.stop();
    v6.play();
    stat = 2;
   


  } else{}
  //APROPAR-SE AL QUADRE;
  if (stat == 1 && mouseX > 350 && mouseX < 750 && mouseY > 900 && mouseY < 960 && z4 == 1) {
    v5.play();
    M2.play();
    stat = 3;


  } else{}
  //SORTIR DE CLASSE,
  if (stat == 1 && mouseX > 1000 && mouseX < 1400 && mouseY > 900 && mouseY < 960 && z4 == 1) {
    v4.play();
    M2.play();
    stat = 4;
  } else
  //parking
  if ((stat == 4 || stat == 3 || stat == 2) && mouseX > 700 && mouseX < 1100 && mouseY > 900 && mouseY < 960 && z5 == 1) {
    v7.play();
    M2.play();
    stat = 5;
  } else
  //COGER LLAVE;
  if (stat == 5 && mouseX > 350 && mouseX < 750 && mouseY > 900 && mouseY < 960 && z6 == 1) {
    v9.play();
    M2.play();
   stat = 8;
   stat2 = 0;
  } else
 //SALIR CORRIENDO;
  if (stat == 5 && mouseX > 1000 && mouseX < 1400 && mouseY > 900 && mouseY < 960 && z6 == 1) {
    v8.play();
    M2.play();
    stat = 9;
  } else
 //ESCAPAR y GUANYAR;
  if ((stat2 == 3 || stat == 6 ) && mouseX > 700 && mouseX < 1100 && mouseY > 900 && mouseY < 960 && z7 == 1) {
    M2.play();
   stat = 10;
  }
}
function keyPressed() {
  if (stat == 20 && keyCode === ESCAPE && xt3 > 720 && xt3 < 1200) {
    q = 0;
    x = 0;
    y = 0;
    F3.play();
    F3.loop();
    M2.play();
    stat=-2;


  }else if(stat2 == 4 && keyCode === ESCAPE){
    q = 0;
    x = 0;
    y = 0;
    F3.play();
    F3.loop();
    M2.play();
    stat=-2;
  }else if(stat == 9 && keyCode === ESCAPE){
    q = 0;
    x = 0;
    y = 0;
    F3.play();
    F3.loop();
    M2.play();
    stat=-2;
  }
  if (stat2 == 0 && key == "a" && xt3 > 720 && xt3 < 1200) {
    M2.play();
    v9.play();
    stat2 = 1;
    c = 0;


  } else if (stat2 == 1 && key == "a" && xt3 > 720 && xt3 < 960) {
    M2.play();
    v9.play();
    stat2 = 2;
    c = 0;


  } else if (stat2 == 2 && key == "a" && xt3 > 720 && xt3 < 840) {
    M2.play();
    v9.play();
    stat2 = 3;
    c = 0;
  } else if ((stat2 == 0 && (xt3 < 720 || xt3 > 1200)) || (stat2 == 1 && (xt3 < 720 || xt3 > 960)) || stat2 == 2 && (xt3 < 720 || xt3 > 840)) {
    M2.play();
    v9.pause();
    stat2 = 4;


  }
}






