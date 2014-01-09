(function($){
$(function(){
  $('#purchase-button').easyab({
    'slot': 2,
    'name': 'gs-purchase-button',
    'alternatives': [{
      'alternative':
        function($this) {
          $this
            .text('btn-success');
        }
    }]
  });
})
})(jQuery)
