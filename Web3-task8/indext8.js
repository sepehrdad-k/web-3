$(".box").on("click",function(){
    if($(this).attr("mode")==="hide"){
        $(this).toggle(500).toggle(500)
        $(this).attr("mode","slide")
    }
    else if($(this).attr("mode")==="slide"){
        $(this).slideToggle(500).slideToggle(500)
        $(this).attr("mode","fade")
    }
    else if($(this).attr("mode")==="fade"){
        $(this).fadeToggle(500).fadeToggle(500)
        $(this).attr("mode","hide")
    }
})
