(function($){
$(function(){
//テスト1
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
  });
  
  $('#purchase-button').click(function(){
    ga('send', 'event', 'category', 'action','label','value');
  });

//テスト2
  $('#purchase-button2').easyab({
    'slot': 2,
    'name': 'p130109_66v',
    'alternatives': [
    {
     'alternative':
        function($this) {
          $this
            .text('momomomo1');
        }
    }]
  });
  
  $('#purchase-button2').click(function(){
    ga('send', 'event', 'category', 'action','label','value');
  });


})
})(jQuery)
