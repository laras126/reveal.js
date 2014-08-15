
#Sassy WordPress

/--/

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

/--/

<div class="sixcol first">
	<img src="img/sass/scared.png" alt="Scared!" class="unstyle-img">
</div>

<div class="sixcol last fragment fade-in">
	<h1 class="center-vert">Yeah, same.</h1>
</div>

/---/


<div class="clearfix img-row">
	<div class="threecol text-right first">
		<h3 class="strong">Write</h3>
	</div>
	<div class="last ninecol unstyle-img">
		![Write code](img/sass/write-code.png)
	</div>
</div>

<div class="clearfix img-row">
	<div class="threecol text-right first">
		<h3 class="strong">Manage</h3>
	</div>
	<div class="last ninecol unstyle-img">
		![Manage code](img/sass/manage-code.png)
	</div>
</div>

<div class="clearfix img-row">
	<div class="threecol text-right first">
		<h3 class="strong">Launch</h3>
	</div>
	<div class="last ninecol unstyle-img">
		![Launch code](img/sass/deploy-code.png)
	</div>
</div>


/---/

<h1><span class="fragment highlight-blue" data-fragment-index="1">Pre</span>-<span class="fragment highlight-blue" data-fragment-index="2">process</span>ors</h1>

/--/


<div class="sevencol first small-code">
<p class="code-title"><span class="special">Before</span> (Sass)</p>

<pre class="language-sass">
<code>$blue: #237FA9;

.block {
	color: $blue;

	.sub-block {
		color: darken($blue, 20%);
	}
}
</code>
</pre>

</div>

<div class="fivecol last small-code ">
<p class="code-title"><span class="special">After</span> (CSS)</p>
<pre><code>.block {
	color: #237fa9;
}

.block .sub-block {
	color: #124055;
}


</code>
</pre>
</div>

/--/

<span class="unstyle-img">
	![Preprocessors](img/sass/preprocessors.png)
</span>

