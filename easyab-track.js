(function($){
//$('#contents-top').css({'visibility' : 'hidden'});

//テスト1
  $('#contents-top').easyab({
    'slot': 2,
    'name': 'top-test',
    'pageview' : true,
    'alternatives': [
    {
     'alternative':
        function($this) {
          $this.html('<div class="pref-area container"><div class="title-pref"><p><img width="940" height="300" alt="うまいもんプロデューサー秋田" src="/img/prefecture_img/akita/img_main.jpg"></p>  <div class="pref-batch akita clearfix">  <p class="supported-by">  <span><img width="74" height="30" alt="Supported by" src="/img/prefecture_img/akita/img_supported_by.gif"></span><!--  --><a target="_blank" href="http://www.akita-bank.co.jp/index.htm"><img width="93" height="30" alt="秋田銀行" src="/img/prefecture_img/akita/img_sponsor_akita_bank.gif"></a><!--  --><span class="pref-image"><img width="85" height="117" alt="秋田県" src="/img/prefecture_img/akita/img_pref_akita.png"></span>  </p>  </div></div><div class="pref-note row"><p class="pref-note-title span9"><span class="pref-icon"><img width="61" height="54" alt="秋田の" src="/img/prefecture_img/akita/icon.png"></span><span class="pref-text">「うまいもん」をみんなでプロデュースしよう！</span></p><div class="btn-about span3"><a href="/info/about" id="testButton2">うまいもんプロデューサーとは</a></div></div></div>')
//          .css({'visibility' : 'visible'});
        }
    },
    {
     'alternative':
        function($this) {
          $this.html('<h1><img id="testButton3" width="940" height="330" alt="うまいもんチャンス！がんばるプロデューサーほど豪華なうまいもんがもらえる！" src="/img/ttl_chance.jpg"></h1>')
//          .css({'visibility' : 'visible'});
        }
    }]
  });

  $('#testButton1').on('click',function(){
    ga('send', 'event', 'category1', 'action','label','value');
    return false;
  });
  $('#testButton2').on('click',function(){
    ga('send', 'event', 'category2', 'action','label','value');
    return false;
  });
  $('#testButton3').on('click',function(){
    ga('send', 'event', 'category3', 'action','label','value');
    return false;
  });


})(jQuery)
