(function($){
$(function(){
  $('#purchase-button').easyab({
    'slot': 2,
    'name': 'button-test',
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
  })
  
  $('#purchase-button').click(function(){
    ga('send', 'event', 'category', 'action','label','value');
  });
})
})(jQuery)
