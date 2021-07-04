<?php

//include source files function
function joke_plugin_includes(){

//include style file
 wp_enqueue_style('jk_styles', plugins_url().'/joke-plugin/src/css/style.css');
}

//Executes the function
add_action('wp_enqueue_scripts', 'joke_plugin_includes');
