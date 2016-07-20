
#<span class="fragment">Hey!</span>
##<span class="fragment">I'm <span class="special">Lara</span></span> <span class="fragment">(not Laura)</span>

<br>
<br>
###<span class="fragment">[notlaura.com](http://notlaura.com) <span class="grey">//</span> @laras126</span>

/--/

<h1>Coding for WordPress</h1>
<h2 class="fragment special">Part 2</h2>

/--/

<ul class="unstyle-list bold">

<li><h3>1. General Programming Concepts</h3></li>
<li><h3>2. WordPress Specifics</h3></li>
<li><h3>3. Examples</h3></li>
</ul>

/---/


<h1 class="fragment">Programming Concepts</h1>

/--/

<ul class="unstyle-list bold">
<li><h2 class="fragment">1. Variables</h2></li>
<li><h2 class="fragment">2. Logic</h2></li>
<li><h2 class="fragment">3. Functions</h2></li>
</ul>

/--/

<img width="400" src="img/sushi/sushi-cat1.jpg" alt="">

/---/

<h1>Variables</h1>

/--/

<pre><code class="bigger language-php">
$name = "Spicy Tuna"; // String
$amount = 3; // Integer
$is_delicious = true; // Boolean
</code></pre>

/--/

<pre><code class="bigger language-php">
	// Array
	$sushi = array(
		'California Roll',
		'Spicy Tuna',
		'Sweet Potato',
		'Tex Mex'
	);
</code></pre>

/--/

<img src="img/sushi/blues-clues.gif" alt="">

/---/

<h1>Logic</h1>

/--/

<pre class="fragment"><code class="bigger language-php">$loves_sushi = true;

if ($loves_sushi == true) {
	get_sushi();
} else {
	go_hungry();
}
</code></pre>

/--/

<pre class="fragment"><code class="bigger language-php">$loves_sushi = true;

if ($loves_sushi == true):
	get_sushi();
else:
	go_hungry();
endif;
</code></pre>

/--/

<pre class="fragment"><code class="bigger language-php">
	$loves_sushi = true;
	$loves_pizza = true;

	if ($loves_sushi == true):
		get_sushi();
	elseif ($loves_pizza == true):
		get_pizza();
	else:
		go_hungry();
	endif;
</code></pre>

/--/


<pre class="fragment"><code class="language-php">$loves_sushi = true;
$loves_pizza = true;
$loves_beer = true;
$loves_chocolate = true;

if ($loves_sushi == true && $loves_beer != true):
	get_sushi();
	get_sake();
elseif ($loves_pizza == true && $loves_beer == false):
	get_pizza();
	get_wine();
elseif ($loves_pizza == true && $loves_chocolate != true):
	get_tiramisu();
elseif ($loves_sushi == true && $loves_pizza == true && $loves_beer == true):
	get_sushi();
	get_pizza_with_anchovies();
	get_beer();
else:
	go_hungry();
endif;
</code></pre>

/--/

<img src="img/sushi/spaghetti-monster.jpg" class="unstyle-img" alt="">

/---/

<h1>Functions (and loops)</h1>

/--/

<pre class="fragment"><code class="bigger language-php">function get_food($food) {
	find_restaurant($food);
	if(restaurant_has_food()) {
		return $food;
	} else {
		return "Out of " . $food;
	}
}
</code></pre>

<pre class="fragment"><code class="bigger language-php">get_food('sushi');
get_food('pizza');
</code></pre>

/--/

<pre class="fragment"><code class="bigger language-php">
$foods = array(
	'pizza',
	'sushi',
	'beer'
);

foreach($type in $foods) {
	get_food($type);
}

</code></pre>

/--/

<pre class="fragment"><code class="bigger language-php">$categories = get_categories();

foreach($categories as $cat) {
	echo $cat->name;

	if($cat->name == 'featured') {
		echo "Featured!";
	}
}
</code></pre>

/--/

<img src="img/wp-justw.png" alt="" class="unstyle-img">

/---/

<h1>WordPress is made of functions.</h1>
<h2 class="fragment">Lots and lots of functions.</h2>
<h2 class="fragment">Do not battle them.</h2>

/--/

<a href="https://developer.wordpress.org/reference/">
	<img src="img/wp-code-ref.png" alt="">
</a>

/---/

<h1>Actions and Filters</h1>
<h2>Hooking into WordPress's functions.</h2>

/--/

<div class="text-left">

<h2>Actions</h2>
<h3>Adding functionality to WordPress at a specific point.</h3>
</div>

