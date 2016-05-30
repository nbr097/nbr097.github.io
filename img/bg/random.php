<?php
    // Keep this file in the same directory as your images.
    // Images must be labeled x.jpg with 'x' being a number.

    // Set this to the amount of images you have.
    $numberOfImages = 7;

    $selectedImage = (rand(1,$numberOfImages));

    header("Content-Type: image/jpg");
    header("Content-Length: " . filesize($selectedImage . ".jpg"));

    readFile($selectedImage . ".jpg");
