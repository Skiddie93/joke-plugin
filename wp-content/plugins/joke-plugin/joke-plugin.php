<?php
/*
Plugin Name: Joke plugin
Description: Displays joke of the day to user
Version: 1.1.0
Author: Domen
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
     exit;
 }

 require_once(plugin_dir_path(__FILE__).'includes/joke-plugin-includes.php');
