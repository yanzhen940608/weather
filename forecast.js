$(function(){
    $(".btn").click(function(){
    var content=$(".form-control").val();
    if(content=="Beijing"){
        content="北京"
    }
    if(content=="Shanghai"){
        content="上海"
    }
    if(content=="Guangzhou"){
        content="广州"
    }
    if(content=="Shenzhen"){
        content="深圳"
    }
    if(content=="Jinan"){
        content="济南"
    }
    if(content=="Dalian"){
        content="大连"
    }
    
    $.ajax({
        type:"get",
        url:"http://wthrcdn.etouch.cn/weather_mini",
        data:{
                city:content
        },
        dataType:"json",
        success:function(backData){
               //console.log(backData);
        var src="";
        for(var i=0;i<backData.data.forecast.length;i++){
            if(backData.data.city=="北京"){
                    backData.data.city="Beijing"
            }
            if(backData.data.city=="上海"){
                    backData.data.city="Shanghai"
            }
            if(backData.data.city=="广州"){
                    backData.data.city="Guangzhou"
            }
            if(backData.data.city=="深圳"){
                    backData.data.city="Shenzhen"
            }
            if(backData.data.city=="济南"){
                    backData.data.city="Jinan"
            }
            if(backData.data.city=="大连"){
                    backData.data.city="Dalian"
            }
            src+='<div class="dd">'+'<p>'+backData.data.city+'</p>'+'<ul>'+'<li>'+'date '+backData.data.forecast[i].date+'</li>'+
                '<li>'+'high temp '+backData.data.forecast[i].high+'</li>'+'<li>'+'low temp '+
                backData.data.forecast[i].low+'</li>'+'</ul>'+'</div>'
            }
            $(".d1").html(src);
            }
        })
    })
        $("a").click(function(){
            //e.preventDefault();
            
            $(".form-control").val($(this).text());

            $(".btn").trigger("click");
            
    })


    $(".form-control").val("Beijing");
    $(".btn").trigger("click");

    })