$(function(){
    $("#next").click(function(){
        var activeDiv=$('div.active');
        activeDiv.removeClass('active');
        if(activeDiv.next().length==0){
          $('div.myslide').eq(0).addClass('active');
        }else{
            activeDiv.next().addClass('active');
        }
        
    });

    $("#prev").click(function(){
        var activeDiv=$('div.active');
        activeDiv.removeClass('active');
        if(activeDiv.prev().length==0){
            $('div.myslide').eq(-1).addClass('active');
        }else{
            activeDiv.prev().addClass('active');
        }
        
    });
});