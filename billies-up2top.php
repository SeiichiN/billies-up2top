<?php
/*
 * @wordpress-plugin
 * Plugin Name: Billies Up2Top
 * Description: Smooth scroll to Top. このプラグインを有効化するだけです。
 * Version: 0.2
 * Author: Seiichi Nukayama
 * Author URI: http://www.billies-works.com/
 */

function billies_up2top_addfiles() {
  wp_enqueue_script('up2top_js', plugins_url('up2top.js', __FILE__), array(), '1.0', true);
  wp_localize_script('up2top_js', 'view_vars', array(
	'path' => plugins_url('', __FILE__),
  ));
  wp_enqueue_style('up2top_css', plugins_url('up2top.css', __FILE__));
}
add_action('wp_enqueue_scripts', 'billies_up2top_addfiles');



/* 修正時刻: Tue Aug 17 09:26:56 2021 */
