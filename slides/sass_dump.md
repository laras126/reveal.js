<!-- .sass vs .scss slides -->


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



<!--  Terminal commands -->


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


<!-- File structure -->

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






<!--  Code demos -->

<div class="clearfix">
<p class="special code-title">Variables</p>
<div class="sixcol small-code">
<p class="code-title">scss</p>
<pre><code>$main-color:  	 #32425C;
$heading-font: 	Helvetica, sans-serif;

.site-title {
	color: $main-color;
	font-family: $heading-font;
}
</code></pre>
</div>

<div class="sixcol small-code">
<p class="code-title">css</p>
<pre><code>
.site-title {
	color: #32425c;
	font-family: Helvetica, sans-serif;
}


</code></pre>
</div>

</div>

<p class="text-center"><a href="http://sassmeister.com/gist/f1fe2c316abfde27f2a6">On Sassmeister</a></p>

/--/
<div class="clearfix">
<p class="special code-title">Nesting</p>
<div class="sixcol small-code">
<p class="code-title">scss</p>
<pre><code>$link-color: #32425C;
$link-hover: darken($link-color, 20%);

a {
	color: $link-color;

	&:hover {
		color: $link-hover;
	}
}
</code></pre>
</div>

<div class="sixcol small-code">
<p class="code-title">css</p>
<pre><code>
a {
	color: #32425c;
}

a:hover {
	color: #0e131a;
}


</code></pre>
</div>