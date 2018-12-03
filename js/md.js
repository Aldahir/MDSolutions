$('#feedbackSubmit').click(function(e){
  $.ajax({
    url: $('#feedbackForm').attr('action'),
    data: $('#feedbackForm').serialize(),
    dataType:"text",
    type:"get",
    async:false,
    beforeSend:function(){},
    complete:function(){},
    success:function(d){
      console.log(d);
      $('#feedbackForm').each(function(){
        this.reset();
      })
    },
    error:function(a,b,c){
      toast(b,1)
    }
  })
  e.preventDefault();
})

$('#feedbackForm').submit(function(p) {
  p.preventDefault();
  return false;
})

$('#sbt').click(function(e){
  $.ajax({
    url: $('#form-search').attr('action'),
    data: $('#form-search').serialize(),
    dataType:"text",
    type:"get",
    async:false,
    beforeSend:function(){},
    complete:function(){},
    success:function(d){
      console.log(d);
      $('#form-search').each(function(){
        this.reset();
      })
    },
    error:function(a,b,c){
      toast(b,1)
    }
  })
  e.preventDefault();
})

$('#form-search').submit(function(p) {
  p.preventDefault();
  return false;
})
function toast(message, type){
  var cl = null;
  if (type == 0){ cl = "alert-success"} 
  else if (type == 1) { cl = "alert-danger" } 
  else if (type == 2) { cl = "alert-warning" } 
  else if (type == 3) { cl = "alert-info" } 
  else { cl = "alert-default" }
  
  $("toast").html('<div class="alert '+cl+'" role="alert">'+message+'</div>').fadeIn("fast", function(){$(this).delay(5000).fadeOut()})

}

function initilize_components(){
  var rs= $('body').find('toast') == true ? console.log("Pronto para avançar"):$("body").append('<toast class="toast"></toast>');
  return rs
}

function goTo(url){
  window.location.href = url
}