<aside class="notes">
	<ul>
		<li>[Sass](http://sass-lang.com)</li>
		<li>[Less](http://lesscss.org)</li>
		<li>[Stylus](http://learnboost.github.io/stylus/)</li>
		<li>[Sass vs. Less](http://css-tricks.com/sass-vs-less/)</li>
	</ul>
</aside>

/--/

<span class="unstyle-img">
	![Sass wins](img/sass/thesassway.svg)
</span>

<aside class="notes">
	[Sass Community](http://sass-lang.com/community)
</aside>

/---/

#Sass <span class="grey">vs</span> SASS

/--/

<div class="tencol last">
	<h1 class="text-left">
		<span class="fragment roll-in"><span class="special">S</span>yntactically</span> <br>
		<span class="fragment roll-in"><span class="special">A</span>wesome</span> <br>
		<span class="fragment roll-in"><span class="special">S</span>tyle</span> <br>
		<span class="fragment roll-in"><span class="special">S</span>heets</span>
	</h1>
</div>

/--/

<span class="unstyle-img">![Sass](img/sass/sass-logo.png)</span>

/---/

#<pre class="heading">.sass</pre> <span class="grey">vs</span> <pre class="heading">.scss</pre>

<aside class="notes">
	[Sass vs SCSS - which syntax is better?](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better)
</aside>

/--/

<div class="sixcol first small-code">
<p class="code-title">style<span class="special">.sass</span></p>

<pre class="language-sass">
<code>$blue: #237FA9
$green: #8F9D6A

.block
	color: $blue

	.sub-block
		color: $green


</code>
</pre>

</div>

<div class="sixcol last small-code ">
<p class="code-title">style<span class="special">.scss</span></p>
<pre class="language-scss">
<code>$blue: #237FA9;
$green: #8F9D6A;

.block {
	color: $blue;

	.sub-block {
		color: $green;
	}
}
</code>
</pre>
</div>


/--/

#<pre class="heading text-center">.scss</pre>

/---/

#That's cool, but...<span class="fragment special">?</span>

/--/
#1
##http://sass-lang.com/install

/--/

![Codekit](img/sass/codekit.png)

<small>
[Codekit](http://incident57.com/codekit/)
</small>

/--/

<video controls autoplay loop src="img/sass/compiler.mov"></video>

/--/

<pre>
	<code class="fragment terminal">lara$ gem install sass</code>
	<code class="fragment terminal">lara$ Permission Denied</code>
	<code class="fragment terminal">lara$ sudo gem install sass</code>
</pre>

/---/

#2
##Make a lot of files
(or grab them [on Github]())

<aside class="notes">
	[Structuring a Project](http://thesassway.com/beginner/how-to-structure-a-sass-project)
</aside>

/--/

<div class="sixcol first unstyle-img">
	![File structure](img/sass/file-structure.png)
</div>

<div class="sixcol unstyle-img text-left">
	![File structure](img/sass/file-structure-detail.png)
</div>

/--/

<div class="sixcol">
<p class="code-title">modules/<span class="special">_all</span>.scss</p>
<pre><code>// Collect the Modules
@import "settings";
@import "utility";
@import "mixins";



</code></pre>
</div>

<div class="sixcol">
<p class="code-title">partials/<span class="special">_all</span>.scss</p>
<pre><code>// Collect the Partials
@import "reset";
@import "typography";
@import "forms";
@import "layout";
@import "content";

</code></pre>

</div>

/--/

<div class="twocol">&nbsp;</div>
<div class="eightcol">
<p class="code-title"><span class="special">main</span>.scss</p>
<pre><code>// Import everything
@import "modules/all";
@import "partials/all";
@import "vendor/all";
</code></pre>

</div>

/--/

#Overkill?
##<p class="fragment">Maybe, but not really.</p>

/---/

#3
##Compile!

/--/
<pre><code class="terminal fragment">lara$ cd project/scss</code></pre>
<br>
<pre><code class="terminal fragment">scss lara$ sass --watch main.scss</code></pre>
<pre><code style="margin-top:-1em; padding-top: 0" class="terminal language-html fragment">>>> Sass is watching for changes. Press Ctrl-C to stop.
>>> Change detected to: main.scss
      write main.css
>>> Change detected to: main.scss
      write main.css
</code></pre>

/--/

<span class="unstyle-img">![Compiled Finder](img/sass/compile-finder.png)</span>

/---/

#Errors!

/---/

#4
##Code!

/--/

#Nesting

/--/

#Variables
###(My favorite)

/--/
<p class="code-title">modules/<span class="special">_settings</span>.scss</p>
	
	$base: 1em; // 16px
	$sml: $base*0.8;

	$h1: $base*3;
	$h2: $base*2.2;
	$h3: $base*1.4;
	$h4: $base*1.2;
	$h5: $base;
	$h6: $sml;

/--/

<p class="code-title">modules/<span class="special">_settings</span>.scss</p>
	
	// Colors
	$dark-blue: 		#334D5C;
	$teal: 				#45B29D;
	$yellow: 			#EFC94C;

	$light-accent: 		$yellow;
	$med-accent: 		$teal;
	$dark-accent:		$dark-blue;

	// Semantic names
	$link-color: 		$med-accent;
	$link-hover:		$dark-accent;

/--/

<p class="code-title">modules/<span class="special">_settings</span>.scss</p>

	$screen-sm: 		30em;
	$screen-md: 		48em;
	$screen-lg: 		60em;

/---/

#Media Query Bubbles
###(My second favorite)

/--/

###Encourages breakpoints via design rather than device

	.profile-pic {
		@media only screen and (max-width: $screen-sm) {
			width: 100px;
			float: none;
	  }
	}


/--/

#Functions
(not my favorite but cool)
	lighten()
	darken()
	saturate()
	etc, etc.

/--/

#Extends
(I don't use them that much)

	%btn {
		padding: 10px;
		border-radius: 10px;
	}

/--/

#Mixins
(Starting to get a little complicated)

/---/

	@mixin centerer {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

/--/

	.nice-picture {
		@include centerer;
	}

/---/

#Extends

	%centerer {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

/--/

	.nice-picture {
		@extend %centerer;
	}

/--/

#Compass

	@include transition(0.2 all ease-in);

/--/

#Bourbon

/---/

<span class="unstyle-img">![WP logo](img/sass/wp.png)</span>

/--/

<p class="code-title"><span class="special">functions</span>.php</p>
<div class="small-code">
<pre class="language-php">
<code>function sassy_styles() {
	wp_enqueue_style('sassy_styles', get_stylesheet_directory_uri() . '/assets/css/main.css');
}
add_action('wp_enqueue_scripts', 'sassy_styles');
</code>
</pre>
</div>

<aside class="notes">
[Compass compiling and WP](http://css-tricks.com/compass-compiling-and-wordpress-themes/)
</aside>

/--/

#Starter themes

/--/
