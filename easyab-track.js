(function($){
$(function(){
//ƒeƒXƒg1
  $('#purchase-button').easyab({
    'slot': 2,
    'name': 'top-test',
    'pageview' : true,
    'alternatives': [
    {
     'alternative':
        function($this) {
          $this
            .text('btn-success1');
        }
    },
    {
     'alternative':
        function($this) {
          $this
            .text('btn-success2');
        }
    }]
  });
  
  $('#purchase-button').click(function(){
    ga('send', 'event', 'category', 'action', {'nonInteraction': 1});
  });


})
})(jQuery)
