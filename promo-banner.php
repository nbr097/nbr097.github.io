<?php
// Set timezone to Australian Eastern Standard Time
date_default_timezone_set('Australia/Brisbane');

// Set the promotion end date (adjust as needed)
// This will now use AEST/AEDT automatically based on daylight saving
$endDate = strtotime('2026-01-25 23:59:59'); // End of February 1, 2026
$today = time();

// Set proper image headers
header('Content-Type: image/jpeg');
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

if ($today <= $endDate) {
    // Show promotion banner
    $imageUrl = 'https://cdn11.bigcommerce.com/s-a579g2rqqa/images/stencil/original/image-manager/desktop-homepage-banner-backtowork1-230126.jpg';
    $imageData = file_get_contents($imageUrl);
    echo $imageData;
} else {
    // After end date, show a blank 1x1 transparent GIF
    // This makes the banner "disappear"
    echo base64_decode('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
}
?>
