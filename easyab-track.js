(function($){

//テスト1
  $('#contents-top').easyab({
    'slot': 3,
    'name': 'top2-test',
    'pageview' : true,
    'alternatives': [
    {
     'alternative':
        function($this) {
          $this.html('パターン0 ：<div class="slide"><ul><li><a href="/project/16"><img src="/data/Projects/67ac411a6d_200_300.jpg" alt="お酒を扱う人も飲む人もみんなワクワクする！驚きのある楽しい日本酒を作りたい！" width="200" height="300" /></a></li><li><a href="/project/15"><img src="/data/Projects/5a44597103_200_300.JPG" alt="145年目の新たなる挑戦、「大福パイ」でお土産菓子の座を狙う！" width="200" height="300" /></a></li><li><a href="/project/14"><img src="/data/Projects/7bd2a095d0_200_300.jpg" alt="伝統の製法で作る稲庭うどん。伝統と革新のジレンマを超え、新商品を開発したい！" width="200" height="300" /></a></li><li><a href="/project/12"><img src="/data/Projects/3dc93374b5_200_300.JPG" alt="フルーツ×漬物＝「フルーツがっこ」？秋田ならではの新ジャンルフードを開拓したい！" width="200" height="300" /></a></li><li><a href="/project/11"><img src="/data/Projects/b810ae4dd9_200_300.jpg" alt="日本のコメ食を変えたい！胚芽米だからこそ出来る、米の新しい食べ方を一緒に考えてください！" width="200" height="300" /></a></li><li><a href="/project/10"><img src="/data/Projects/ac7c1693b1_200_300.jpg" alt="秋田名産を米粉で包むスペシャル餃子を作りたい" width="200" height="300" /></a></li><li><a href="/project/9"><img src="/data/Projects/fb9db054d3_200_300.jpg" alt="パパもママも！毎日の食卓が笑顔になる日本酒セットを作りたい！" width="200" height="300" /></a></li><li><a href="/project/8"><img src="/data/Projects/6e4db5180e_200_300.jpg" alt="味噌の「たまり」を使って、つぶつぶプチプチの 新食感調味料を作りたい！ " width="200" height="300" /></a></li><li><a href="/project/7"><img src="/data/Projects/2e981df732_200_300.jpg" alt="ぶなの天然酵母を使った世にも珍しいビールをみなさんの意見でリニューアルしたい！ " width="200" height="300" /></a></li><li><a href="/project/6"><img src="/data/Projects/656537a807_200_300.jpg" alt="革新的な餃子のタレを作って、食卓にムーブメントを起こしたい！ " width="200" height="300" /></a></li><li><a href="/project/5"><img src="/data/Projects/add016c421_200_300.jpg" alt="秋田・角館を代表する菓子「もろこし」の伝統を守る老舗が、稲庭うどんのお菓子にチャレンジ!?" width="200" height="300" /></a></li><li><a href="/project/4"><img src="/data/Projects/62e47a8004_200_300.jpg" alt="郷土料理「だまこ」には無限の可能性!?鍋以外でも活躍できるはず！" width="200" height="300" /></a></li><li><a href="/project/3"><img src="/data/Projects/c84adf7186_200_300.jpg" alt="いぶりがっこの進化形フードを全国に届けたい！" width="200" height="300" /></a></li><li><a href="/project/1"><img src="/data/Projects/3f83d33da5_200_300.jpg" alt="世界遺産が育てたあわびで絶品メニュー開発！" width="200" height="300" /></a></li></ul></div><div class="about-area container"><i class="icon icon-about-top">全国にねむる</i><div class="about-bnr-top"><p class="disp-none">「うまいもん」をプロデュースしよう！</p><p class="link"><a href="/info/about">うまPについてもっと知りたい</a></p></div><div class="about-bnr-btm"><p class="disp-none">「うまいもん」を作りたいという全国の作り手さんを応援し、みんなで一緒に「うまいもん」を作り上げて行きましょう！</p><p class="btn-about-bnr"><a href="#contents" id="testButton1"><img src="/img/btn_about_bnr_search.gif" alt="まずはプロジェクトを探す" width="298" height="55"></a></p></div></div><div class="bnr-area container"><div class="row"><div class="span4 text-right"><a href="/akita/"><img src="/img/bnr/bnn_131015_2.jpg" alt="うまいもんプロデューサー秋田" width="265" height="75"></a></div><div class="span4 text-center"><a href="/project/10"><img src="/img/bnr/bnn_131128_2.jpg" alt="発売決定!!きりたんぽ鍋風餃子ができるまで" width="265" height="75"></a></div><div class="span4 text-left"><a href="/campaign/chance"><img width="265" height="75" alt="うまいもんチャンス！がんばるプロデューサーほど豪華なうまいもんがもらえる！" src="/img/bnr/bnn_130925_3.jpg"></a></div></div></div>')
//          .css({'visibility' : 'visible'});
          $('#testButton1').on('click',function(){
            ga('send', 'event', 'category1', 'action','label','value');
            return false;
          });

        }
    },
    {
     'alternative':
        function($this) {
          $this.html('パターン1 ：<div class="pref-area container"><div class="title-pref"><p><img width="940" height="300" alt="うまいもんプロデューサー秋田" src="/img/prefecture_img/akita/img_main.jpg"></p>  <div class="pref-batch akita clearfix">  <p class="supported-by">  <span><img width="74" height="30" alt="Supported by" src="/img/prefecture_img/akita/img_supported_by.gif"></span><!--  --><a target="_blank" href="http://www.akita-bank.co.jp/index.htm"><img width="93" height="30" alt="秋田銀行" src="/img/prefecture_img/akita/img_sponsor_akita_bank.gif"></a><!--  --><span class="pref-image"><img width="85" height="117" alt="秋田県" src="/img/prefecture_img/akita/img_pref_akita.png"></span>  </p>  </div></div><div class="pref-note row"><p class="pref-note-title span9"><span class="pref-icon"><img width="61" height="54" alt="秋田の" src="/img/prefecture_img/akita/icon.png"></span><span class="pref-text">「うまいもん」をみんなでプロデュースしよう！</span></p><div class="btn-about span3"><a href="/info/about" id="testButton2">うまいもんプロデューサーとは</a></div></div></div>')
//          .css({'visibility' : 'visible'});
          $('#testButton2').on('click',function(){
            ga('send', 'event', 'category2', 'action','label','value');
            return false;
          });
        }
    },
    {
     'alternative':
        function($this) {
          $this.html('パターン2 ：<h1><img id="testButton3" width="940" height="330" alt="うまいもんチャンス！がんばるプロデューサーほど豪華なうまいもんがもらえる！" src="/img/ttl_chance.jpg"></h1>')
//          .css({'visibility' : 'visible'});
          $('#testButton3').on('click',function(){
            ga('send', 'event', 'category3', 'action','label','value');
            return false;
          });
        }
    }]
  });



})(jQuery)
