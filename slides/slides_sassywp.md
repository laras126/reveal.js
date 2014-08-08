
#Sassy WordPress

--

<div class="small-code full">
	<pre>
		<code class="lang-scss">
		@mixin gs-media($prefix, $type: false){
			@if $prefix == d {
				@if ($type == min) or ($type == min-max) { 
					@media only screen and (min-width: 990px) { @content; } 
				} @else { @content; }
			}
			@else if $prefix == t {
				@if ($type == min) or ($type == min-max) { 
					@media only screen and (min-width: 768px) { @content; } 
				} @else { @content; }
			}
		}
		</code>
	</pre>
	<p>Mixin from <a href="http://gridsetapp.com" target="blank">Gridset</a></p>
</div>

--

<div class="sixcol first">
	<img src="../img/sass/scared.png" alt="Scared!" class="unstyle-img">	
</div>

<div class="sixcol last fragment fade-in">
	<h1 class="center-vert">Yeah, same.</h1>
</div>

---


<div class="fourcol first unstyle-img fragment" data-fragment-index="1">
	<span class="fragment" data-fragment-index="2">
		<h3>Code (Sublime)</h3>
		<ul>
			<li><span class="fragment highlight-red" data-fragment-index="7">Preprocessors: Sass, Less, Stylus</span></li>
			<li>Bootstrap, Foundation, Bourbon, Compass</li>
			<li>Coffeescript, HAML, Jade</li>
		</ul>
	</span>
</div>


<div class="fourcol unstyle-img fragment" data-fragment-index="3">
	<span class="fragment" data-fragment-index="4">
		<h3>Tasks (CLI)</h3>
		<ul>
			<li>Jekyll</li>
			<li>Yoeman</li>
			<li>Grunt, Gulp</li>
		</ul>
	</span>
</div>

<div class="fourcol last unstyle-img fragment" data-fragment-index="5">
	<span class="fragment" data-fragment-index="6">
		<h3>Deploy (your server)</h3>
		<ul>
			<li>Version control (Github, SVN)</li>
			<li>Beanstalk, d.ploy</li>
			<li>Heroku</li>
		</ul>
	</span>
</div>

---

<h1><span class="fragment highlight-blue" data-fragment-index="1">Pre</span><span class="fragment highlight-blue" data-fragment-index="2">process</span>ors</h1>


--

<video controls autoplay loop src="../img/sass/compiler.mov"></video>

--

<a href="http://sassmeister.com/gist/e22487f52db9cdcff165" target="blank">
![Sassmeister](../img/sass/sassmeister.png)
</a>

--

<span class="unstyle-img">
	![Preprocessors](../img/sass/preprocessors.png)
</span>

<aside class="notes">
	<ul>
		<li>[Sass](http://sass-lang.com)</li>
		<li>[Less](http://lesscss.org)</li>
		<li>[Stylus](http://learnboost.github.io/stylus/)</li>
		<li>[Sass vs. Less](http://css-tricks.com/sass-vs-less/)</li>
	</ul>
</aside>

--

<span class="unstyle-img">
	![Sass wins](../img/sass/thesassway.svg)
</span>

<aside class="notes">
	[Sass Community](http://sass-lang.com/community)
</aside>

---

#Sass <span class="grey">vs</span> SASS

--

<div class="tencol last">
	<h1 class="text-left">
		<span class="fragment roll-in"><span class="special">S</span>yntactically</span> <br>
		<span class="fragment roll-in"><span class="special">A</span>wesome</span> <br>
		<span class="fragment roll-in"><span class="special">S</span>tyle</span> <br>
		<span class="fragment roll-in"><span class="special">S</span>heets</span>
	</h1>
</div>

--

<span class="unstyle-img">![Sass](../img/sass/sass-logo.png)</span>

---

#<pre class="heading">.sass</pre> <span class="grey">vs</span> <pre class="heading">.scss</pre>

<aside class="notes">
	[Sass vs SCSS - which syntax is better?](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better)
</aside>

--

<div class="sixcol first small-code">
<p class="code-title">style<span class="special">.sass</span></p>

<pre class="language-sass">
<code>$gray: #a4a4a4
$blue: #237FA9

.block
	color: $gray

	.sub-block
		color: $blue


</code>
</pre>

</div>

<div class="sixcol last small-code ">
<p class="code-title">style<span class="special">.scss</span></p>

<pre ><code>$gray: #a4a4a4;
$blue: #237FA9;

.block {
	color: $gray;

	.sub-block{
		color: $blue;
	}
}
</code>
</pre>
</div>


--

#<pre class="heading text-center">.scss</pre>

---

#Where to start?

--
#1
##Install
##http://sass-lang.com/install

---

#2
##Change where your stylesheet is

--

<pre>functions.php</pre>

	function my_styles() {
		wp_enqueue_style('my_styles', get_template_directory_uri() . '/assets/css/main.min.css', false);
	}
	add_action('wp_enqueue_scripts', 'my_styles', 100);

---

#3
##Make a lot of files

<aside class="notes">
	[Structuring a Project](http://thesassway.com/beginner/how-to-structure-a-sass-project)
</aside>

--

###Like this:

	scss/
		modules/              # Common modules
			_all.scss         # Include to get all modules
			_utility.scss     # Module name
			_mixins.scss 	  # Mixins
			_settings.scss 	  # Variables

		partials/             # Partials
			_all.scss         # imports for all mixins + global project variables
			_buttons.scss     # buttons
			_figures.scss     # figures
			_grids.scss       # grids
			_typography.scss  # typography
			_reset.scss       # reset
	
		vendor/               # CSS or Sass from other projects
			_fancybox.scss
			_jquery.ui.core.scss
	
		main.scss            # primary Sass file

--

#Overkill?
##<p class="fragment">Maybe, but not really.</p>

--
###Import 'em
<pre>main.scss</pre>

	// Modules and Variables
	@import "partials/base";

	// Partials
	@import "partials/reset";
	@import "partials/typography";
	@import "partials/buttons";
	@import "partials/figures";
	@import "partials/grids";
	// ...

	// Third-party
	@import "vendor/colorpicker";
	@import "vendor/jquery.ui.core";
	@import('settings');
	@import('typography');

---

#4
##Code!
###(But not in main.scss)

--

#Variables
###(My favorite)

--

	$base: 1.6rem;
	$sml: $base*0.8;
	
	$h1: $base*3;
	$h2: $base*2.2;
	$h3: $base*1.4;
	$h4: $base*1.2;
	$h5: $base;
	$h6: $sml;

--

	// nl colors

	$dark-blue:      	#237fa9;
	$offwhite:     		#f4f7f9;

	$dark-accent: 		$dark-blue;

	$link-color:		$dark-accent;
	$link-hover: 		$med-accent;

--

	$screen-sm:			481px;
	$screen-md: 		768px;
	$screen-lg: 		1040px;

---

#Media Query Bubbles
###(My second favorite)

--

###Encourages breakpoints via design rather than device

	$screen-sm: 320px;

	.profile-pic {
		@media only screen and (max-width: $screen-sm) {
			width: 100px;
			float: none;
	  }
	}


--

#Functions
(not my favorite but cool)
	lighten()
	darken()
	saturate()
	etc, etc.

--

#Extends
(I don't use them that much)

--

#Mixins
(Starting to get a little complicated)

---

	@mixin centerer {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

--

	.nice-picture {
		@include centerer;
	}

---

#Extends

	%centerer {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

--

	.nice-picture {
		@extend %centerer;
	}
--

#Compass

	@include transition(0.2 all ease-in);

--

#Bourbon

