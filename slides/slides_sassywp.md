
<!-- Why should I learn this? Sell pre processors - nesting before and after -->

<div class="sixcol small-code">
<p class="code-title">Sass with Compass</p>
<pre><code>


.tab {
	@include border-top-radius(10px);
}



</code></pre>

</div>

<div class="sixcol small-code">
<p class="code-title">CSS</p>

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

<div class="sixcol small-code">
	<pre><code>// Navy
$main-color:  #32425C;

.site-title {
	color: $main-color;
}
</code></pre>
</div>


<div class="sixcol fragment fade-in small-code">
	<pre><code>// Mustard
$main-color:  #AA9757;

.site-title {
	color: $main-color;
}
</code></pre>
</div>

/---/

#That's cool, but...<span class="special fragment">?</span>

/--/

<!-- 2. Start out with metaphor about what a pre processor is - write/manage/launch -->

<span class="unstyle-img">![Cookie](img/sass/redo/cookie.png)</span>

<aside class="notes">
	Websites are cookies.
</aside>

/--/

<div class="fourcol">
	<h2>Mix</h2>
	<span class="unstyle-img">![Batter](img/sass/redo/batter.jpg)</span>
</div>


<div class="fourcol">
	<h2>Bake</h2>
	<span class="unstyle-img">![Bake](img/sass/redo/cookie.png)</span>
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
	<h2>Launch</h2>
	<span class="unstyle-img">![Launch](img/sass/redo/launch.png)</span>
</div>

/--/

<div class="sixcol">
	<span class="unstyle-img">![Launch](img/sass/redo/nocookiedough.jpg)</span>
</div>

<div class="sixcol fragment">
	<span class="unstyle-img">![Launch](img/sass/redo/nobaking.jpg)</span>
</div>


/---/

<span class="unstyle-img">![Launch](img/sass/preprocessors.png)</span>

/--/

<span class="unstyle-img">![Launch](img/sass/redo/bookapart.png)</span>

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

<!-- 4. installing - make it quick -->

#Cool, but...<span class="special fragment">?</span>

/--/

<!-- sass on your comp, set up your directory -->
##http://sass-lang.com/install

/--/



Code

nesting

what’s an &
alias for parent selector

no & adds a space

pitfalls of nesting - inception rule

you’ll get errors if you leave out brackets

getting too specificmedia query bubbling (nest actual MQ, can also do regular MQ nesting)


whats a $

variables
lighten/darken
saturate/desaturate


what’s an @

@mixin

@include

@extend



what’s a %
extends

btn, btn-small example
can’t extend out of media query

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
