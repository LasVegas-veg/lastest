
<!DOCTYPE html>
<html>
<head>
  <!-- Yandex.Metrika counter -->
  <script type="text/javascript" >
     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

     ym(64371460, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
     });
  </script>
  <noscript><div><img src="https://mc.yandex.ru/watch/64371460" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  <!-- /Yandex.Metrika counter -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <title>Кликер</title>
  <link rel="stylesheet" href="./style.css">
  <link rel="icon" href="mouse.png">
  <script data-ad-client="ca-pub-2851711974641817" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>
<body>
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<body>
  <main>
    <h2>Игра кликер</h2>
    <h1 id ="score">0$<img src="coins.png"></h1>
    <h3 id="level">Ваш уровень: 1</h2>
    <button id="clickbtn" onclick="clickBtn()">+$</button>
    <br><input type="button" value="Прокачать на 1 уровень|-100$" onclick="update()">
    <br><input type="button" value="Прокачать на 2 уровня|-150$" onclick="update1()">
    <br><input type="button" value="Прокачать на 3 уровня|-250$" onclick="update2()">
    <br><input type="button" value="Прокачать на 10 уровней|-500$" onclick="update3()">
    <br><input type="button" value="Автокликер|-10000$" onclick="auto()">
    <br><input type="button" value="Прокачаться на свой уровень" onclick="dialog()">
    <form name=MyForm>
      <input name="stopwatch" size="10" value="00:00:00.00" disabled>
    </form>

  </main>
</body>
  <script  src="./script.js"></script>

  <script src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js"></script>

<script>
// Sends event to client
vkBridge.send('VKWebAppInit');
</script>

</body>
</html>
