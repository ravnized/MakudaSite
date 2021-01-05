<?php
  $dir_name = dirname(__FILE__);
  $root = $_SERVER['DOCUMENT_ROOT'];
  $this_folder = substr($dir_name, strlen($root), strlen($dir_name));
?>

<nav
  aria-label="main navigation"
  class="navbar is-fixed-top is-black"
  role="navigation"
>
  <div class="navbar-brand">
    <a class="navbar-item" href="<?=$this_folder;?>/../index.php">
      <img
        height="28"
        src="<?=$this_folder;?>/../media/img/LogoIcona_PNG_Negativo(1).png"
        width="28"
      />
    </a>
  </div>
  <div class="navbar-menu" id="navBarMakuda">
    <div class="navbar-end">
      <div class="navbar-item">
        <a
          aria-expanded="false"
          aria-label="menu"
          class="navbar-burger"
          onclick="animateMenu()"
          role="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </div>
</nav>