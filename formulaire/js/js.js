$(function(){
     $(".erreur").fadeOut();
     var valid = true;
     $("#envoyer").click(function(){

        if($("#nom").val() == ""){
            $("#nom").next(".erreur").text("remplir ce champ");
            $("#nom").next(".erreur").fadeIn();
            valid = false;
        }
        else if(!$("#nom").val().match(/^[a-zA-Z]+$/)){
            $("#nom").next(".erreur").text("nom invalide");
            $("#nom").next(".erreur").fadeIn();
            valid = false;
          }
          else{
            $("#nom").next(".erreur").fadeOut();
          }
        if($("#prenom").val() == ""){
            $("#prenom").next(".erreur").text("remplir ce champ");
            $("#prenom").next(".erreur").fadeIn();
            valid = false;
        }
        else if(!$("#prenom").val().match(/^[a-zA-Z]+$/)){
            $("#prenom").next(".erreur").text("prenom invalide");
            $("#prenom").next(".erreur").fadeIn();
            valid = false;
        }
        else{
            $("#prenom").next(".erreur").fadeOut();
        }

        if($("#pseudo").val() == ""){
            $("#pseudo").next(".erreur").text("remplir ce champ");
            $("#pseudo").next(".erreur").fadeIn();
            valid = false;
        }
        else if(!$("#pseudo").val().match(/^[a-zA-Z0-9]+$/)){
            $("#pseudo").next(".erreur").text("pseudo invalide");
            $("#pseudo").next(".erreur").fadeIn();
            valid = false;
        }
        else{
            $("#pseudo").next(".erreur").fadeOut();
        }

        if($("#radio1").is(":checked") || $("#radio2").is(":checked")) {
            $("#radio").next(".erreur") .fadeOut();
        }
        else if(!$("#radio1").is(":checked") && !$("#radio2").is(":checked")){
            $("#radio").next(".erreur").fadeIn().text("remplir ce champ");
            valid = false;
         }

             if($("#adress").val() == ""){
                $("#adress").next(".erreur").text("remplir ce champ");
                $("#adress").next(".erreur").fadeIn();
                valid = false;
            }
            else if(!$("#adress").val().match(/^[#.0-9a-zA-Z\s,-]+$/)){
                $("#adress").next(".erreur").text("adress invalide");
                $("#adress").next(".erreur").fadeIn();
                valid = false;
            }
            else{
                $("#adress").next(".erreur").fadeOut();
            }

            if($("#email").val() == ""){
                $("#email").next(".erreur").text("remplir ce champ");
                $("#email").next(".erreur").fadeIn();
                valid = false;
            }
            else if(!$("#email").val().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                $("#email").next(".erreur").text("email invalide");
                $("#email").next(".erreur").fadeIn();
                valid = false;
            }
            else{
                $("#email").next(".erreur").fadeOut();
            }

            if($("#pays").val() == ""){
                $("#pays").next(".erreur").text("remplir ce champ");
                $("#pays").next(".erreur").fadeIn();
                valid = false;
            }
            else if(!$("#pays").val().match(/^[a-zA-Z]+$/)){
                $("#pays").next(".erreur").text("pays invalide");
                $("#pays").next(".erreur").fadeIn();
                valid = false;
              }
              else{
                $("#pays").next(".erreur").fadeOut();
              }


              if($("#number").val() == ""){
                $("#number").next(".erreur").text("remplir ce champ");
                $("#number").next(".erreur").fadeIn();
                valid = false;
            }
            else if(!$("#number").val().match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)){
                $("#number").next(".erreur").text("numero invalide");
                $("#number").next(".erreur").fadeIn();
                valid = false;
              }
              else{
                $("#number").next(".erreur").fadeOut();
              }


              if($("#password1").val() == ""){
                $("#password1").next(".erreur").text("remplir ce champ");
                $("#password1").next(".erreur").fadeIn();
                valid = false;
            }
            else if(!$("#password1").val().match(/^[a-zA-Z0-9]+$/)){
                $("#password1").next(".erreur").text("password invalide");
                $("#password1").next(".erreur").fadeIn();
                valid = false;
              }
              else{
                $("#password1").next(".erreur").fadeOut();
              }

              if($("#password2").val() == ""){
                $("#password2").next(".erreur").text("remplir ce champ");
                $("#password2").next(".erreur").fadeIn();
                valid = false;
            }
              else if($("#password2").val() != $("#password1").val()){
                $("#password2").next(".erreur").text("password n'est pas identique");
                $("#password2").next(".erreur").fadeIn();
                valid = false;
            }
            else{
                $("#password2").next(".erreur").fadeOut();
            }



        return valid;
     });
 });