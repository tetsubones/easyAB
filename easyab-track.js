(function($){
$(function(){
  $('#purchase-button').easyab({
    'slot': 2,
    'name': 'gs-purchase-button',
    'alternatives': [{
      'alternative'://�l�͉��ł�OK
        function($this) {
          $this
            .text('btn-success1');
        }
    },
    {
      'alternative'://�l�͉��ł�OK
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
      'alternative'://�l�͉��ł�OK
        function($this) {
          $this.text('btn-A');
        }
    }]
  });
*/
})
})(jQuery)
