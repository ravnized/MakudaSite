<?php
$dir_name = dirname(__FILE__);
$root = $_SERVER['DOCUMENT_ROOT'];
$this_folder = substr($dir_name, strlen($root), strlen($dir_name));
?>

<div class="menuWrapper">
  <div class="exit" onclick="animateMenuReverse()">
  <div class='columns is-vcentered'>
    <div class='column'>
  <a><span>c</span><span>l</span><span>o</span><span>s</span
          ><span>e</span></a></div>
          <div class='column'>
    <a
    role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
</div>
</div>
  </div>

  <div class="buttonMenu">
    <div class="letterWrapper">
      <a href="<?=$this_folder;?>/../index.php">
        <span class="letter">H</span>
        <span class="letter">O</span>
        <span class="letter">M</span>
        <span class="letter">E</span>
      </a>
    </div>
  </div>

  <div class="buttonMenu">
    <div class="letterWrapper">
      <a href="<?=$this_folder;?>/../about.php">
        <span class="letter">A</span>
        <span class="letter">B</span>
        <span class="letter">O</span>
        <span class="letter">U</span>
        <span class="letter">T</span>
      </a>
    </div>
  </div>
  <div class="buttonMenu">
    <div class="letterWrapper">
      <a href="<?=$this_folder;?>/../work.php">
        <span class="letter">W</span>
        <span class="letter">O</span>
        <span class="letter">R</span>
        <span class="letter">K</span>
        <span class="letter">S</span>
      </a>
    </div>
  </div>
  <div class="buttonMenu">
    <div class="letterWrapper">
      <a href="<?=$this_folder;?>/../contacts.php">
        <span class="letter">C</span>
        <span class="letter">O</span>
        <span class="letter">N</span>
        <span class="letter">T</span>
        <span class="letter">A</span>
        <span class="letter">C</span>
        <span class="letter">T</span>
        <span class="letter">S</span>
      </a>
    </div>
  </div>
</div>

<div class="menu-background">
  <img
    src="<?=$this_folder;?>/../media/img/Freccia_Menu.png"
    style="height: 100%; width: 100%"
    alt=""
  />
</div>