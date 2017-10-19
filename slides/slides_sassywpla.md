
#<span class="fragment">Hey!</span>
##<span class="fragment">I'm <span class="special">Lara</span></span> <span class="fragment">(not Laura)</span>
<br>
<br>
###<span class="fragment">[notlaura.com](http://notlaura.com) <span class="grey">//</span> @laras126</span>

/--/

<div class="illustration unstyle-img">![Fishing](img/fishing/wordpress-catch.svg)</div>

/---/

<span class="unstyle-img">![Sass](img/sass/sass-logo.png)</span>

/--/

<div class="tencol last small-code">
<pre><code class="lang-scss css">
	$link-color: #4A8BBD;
	$link-hover: darken($link-color, 20%);

	.main-nav li {
		background-color: lighten($link-color, 50%);
		a {
			color: $link-color;
			&:hover {
				color: $link-hover;
			}
			&:active {
				color: darken($link-hover, 30%);
			}
		}
	}
</code></pre>
</div>

/--/

<img src="img/sass/scared.png" alt="Scared!" class="unstyle-img smaller-img">

/---/
<!-- ********** -->
<!-- Background -->
<!-- ********** -->

<div class="unstyle-img grid -three">
	<div class="threecol">&nbsp;</div>
	<div>
	![Boxing](img/sass/redo/boxing-wall.jpg)
	</div>
	<div class="threecol">&nbsp;</div>
</div>
<div class="unstyle-img fade-in fragment">
	![Sass](img/sass/redo/preprocessors.png)
</div>

/--/

<div class="grid -two unstyle-img">
	<div>
	![sass way](img/sass/thesassway.svg)
	<br>
	<br>
	![css tricks](img/sass/redo/css-tricks.png)
</div>
<div>
	<span class="unstyle-img">![Book apart](img/sass/redo/bookapart.png)</span>
	</div>
</div>

/--/

<span class="unstyle-img">![Sass](img/sass/SassnotSASS.jpg)</span>
<div class="text-center">
<small>Credit: Stu Robson, http://sassnotsass.com</small>
</div>


/---/

#Um...<span class="fragment">okay<span class="special">?</span></span>

/--/
<!-- ************** -->
<!-- 2. If code was a cookie... -->
<!-- ************** -->


<div class="grid -three">
<div class="fragment">
	<h2>Code</h2>
	<span class="unstyle-img">![Code](img/sass/redo/code.png)</span>
</div>

<div class="fragment">
	<h2>Compile</h2>
	<span class="unstyle-img">![Compile](img/sass/redo/compile.png)</span>
</div>

<div class="fragment">
	<h2>Render</h2>
	<span class="unstyle-img">![Render](img/sass/redo/launch.png)</span>
</div>
</div>


/--/

<span class="unstyle-img fragment">![Cookie](img/sass/redo/cookie.png)</span>

/--/

<div class="grid -three">
<div class="fragment">
	<h2>Mix</h2>
	<span class="unstyle-img">![Batter](img/sass/redo/batter.jpg)</span>
</div>
<div class="fragment">
	<h2>Bake</h2>
	<span class="unstyle-img">![Bake](img/sass/redo/baking.jpg)</span>
</div>
<div class="fragment">
	<h2>Eat</h2>
	<span class="unstyle-img">![Cookie Monster](img/sass/redo/cookiemonster.jpg)</span>
</div>
</div>

/--/

<div class="grid -two">
	<div class="unstyle-img">![Launch](img/sass/redo/nocookiedough.jpg)</div>
	<div class="fragment unstyle-img">![Launch](img/sass/redo/nobaking.jpg)</div>
</div>

/--/

<span class="unstyle-img">![Compiled Finder](img/sass/compile-finder.png)</span>

/---/

#So...<span class="special fragment">?</span>

/--/


<!-- *********** -->
<!-- Why should I learn this? -->
<!-- *********** -->

<div class="elevencol last">
	<p class="code-title"><span class="special">Variables</span> FTW</p>

<pre><code class="lang-scss css">
	$main-color: #32425C;
	$heading-font: Helvetica, sans-serif;

	.site-title {
		color: $main-color;
		font-family: $heading-font;
	}
</code></pre>

</div>

/--/

<div class="elevencol last">
	<p class="code-title"><span class="special">Mixins</span> A+</p>

<pre><code class="lang-scss css">
	@include upperspace {
		text-transform:  uppercase;
		letter-spacing: 2px;
	}

	.section-title {
		@include upperspace;
	}
</code></pre>
</div>

/--/

<div class="elevencol last">
	<div class="small-code">
	<p class="code-title"><span class="special">Media Query Bubbles</span> So fab.</p>
	</div>

<pre><code>
	.site-title {
		font-size: 24px;

		@media screen and (min-width: 600px) {
			font-size: 32px;
		}

		@media screen and (min-width: 1000px) {
			font-size: 48px;
		}
	}
</code></pre>

</div>

/--/

<div class="small-code">
<p class="code-title">style.<span class="special">min</span>.css</p>
<pre><code style="word-wrap:break-word;">html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}</code></pre>
</div>

/--/

![Eye Bleach 1](img/sass/feebs1.png)

/---/


<!-- ********** -->
<!-- Installing -->
<!-- ********** -->

#Um...<span class="fragment">how<span class="special">?</span></span>

/--/

<a href="http://jetpack.me/support/custom-css/" target="blank">![JetPack](img/sass/edit-css.png)</a>

/--/

##http://sass-lang.com/install

/--/

![Codekit](img/sass/codekit.png)

/--/

![terminal](img/sass/terminal.png)

/--/

<div class="unstyle-img">![cookies](img/sass/mouse-cookie.png)</div>

/---/

<!-- ************* -->
<!-- Demo -->
<!-- ************* -->

#Demo! Gasp!
####<span class="fragment">Finder first, Lara.</span>

/--/

![feebs](img/sass/feebs5.png)

/--/

#Simple [Sassy](https://github.com/laras126/simple-sassy-starter) Starter
##<span class="fragment">A gift!</span>
/--/

#Hands-on Sass Fundamentals
##November 4, 10-1pm, DTLA
<br>
###More here: [tinyurl.com/gdi-sass-nov17](http://tinyurl.com/gdi-sass-nov17)

/--/

#Thanks!

###[notlaura.com](http://notlaura.com) <span class="grey">//</span> @laras126
