<?php
/*
Plugin Name: Joke plugin
Description: Displays joke of the day to user.
Version: 1.0.0
Author: Domen Petrovcic
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
     exit;
 }

//Calls includes file
 require_once(plugin_dir_path(__FILE__).'includes/joke-plugin-includes.php');

//Calls main widget file
 require_once(plugin_dir_path(__FILE__).'src/main.php');
