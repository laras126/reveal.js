
#Hey!
##<span class="fragment">I'm <span class="special">Lara</span></span> <span class="fragment">(not Laura)</span>
<br>
<br>
###<span class="fragment">@laras126</span>

/--/

<span class="unstyle-img">![Sass](img/sass/redo/talk-logo.png)</span>

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

<img src="img/sass/scared.png" alt="Scared!" class="unstyle-img smaller-img">

/---/

##WTF
#<span class="special">Preprocess</span>ors

/--/
<!-- ************** -->
<!-- 2. If code was a cookie... -->
<!-- ************** -->

<span class="unstyle-img">![Cookie](img/sass/redo/cookie.png)</span>

/--/

<div class="fourcol">
	<h2>Mix</h2>
	<span class="unstyle-img">![Batter](img/sass/redo/batter.jpg)</span>
</div>


<div class="fourcol">
	<h2>Bake</h2>
	<span class="unstyle-img">![Bake](img/sass/redo/baking.jpg)</span>
</div>


<div class="fourcol">
	<h2>Eat</h2>
	<span class="unstyle-img">![Cookie Monster](img/sass/redo/cookiemonster.jpg)</span>
</div>

/--/

<div class="fourcol">
	<h2>Code</h2>
	<span class="unstyle-img">![Code](img/sass/redo/code.png)</span>
</div>

<div class="fourcol">
	<h2>Compile</h2>
	<span class="unstyle-img">![Compile](img/sass/redo/compile.png)</span>
</div>

<div class="fourcol">
	<h2>Render</h2>
	<span class="unstyle-img">![Render](img/sass/redo/launch.png)</span>
</div>

/--/

<div class="sixcol">
	<span class="unstyle-img">![Launch](img/sass/redo/nocookiedough.jpg)</span>
</div>

<div class="sixcol fragment">
	<span class="unstyle-img">![Launch](img/sass/redo/nobaking.jpg)</span>
</div>

/---/

#Okay...<span class="special fragment">?</span>

/--/
<!-- *********** -->
<!-- Why should I learn this? -->
<!-- *********** -->

<div class="sixcol small-code">
<p class="code-title">&hearts; <span class="special">Nesting</span></p>
<pre><code>.main-nav ul {
	li {
		a {
			&:hover {}
			&:active {}
		}
	}
}</code></pre>
</div>

<div class="sixcol small-code">
<p class="code-title"><span class="special">Ew</span> CSS</p>
<pre><code>
.main-nav ul {}
.main-nav ul li {}
.main-nav ul li a {}
.main-nav ul li a:hover {}
.main-nav ul li a:hover {}


</code></pre>
</div>

/--/


<div class="small-code">
<p class="code-title"><span class="special">Gross</span> CSS</p>

<pre><code>.tab {
	border-top-left-radius: 25px;
	-moz-border-radius-topleft: 25px;
	-webkit-border-top-left-radius: 25px;

	border-top-right-radius: 25px;
	-moz-border-radius-topright: 25px;
	-webkit-border-top-right-radius: 25px;
}
</code></pre>
</div>

/--/

<div class="small-code">
<p class="code-title">Not with <span class="special">Sass and Compass!</span></p>
</div>
<pre><code>.tab {
	@include border-top-radius(10px);
}
</code></pre>
</div>

/--/

<p class="code-title"><span class="special">Variables</span> FTW</p>


<pre><code>$main-c.olor:  	 #32425C;
$heading-font: 	Helvetica, sans-serif;

.site-title {
	color: $main-color;
	font-family: $heading-font;
}
</code></pre>


/--/

<div class="small-code">
<p class="code-title">style.<span class="special">min</span>.css</p>
<pre><code style="word-wrap:break-word;">html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}</code></pre>
</div>


/---/


<div class="unstyle-img">
	<div class="threecol">&nbsp;</div>
	<div class="sixcol">
	![Boxing](img/sass/redo/boxing-wall.jpg)
	</div>
	<div class="threecol">&nbsp;</div>
</div>
<div class="unstyle-img fade-in fragment">
	![Sass](img/sass/redo/preprocessors.png)
</div>

/--/

<div class="sixcol unstyle-img">
<br>
<br>
![sass way](img/sass/thesassway.svg)
<br>
<br>
![css tricks](img/sass/redo/css-tricks.png)
</div>
<div class="sixcol">
<span class="unstyle-img">![Book apart](img/sass/redo/bookapart.png)</span>
</div>


/---/

<!-- 3. sass vs less, sass syntax and debunking -->
#Sass <span class="grey">vs</span> SASS

/--/

<div class="tencol last">
	<h1 class="text-left">
		<span class="fragment roll-in"><span class="pink">S</span>yntactically</span> <br>
		<span class="fragment roll-in"><span class="pink">A</span>wesome</span> <br>
		<span class="fragment roll-in"><span class="pink">S</span>tyle</span> <br>
		<span class="fragment roll-in"><span class="pink">S</span>heets</span>
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

<!-- ************* -->
<!-- 4. Installing -->
<!-- ************* -->

#Um, cool...<span class="special fragment">?</span>

/--/

<!-- sass on your comp, set up your directory -->
##http://sass-lang.com/install

/--/
<div class="onecol">&nbsp;</div>
<div class="tencol">![terminal](img/sass/terminal.png)</div>

/--/

<div class="onecol">&nbsp;</div>
<div class="tencol">![Codekit](img/sass/codekit.png)</div>

/--/

<pre>
	<code class="fragment terminal">lara$ gem install sass</code>
	<code class="fragment terminal">lara$ Permission Denied</code>
	<code class="fragment terminal">lara$ sudo gem install sass</code>
</pre>

/--/

<pre><code class="terminal fragment">lara$ cd project/scss</code></pre>
<br>
<pre><code class="terminal fragment">scss lara$ sass --watch main.scss</code></pre>

/--/

<video controls autoplay loop src="img/sass/compiler.mov"></video>

/--/

<span class="unstyle-img">![Compiled Finder](img/sass/compile-finder.png)</span>

/--/

<div class="unstyle-img">![cookies](img/sass/redo/happycookiemonster.png)</div>

/---/

#Let's go!

/--/

<div class="unstyle-img">![files](img/sass/redo/partials.png)</div>

/--/

<div class="unstyle-img">![files](img/sass/redo/files-graphic.png)</div>

/--/

<div class="sixcol">
<p class="code-title">partials/<span class="special">_all</span>.scss</p>
<pre><code>// Import the Partials
@import "reset";
@import "typography";
@import "forms";
@import "layout";
@import "content";
</code></pre>

</div>

<div class="sixcol">
<p class="code-title"><span class="special">main</span>.scss</p>
<pre><code>
// Import everything
@import "modules/all";
@import "partials/all";
@import "vendor/all";

</code></pre>
</div>

/--/

#Note!
###That's Sass only.

/--/


nesting

whats a $

variables
lighten/darken
saturate/desaturate
math
// Semantic variables

Nesting

what’s an &
alias for parent selector

no & adds a space

pitfalls of nesting - inception rule

you’ll get errors if you leave out brackets

Meda query bubbles

getting too specificmedia query bubbling (nest actual MQ, can also do regular MQ nesting)


what’s an @

@mixin
@include
@extend


what’s a %
extends

btn, btn-small example
can’t extend out of media query

Libraries
libraries are pre made recipes/like jquery
auto prefixing example
other functions


bourbon/compass


import scss files
Google fonts, you aren’t being crafty just enqueue the style

Show my sassy starter

WP

enqueueing in WP
Mention starter themes
