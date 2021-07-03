<?php

//include source files function
function joke_plugin_includes(){

//include style file
 wp_enqueue_style('jk_styles', plugins_url().'/joke-plugin/src/css/style.css');
 wp_enqueue_script('jk_script', plugins_url().'/joke-plugin/src/js/app.js');
}
add_action('wp_enqueue_scripts', 'joke_plugin_includes');
