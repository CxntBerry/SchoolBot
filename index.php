<!DOCTYPE html>
<html lang="en">
  <head>
    <title>
      localhost api
    </title>
    <meta charset="application/json" />
    <?php
    header("Access-Control-Allow-Origin: https://course.apexlearning.com/");
    ?>
  </head>
  <body>
    <?php echo($_GET["link"]) ?>
  </body>
</html>
