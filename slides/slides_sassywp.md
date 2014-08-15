
#Hey!
##<span class="fragment">I'm <span class="special">Lara</span></span> <span class="fragment">(not Laura)</span>
<br>
<br>
###<span class="fragment">@laras126</span>

/--/

![NYC](img/sass/nyc.jpg)

/--/

![East Village](img/sass/east-village.jpg)

/--/

<span class="unstyle-img">![Sass](img/sass/sass-logo.png)</span>

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
#Pre-processors

/--/
<!-- ************** -->
<!-- 2. If code was a cookie... -->
<!-- ************** -->

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


<pre><code>$main-color:  	 #32425C;
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

<video controls loop src="img/sass/compiler.mov"></video>

/--/

<div class="unstyle-img">![Oven on](img/sass/redo/oven-knob.jpg)</div>

/--/

<span class="unstyle-img">![Compiled Finder](img/sass/compile-finder.png)</span>

/--/

<div class="unstyle-img">![cookies](img/sass/redo/happycookiemonster.png)</div>

/---/

<!-- ************* -->
<!-- Intro to code stuff -->
<!-- ************* -->

##http://sass-lang.com/guide

/--/

#Let's make a <span class="special">link</span>.

Here it is <a href="http://sassmeister.com/gist/1f63b704f89523b8120c">on Sassmeister</a>.

/--/

<video controls loop src="img/sass/link-example.mov"></video>

/--/

<video controls loop src="img/sass/semantic-variables.mov"></video>

/--/

<video controls loop src="img/sass/minify.mov"></video>

/--/

![hamster thing](img/sass/redo/eyebleach1.jpg)

/---/

#Let's make a <span class="special">button</span>.
Here it is <a href="http://sassmeister.com/gist/ad8fa52ea853d84da153">on Sassmeister</a>.

/--/

<video controls loop src="img/sass/button-mixin-bad.mov"></video>

/--/

#Ew, make that <span class="special">better</span>.
Here it is <a href="http://sassmeister.com/gist/9eca4dbb5ac01a5d8f60">on Sassmeister</a>.

/--/

<video controls loop src="img/sass/button-extend-better.mov"></video>

/--/

<div class="fragment" data-fragment-index="3"><h1>Amazing!</h1></div>

<div class="fourcol">
![ingredients](img/sass/redo/ingredients-separate.jpg)
</div>
<div class="fourcol fragment" data-fragment-index="1">
![ingredients](img/sass/redo/ingredients-bowl.jpg)
</div>
<div class="fourcol fragment" data-fragment-index="2">
![ingredients](img/sass/redo/ingredients-bowl-mms.png)
</div>

/---/

#Media Query <span class="special">Bubbles</span>
Here it is <a href="http://sassmeister.com/gist/17f99ab2d74c46ca3cb9">on Sassmeister</a>.

/--/

<video controls loop src="img/sass/mq-bubbles.mov"></video>

/--/

<video controls loop src="img/sass/mq-extend-fail.mov"></video>

/--/

![Errors](img/sass/mad-errors.png)

/--/

#Crap.
Here it is <a href="http://sassmeister.com/gist/98f202071af56724dd5a">on Sassmeister</a>.

/--/

![horse](img/sass/redo/eyebleach2.jpg)

/---/

#Libraries!
Compass FTW <a href="http://sassmeister.com/gist/a6a0c7730ff28b1012a5">on Sassmeister</a>.

/--/

##http://compass-style.org/install/

/--/

<video controls loop src="img/sass/compass.mov"></video>

/--/

![koala](img/sass/koala.png)

/---/

#My gift to you.

/--/

#[Simple Sassy Starter](https://github.com/laras126/simple-sassy-starter)

/---/

#Merci!
##[notlaura.com](http://notlaura.com)