<pre class="fragment"><code style="font-size: 24px" class="language-php">
function wpnyc_styles() {
	wp_enqueue_style( 'wpnyc-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'wpnyc_styles' );
</code></pre>

/--/

<div class="text-left">

<h2>Filters</h2>
<h3>Altering or adding to data returned by a function.</h3>
</div>

<pre class="fragment"><code style="font-size: 24px" class="language-php">
function wpnyc_body_classes($classes) {
	if(wp_is_mobile()) {
		$classes[] = 'is-mobile';
	}
	return $classes;
}
add_filter( 'body_class', 'wpnyc_body_classes' );
</code></pre>


/--/

<code class="big">functions.php</code>

/---/

# Template Tags
<h2>Return content to display in a template.</h2>

/--/

<pre class="fragment"><code class="bigger language-php">the_post_thumbnail();
has_post_thumbnail();
get_post_thumbnail();
</code></pre>
<br>
<hr>
<pre class="fragment"><code class="bigger language-php">the_title();
get_the_title();
</code></pre>

/--/

<div class="text-left">
<div class="fragment">
	<code class="big special">get_whatever</code>
	<h3>Retrieve, do not output, data.</h3>
</div><br>
<div class="fragment">
	<code class="big special">the_whatever</code>
	<h3>Retrieve and output data.</h3>
</div>
<br>
<div class="fragment">
	<code class="big special">has_whatever</code>
	<h3>Check if data exists. Returns a Boolean.</h3>
</div>

/--/

<div class="fragment code-title">PHP in page.php</div>
<pre class="fragment"><code class="bigger language-php">if (has_post_thumbnail()) {
	the_post_thumbnail();
}
</code></pre>
<br>
<div class="fragment code-title">Rendered HTML</div>
<pre class="fragment"><code class="bigger language-markup"><img width="1600" height="1200" src="http://wp.local/wp-content/uploads/2011/07/sur.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Big Sur">
</code></pre>
/--/

<a target="blank" href="https://www.google.com/search?site=&source=hp&q=change+post+thumbnail+size&oq=change+post+thumbnail+size">
	<img class="unstyle-img" src="img/sushi/google2.png" alt="">
</a>

/--/

<div class="text-left">
	<h2>Option 1</h2>
	<h3>Change the default post thumbnail size.</h3>
	<br>
	<div class="code-title">functions.php</div>
	<pre class="fragment"><code class="bigger language-php" style="font-size: 32px">set_post_thumbnail_size( '500', '400', true );</code></pre>
</div>

/--/

<div class="text-left">
	<h2>Option 2</h2>
	<h3>Change the value in Media Settings; add a parameter.</h3>
	<img class="fragment" src="img/media-settings.png" alt="">
</div>

/--/

<div class="text-left">
	<h3>Then Regenerate Thumbnails...</h3>
	<img width="700" src="img/regenerate_thumbs.png" alt="">
</div>

/--/

<div class="text-left">
	<h3>Then add this...</h3>
	<br>
	<div class="code-title">page.php</div>
<pre class="fragment"><code class="bigger language-php">if (has_post_thumbnail()) {
	the_post_thumbnail('thumbnail');
}</code></pre>
</div>

/--/

<img class="fragment" src="img/sushi/puppysteps.jpg" alt="">

/---/

<h1>Conditional Tags</h1>
<h2>They're <a href="https://codex.wordpress.org/Conditional_Tags">handy</a>!</h2>
/--/

<div class="code-title">page.php</div>
<pre class="fragment"><code class="bigger language-php">if ( !is_front_page() ) {
	the_post_thumbnail();
}</code></pre>

/--/

<div class="code-title">single.php</div>
<pre class="fragment"><code style="font-size: 30px" class="language-php">if ( has_tag('nice-tag') ) {
	the_title('<h2 class="nice-title">', '</h2>');
} else {
	the_title('<h2>', '</h2>');
}</code></pre>

/--/

<div class="code-title">archive.php</div>
<pre class="fragment"><code style="font-size: 30px" class="language-php">if ( is_post_type_archive('recipe') ) {
	get_template_part('partials/header', 'recipe');
} else {
	get_template_part('partials/header', 'archive');
}</code></pre>

/--/

<img src="img/sushi/sushi-cat2.jpg" alt="">

/---/

<h1>Arrays and Queries</h1>
<h2>Ugh...<span style="font-family: Monaco;">$args</span>.</h2>

/--/

<div class="code-title">page.php</div>
<pre class="fragment"><code class="bigger language-php">$args = array(
	'post_type' => 'post',
	'tag' => 'featured'
);

$query = new WP_Query($args);

</code></pre>

/--/

<div class="code-title">page.php</div>
<pre class="fragment"><code class="bigger language-php">while ( $query->have_posts() ) :
	$query->the_post();
	// Stuff to display for each post.
endwhile;
</code></pre>

/--/

<img src="img/sublime.png" class="unstyle-img" alt="">

/---/

<h1>Some Sage Advice</h1>

/--/

<div class="text-left">
<h3 class="fragment">Do not try to memorize anything. Ever.</h3>
<h3 class="fragment">You will be Googling more than coding.</h3>
<h3 class="fragment">There are many ways to do something.</h3>
<h3 class="fragment">Understand <strong>most</strong> of the code you copy.</h3>
<h3 class="fragment">Look at the dates of what you reference.</h3>
<h3 class="fragment">Paste the link to copied code in a comment.</h3>
<h3 class="fragment">Proper indenting is REALLY important.</h3>
<h3 class="fragment">A solution with less code is usually better.</h3>
</div>


/--/

<div class="illustration unstyle-img">![Tackle Box Logo](img/tbx-logo1.svg)</div>
<h3><a href="http://tackleboxschool.com">tackleboxschool.com</a></h3>

/--/

<img src="img/lara-snow.jpg" alt="">

/--/

#Thanks!

###<span class="fragment">[notlaura.com](http://notlaura.com) <span class="grey">//</span> @laras126</span>





