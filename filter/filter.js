$(document).ready(function(){


    const cards=(data)=>{


        var card=$("<div>").attr({"class":"card-data"}).css({"display":"flex","item":"center"})
        var imgDiv=$("<div>").css({"width":"350px","padding":"10px","margin-top":"35px"})
        var img=$("<img>").attr("src",data.preview).css("width","100%")
        imgDiv.append(img)

        var textDiv=$("<div>").css({"padding":"10px"})
        var School=$("<h2>").text(data.school) 

        var lDiv=$("<div>").css({"display":"flex","align-items":"center"})
        var licon=$("<i>").attr("class","fas fa-map-marker-alt")
        var Address=$("<p>").text(data.location).css({"padding-left":"10px"}) 
        lDiv.append(licon,Address)
        var tDiv=$("<div>").css({"display":"flex","align-items":"center"})
        var ticon=$("<i>").attr("class","fas fa-university")
        var sTypeOfSchools=$("<p>").text(data.TypeOfSchools).css({"padding-left":"10px"}) 
        tDiv.append(ticon,sTypeOfSchools)
        var bDiv=$("<div>").css({"display":"flex","align-items":"center"})
        var bicon=$("<i>").attr("class","fas fa-graduation-cap")
        var sboard=$("<p>").text(data.board).css({"padding-left":"10px"}) 
        bDiv.append(bicon,sboard)
        var cDiv=$("<div>").css({"display":"flex","align-items":"center"})
        var cicon=$("<i>").attr("class","fas fa-flag")
        var sClassification=$("<p>").text(data.Classification).css({"padding-left":"10px"}) 
        cDiv.append(cicon,sClassification)
        var eDiv=$("<div>").css({"display":"flex","align-items":"center"})
        var eicon=$("<i>").attr("class","fas fa-building")
        var sEstablished=$("<p>").text(data.established).css({"padding-left":"10px"}) 
        eDiv.append(eicon,sEstablished)
        var sFee=$("<p>").text("Fee:"+data.Fee).css({"padding-left":"10px"}) 

         textDiv.append(School,lDiv,tDiv,bDiv,cDiv,eDiv,sFee)
         card.append(imgDiv,textDiv)

      return card

    }

    var coEd;

    var boys;

    var girls;

    var daySchool;

    var fullBoarding;

    var DayBoarding;

    var cbsc;

    var icsc;

    var ib;

    var igcse;

    var coedCheckBox=$("#Co-ed")

    var boysCheckBox=$("#Boys")

    var girlsCheckBox=$("#Girls")

    var daySchoolCheckBox=$("#Day")

    var fullBoardingCheckBox=$("#Boarding")

    var DayBoardingCheckBox=$("#Day-Boarding")

    var cbscCheckBox=$("#CBSC")

    var icscCheckBox=$("#ICSC")

    var ibCheckBox=$("#IB")

    var igcseCheckBox=$("#IGCSE")

   
    
    
var input_s=$('#input')
   
    var List= localStorage.getItem("schools")===null? []: JSON.parse(localStorage.getItem("schools"))
    
    coEd =List.filter((item)=>item.Classification == "Co-Ed School" );

    boys=List.filter((item)=>item.Classification ==  "Boys School" );

    girls=List.filter((item)=>item.Classification ==  "Girls School" );

    daySchool=List.filter((item)=>item.TypeOfSchools ==  "Day School" );

    fullBoarding=List.filter((item)=>item.TypeOfSchools ==  "Full Boarding" );

    DayBoarding=List.filter((item)=>item.TypeOfSchools ==  "Day Boarding" );

    cbsc=List.filter((item)=>item.board ==  "CBSE");

    icsc=List.filter((item)=>item.board ==  "ICSE" );

    ib=List.filter((item)=>item.board ==  "IB" );

    igcse=List.filter((item)=>item.board ==  "IGCSE" );
    
   
      for(var i=0; i<List.length ; i++){

              $(".total-school").text(List.length)

        $(".right-side").append(cards(List[i]))
    
    }

    coedCheckBox.click(function(){
        $(".card-data").css("display","none")

        for(var i=0; i<coEd.length ; i++){
              $(".total-school").text(coEd.length)

            $(".right-side").append(cards(coEd[i]))
        
        }

    })

    boysCheckBox.click(function(){
        $(".card-data").css("display","none")

        for(var i=0; i<boys.length ; i++){
            $(".total-school").text(boys.length)

            $(".right-side").append(cards(boys[i]))
        
        }
    })

    girlsCheckBox.click(function(){

        $(".card-data").css("display","none")

        for(var i=0; i<girls.length ; i++){
            $(".total-school").text(girls.length)

            $(".right-side").append(cards(girls[i]))
        
        }

    })

    daySchoolCheckBox.click(function(){

        $(".card-data").css("display","none")

        for(var i=0; i<daySchool.length ; i++){
            $(".total-school").text(daySchool.length)

            $(".right-side").append(cards(daySchool[i]))
        
        }

    })

    fullBoardingCheckBox.click(function(){
        $(".card-data").css("display","none")

        for(var i=0; i< fullBoarding.length ; i++){
            $(".total-school").text(fullBoarding.length)

            $(".right-side").append(cards(fullBoarding[i]))
        
        }

    })

    DayBoardingCheckBox.click(function(){
        $(".card-data").css("display","none")

        for(var i=0; i< DayBoarding.length ; i++){
            $(".total-school").text(DayBoarding.length)

            $(".right-side").append(cards(DayBoarding[i]))
        
        }

    })

    cbscCheckBox.click(function(){
        $(".card-data").css("display","none")

        for(var i=0; i< cbsc.length ; i++){
            $(".total-school").text(cbsc.length)

            $(".right-side").append(cards(cbsc[i]))
        
        }

    })

    icscCheckBox.click(function(){
        $(".card-data").css("display","none")

        for(var i=0; i< icsc.length ; i++){
            $(".total-school").text(icsc.length)

            $(".right-side").append(cards(icsc[i]))
        
        }

    })

    ibCheckBox.click(function(){
        $(".card-data").css("display","none")

        for(var i=0; i< ib.length ; i++){
            $(".total-school").text(ib.length)

            $(".right-side").append(cards(ib[i]))
        
        }
    })

    igcseCheckBox.click(function(){
        $(".card-data").css("display","none")

        for(var i=0; i< igcse.length ; i++){
            $(".total-school").text(igcse.length)

            $(".right-side").append(cards(igcse[i]))
        
        }
    })

    input_s.on({

        "input":function(e){
            $(".card-data").css("display","none")

       var serach=List.filter((item)=>item.school.toLowerCase().includes(e.target.value)=== true ||
       item.location.toLowerCase().includes(e.target.value)=== true ||
       item.TypeOfSchools.toLowerCase().includes(e.target.value)=== true||
       item.Classification.toLowerCase().includes(e.target.value)=== true||
       item.board.toLowerCase().includes(e.target.value)=== true

       )
       $(".total-school").text(serach.length)
       
       for(var j=0;j<serach.length;j++){
        $(".right-side").append(cards(serach[j]))
       }
        }
    
    })

    
    $('input:checkbox').change((e) => {
        

        if(e.target.checked){
    
        }else{
        $(".card-data").css("display","none")

            for(var i=0; i<List.length ; i++){
                $(".total-school").text(List.length)

                $(".right-side").append(cards(List[i]))
            
            }
        }
        
        
    })


    


    
   

      

      








    
   


})