<?php 
// phpinfo();

$testHtml = '<a href="https://www.boogers.com">';
echo json_encode(['html' => $testHtml]); 
echo json_encode(['html' => $testHtml], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); 
