<?php

function fetch_url($url){

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_USERAGENT,
        'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');


    $feed_data = curl_exec($ch);
    curl_close($ch);

    return $feed_data;

}

$root = "https://api.github.com/repos/CompSocUC/";
$repo = "Assets"; // change as needed
$dir = $_GET['dir'];
$query = $root.$repo."/contents/".rawurlencode($dir)."/";
// echo $query;

$json_object = fetch_url($query);

print($json_object);

?>
