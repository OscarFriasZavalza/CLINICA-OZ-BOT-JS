function getBotResponse(input) {
    
    //ubicacion
    if (input == "donde estan?") {
        return "Av.Mexico #5164 Pon.";
    } else if (input == "ubicacion") {
        return "Av.Mexico #5164 Pon.";
    }
    else if (input == "donde se encuentran?") {
        return "Av.Mexico #5164 Pon.";
    } 
    else if (input == "calle") {
        return "Av.Mexico #5164 Pon.";
    } 
    else if (input == "como los encuentro?") {
        return "Av.Mexico #5164 Pon.";
    } 
    else if (input == "ubicacion") {
        return "Av.Mexico #5164 Pon.";
    }  

    //requisitos densotometria
    if (input == "requisitos densitometria") {
        return "Los requisitos para la $Densitometria son: No ingerir suplementos de calcio (de todas las presentaciones orales sea tableta, capsula o polvo para diluir) mínimo 72 horas antes del examen.";
    } else if (input == "densitometria") {
        return "Los requisitos para la $Densitometria son: No ingerir suplementos de calcio (de todas las presentaciones orales sea tableta, capsula o polvo para diluir) mínimo 72 horas antes del examen.";
    }

    if (input == "donde estan?") {
        return "Av.Mexico #5164 Pon.";
    } else if (input == "ubicacion") {
        return "Av.Mexico #5164 Pon.";
    }
    //ultrasonido
    if (input == "requisitos ultrasonido") {
        return "Los requisitos para el $ultrasonido son ropa cómoda y suelta, no llevar joyas o accesorios.";
    } else if (input == "ultrasonido") {
        return "Los requisitos para el $ultrasonido son ropa cómoda y suelta, no llevar joyas o accesorios.";
    }

    //tomografias
      
      if (input == "requisitos tomografia") {
        return "Los requisitos para la $tomografia son no llevar objetos de metal como joyas, anteojos, dentaduras postizas, y broches para el cabello pueden afectar las imágenes de TAC. Déjelos en su casa o quíteselos antes del examen.";
    } else if (input == "tomografias") {
        return "Los requisitos para el $ultrasonido son ropa cómoda y suelta, no llevar joyas o accesorios.";
    }

      //electrocardiograma
      
      if (input == "requisitos electrocardiograma") {
        return "El $electrocardiograma No requiere de requisitos especiales por lo que se pueden ingerir alimentos y medicamentos si así lo señala el médico.";
    } else if (input == "electrocardiograma") {
        return "El $electrocardiograma No requiere de requisitos especiales por lo que se pueden ingerir alimentos y medicamentos si así lo señala el médico.";
    }
//rayos x
    if (input == "requisitos rayos x") {
        return "Para $Rayosx Podría tener que quitase parte de su ropa y/o ponerse una bata para el examen. Quítese las joyas, los aparatos dentales no fijos, los anteojos, y cualquier objeto de metal o ropa que pudiera interferir con las imágenes por rayos X.";
    } else if (input == "rayos x") {
        return "Para $Rayosx Podría tener que quitase parte de su ropa y/o ponerse una bata para el examen. Quítese las joyas, los aparatos dentales no fijos, los anteojos, y cualquier objeto de metal o ropa que pudiera interferir con las imágenes por rayos X.";
    }
//resonancia magnetica
    if (input == "requisitos resonancia") {
        return "Para la $Resonancia Deberá estar en ayunas (únicamente de sólidos) desde 2 horas antes de realizar la prueba. Es necesario acudir sin maquillaje y con ropa fácil de quitar y poner y cumplir las normas de higiene mínimas.";
    } else if (input == "resonancia") {
        return "Para la $Resonancia Deberá estar en ayunas (únicamente de sólidos) desde 2 horas antes de realizar la prueba. Es necesario acudir sin maquillaje y con ropa fácil de quitar y poner y cumplir las normas de higiene mínimas.";
    }
    //papanicolau
    if (input == "requisitos papanicolau") {
        return "Los requisitos para el $Papanicolau son: No estar menstruando, No haber tenido relaciones sexuales un par de días antes de la prueba, La prueba se debe realizar a la mitad del ciclo menstrual.";
    } else if (input == "papanicolau") {
        return "Los requisitos para el $Papanicolau son: No estar menstruando, No haber tenido relaciones sexuales un par de días antes de la prueba, La prueba se debe realizar a la mitad del ciclo menstrual.";
    }
    //preuba de laboratorio
    if (input == "requisitos prueba de laboratorio") {
        return "Los requisitos para las pruebas de $Laboratorio son: Evitar alimentos y bebidas específicos como carnes cocidas, tes de hierbas o alcohol,No comer en forma excesiva el día antes de la prueba,no fumar,evitar actividades especificas, como ejercicio vigoroso, relaciones sexuales evitar tambien cierto tipo de medicamentos o suplementos ";
    } else if (input == "laboratorio") {
        return "Los requisitos para las pruebas de $Laboratorio son: Evitar alimentos y bebidas específicos como carnes cocidas, tes de hierbas o alcohol,No comer en forma excesiva el día antes de la prueba,no fumar,evitar actividades especificas, como ejercicio vigoroso, relaciones sexuales evitar tambien cierto tipo de medicamentos o suplementos ";
    }
     //ubicacion
     if (input == "donde estan?") {
        return "Av.Mexico #5164 Pon.";
    } else if (input == "ubicacion") {
        return "Av.Mexico #5164 Pon.";
    }
    else if (input == "donde se encuentran?") {
        return "Av.Mexico #5164 Pon.";
    } 
    else if (input == "calle") {
        return "Av.Mexico #5164 Pon.";
    } 
    else if (input == "como los encuentro?") {
        return "Av.Mexico #5164 Pon.";
    } 
    else if (input == "ubicacion") {
        return "Av.Mexico #5164 Pon.";
    }  

    // saludos
    if (input == "hola") {
        return "hola ¿Como estas?";
    } else if (input == "Adios") {
        return "nos vemos despues, Adios";
    } else if (input == "¿como estas?") {
        return "me encuentro muy bien y usted?";
    } else if (input == "que tal") {
        return "hola como estas?";
    }  else if (input == "Adios") {
        return "nos vemos despues, Adios";
    }
    else {
        return "Prueba preguntandonos de nuevo\n Especifique el nombre del estudio del que desea saber los requisitos.\n especifique su pregunta";
    }
   
}