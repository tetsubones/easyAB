(function($){
$(function(){
  $('#purchase-button').easyab({
    'slot': 2,
    'name': 'gs-purchase-button',
    'alternatives': [{
      'alternative'://値は何でもOK
        function($this) {
          $this
            .text('btn-success1');
        }
    },
    {
      'alternative'://値は何でもOK
        function($this) {
          $this
            .text('btn-success2');
        }
    }]
  });
/*
  $('#purchase-button2').easyab({
    'name': 'button-click',
    'event-label' : 'btnlabel',
    'event-value' : 'tes',
    'alternatives': [{
      'alternative'://値は何でもOK
        function($this) {
          $this.text('btn-A');
        }
    }]
  });
*/
})
})(jQuery)
