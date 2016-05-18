
#<span class="fragment">Hey!</span>
##<span class="fragment">I'm <span class="special">Lara</span></span> <span class="fragment">(not Laura)</span>
<br>
<br>
###<span class="fragment">[notlaura.com](http://notlaura.com) <span class="grey">//</span> @laras126</span>

/--/

<div class="illustration unstyle-img">![Fishing](img/fishing/wordpress-catch.svg)</div>

Note:
I am visiting from NYC where I work as a freelance web designer/developer and teacher. I operate around the "teach you to fish" philosophy for my teaching - I hope we can work along those lines today!

/---/

<span class="unstyle-img">![Sass](img/sass/sass-logo.png)</span>

Note:
Today we'll be learning about Sass, everyone's favorite CSS preprocessor. Maybe you've heard of it, maybe not - either way you'll get your hands into lots of Sass this evening.

/--/

<div class="small-code">
<pre><code class="lang-scss">
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
}</code></pre>
</div>

Note:
To start out, let's take a look at some Sass. There you have it!

/--/

<img src="img/sass/scared.png" alt="Scared!" class="unstyle-img smaller-img">

Note:
Eww...what _was_ that? Learning new technologies is intimidating - especially when you are left to navigate the sea of Google results and random, sometimes overly complicated tutorials online.

/---/

<div class="unstyle-img">
![Boxing](img/sass/redo/boxing-wall.jpg)
</div>
<div class="unstyle-img fade-in fragment">
	![Sass](img/sass/redo/preprocessors.png)
</div>

Note:
Before we get into Sass syntax and features, let's start with some background. There are a couple of CSS preprocessors in addition to Sass you may have heard of:

<ul>
	<li>[Less](http://lesscss.org/) - Used by Bootstrap through v3 (v4, still in Alpha, will use Sass)</li>
	<li>[Stylus](http://stylus-lang.com/) - This is an obscure one, but worth mentioning. Very similar features to both of the above.</li>
</ul>

Although these are alternatives, Sass has clearly won out at this point. Let's take a look at why.

/--/

<div class="sixcol first unstyle-img">
<br>
<br>
![sass way](img/sass/thesassway.svg)
<br>
<br>
![css tricks](img/sass/redo/css-tricks.png)
</div>
<div class="sixcol last">
<span class="unstyle-img">![Book apart](img/sass/redo/bookapart.png)</span>
</div>

Note:
One of the most important considerations when selecting a third party tool is the community behind it. How many people use it? How much documentation is there? The more popular a tool is, the more likely it will be kept up to date and the more support there will be when you have problems.

Sass has a huge, wonderful community and is used all over the web! [Sass for Web Designers](https://abookapart.com/products/sass-for-web-designers) is an excellent book from A Book Apart (you should buy all of those anyhow), Chris Coyier writes about Sass often on CSS-Tricks, and the Sass Way is an excellent support resource.

/--/

<span class="unstyle-img">![Sass](img/sass/SassnotSASS.jpg)</span>
<div class="text-center">
<small>Credit: Stu Robson, http://sassnotsass.com</small>
</div>

Note:
The last thing, before we get into Sass itself, is that it's **Sass** not **SASS**. It used to be an acronym for Sytactically Awesome Style Sheets, but this has fallen by the wayside with gorgeous rebranding by [Jina](http://jina.me/).

/---/

#Preprocessor
<br>
<blockquote class="fragment">
...a computer program that modifies data to conform with the input requirements of another program.
</blockquote>
<br>
<small>[Source](https://en.wikipedia.org/wiki/Preprocessor)</small>


/--/

# Uhh<span class="fragment">...what</span><span class="special fragment">?</span>

Note:
A _preprocessor_ is a coding language that makes a developer's job easier, but a computer can't understand that language so we need to compile it. Let's look at that another way.

/--/

<div class="fourcol first fragment">
	<h2>Code</h2>
	<span class="unstyle-img">![Preprocessor](img/sass/redo/code.png)</span>
</div>

<div class="fourcol fragment">
	<h2>Compile</h2>
	<span class="unstyle-img">![Compile](img/sass/redo/compile.png)</span>
</div>

<div class="fourcol fragment">
	<h2>Result</h2>
	<span class="unstyle-img">![Result](img/sass/redo/launch.png)</span>
</div>

Note:
We can think of preprocessing as a three-fold process.

<ol>
	<li><strong>Code:</strong> First you write some code in the preprocessor language. Just like Sass is a CSS preprocessor, [Haml](http://haml.info) and [CoffeeScript](http://coffeescript.org/) are preprocessors for HTML and JavaScript respectively.</li>
	<li><strong>Compile:</strong> After you write the code, you need to compile it, or transform it into something the browser can read.</li>
	<li><strong>Result:</strong> Now the code is in a language the browser can read. You didn't write this code - it was generated from what you wrote in the preprocessing language.</li>
</ol>

/--/

<span class="unstyle-img fragment">![Cookie](img/sass/redo/cookie.png)</span>

Note:
Ok, that was even more jargon. Let's talk about cookies!

/--/

<div class="fourcol first">
	<h2>Batter</h2>
	<span class="unstyle-img">![Batter](img/sass/redo/batter.jpg)</span>
</div>

<div class="fourcol fragment">
	<h2>Bake</h2>
	<span class="unstyle-img">![Bake](img/sass/redo/baking.jpg)</span>
</div>

<div class="fourcol fragment">
	<h2>Cookie</h2>
	<span class="unstyle-img">![Cookie Monster](img/sass/redo/cookiemonster.jpg)</span>
</div>

Note:
We can use baking as a metaphor for preprocessing. In this case, the preprocessor code is like the batter, the compiling is analogous to baking, and the resulting cookie is like the code produced from the compiler.

/--/

<div class="sixcol first">
	<span class="unstyle-img">![monster](img/sass/redo/nocookiedough.jpg)</span>
</div>

<div class="sixcol fragment">
	<span class="unstyle-img">![monster](img/sass/redo/nobaking.jpg)</span>
</div>

Note:
And...just like cookie monster can't eat cookie dough (though I can), a browser can't read Sass.

/---/

#So...<span class="special fragment">why?</span>

Note:
As useful as it is to talk about cookies, that doesn't really tell us _how_ or _why_ to use Sass!

/--/

<img src="img/lazy-lion.jpg" alt="">

Note:
Because developers are lazy! Well, maybe efficient is a nicer way to put it.

/--/

#<span class="special">&hearts;</span>

<h3>Variables</h3>
<h3>Functions</h3>
<h3>Nesting</h3>
<h3>Mixins</h3>
<h3>Media Queries</h3>
<h3>Imports</h3>

Note:
Before we get into installing Sass, let's take a look at it's core features to get you excited to use it! One of the best parts about Sass is that you can use however many of these features as you'd like, OR just keep to plain CSS.

/---/

<p class="meta-upper text-left">Variables</p>
<hr>
<div class="sixcol first fragment">
<p class="code-title">Gross <span class="special">CSS</span></p>
<pre><code class="lang-scss">a {
	color: #005BBC;
}
</code></pre>
</div>

<div class="sixcol first fragment">
<p class="code-title">Lovely <span class="special">Sass</span>!</p>
<pre><code class="lang-scss">$main-color: #005BBC;

a {
	color: $main-color;
}

</code></pre>
</div>

Note:

How many of you enjoy managing a website's color scheme in hex codes? Thought so. [Here's a great article](http://alistapart.com/article/why-sass#section1) making the case for Sass.

Variables are a way to store information to reduce redundancy. For example, rather than writing the Hex code for your brand's color over and over again, you can create a variable called `$main-color` as you see here. This way, if you change the brand color, you can do it in one place rather than replacing each occurance of the Hex code.

/--/

<p class="meta-upper text-left">Variables</p>
<hr>

<iframe src="http://embed.sassmeister.com/gist/ce0f092747d9cc5067b73708dbe048ea#theme=tomorrow,font-size=1.5" class="sassmeister-gist" id="sm-gist-ce0f092747d9cc5067b73708dbe048ea" scrolling="no" frameborder="0" allowtransparency="true" height="550" style="width: 100%; overflow: hidden;"></iframe>

Note:
Here we're using [Sassmeister](http://sassmeister.com), a wonderful little webapp for demoing Sass.

In addition to colors, let's take a look at a few more examples using fonts, border values, and even spacing.

You'll also notice the *comments* in Sass look a little different than CSS. In Sass you can use `//` for a comment - similar to JavaScript - and it will not output in the CSS. You can use the usual `/* ... */` to output the comments in CSS.


/---/

<p class="meta-upper text-left">Functions</p>
<hr>
<div class="sixcol first fragment">
<p class="code-title">Gross <span class="special">CSS</span></p>
<pre><code class="lang-scss">a {
  color: #005BBC;
}

a:hover {
  color: #002a56;
}

</code></pre>
</div>

<div class="sixcol fragment">
<p class="code-title">Lovely <span class="special">Sass</span>!</p>
<pre><code class="lang-scss">$main-color: #005BBC;

a {
	color: $main-color;
}

a:hover {
	color: darken($main-color, 20%);
}

</code></pre>
</div>

Note:
We can manipulate a color value without having to look up different Hex codes.

/--/

<p class="meta-upper text-left">Functions</p>
<hr>

<iframe src="http://embed.sassmeister.com/gist/ecf19bb2f2e8d3a0e6807f54b7ee030d#theme=tomorrow,font-size=1.5" class="sassmeister-gist" id="sm-gist-ecf19bb2f2e8d3a0e6807f54b7ee030d" scrolling="no" frameborder="0" allowtransparency="true" height="550" style="width: 100%; overflow: hidden;"></iframe>

Note:

There are _tons_ of functions, particularly for colors. Let's take a look at:

* `darken()` and `lighten()`
* `rgba()`
* `mix()`
* `saturate()` and `desaturate()`

[Read more here](http://jackiebalzer.com/color).

/---/

<p class="meta-upper text-left">Nesting</p>
<hr>
<div class="sixcol first fragment">
<p class="code-title">Gross <span class="special">CSS</span></p>
<pre><code class="lang-scss">.nav-item {
  border-right: #005BBC;
}

.nav-item:last-child {
	border-right: 0;
}

</code></pre>
</div>

<div class="sixcol fragment">
<p class="code-title">Lovely <span class="special">Sass</span>!</p>
<pre><code class="lang-scss">$main-color: #005BBC;

.nav-item {
  border-right: $main-color;

  &:last-child {
 	 border-right: 0;
  }
}

</code></pre>
</div>

Note:
We can manipulate a color value without having to look up different Hex codes.

/--/

<p class="meta-upper text-left">Nesting</p>
<hr>

<iframe src="http://embed.sassmeister.com/gist/91ae4f812a14973523195c550e2dc87e#theme=tomorrow,font-size=1.5" class="sassmeister-gist" id="sm-gist-91ae4f812a14973523195c550e2dc87e" scrolling="no" frameborder="0" allowtransparency="true" height="550" style="width: 100%; overflow: hidden;"></iframe>

Note:
In this example,

/--/


<div class="small-code">
<p class="code-title">style.<span class="special">min</span>.css</p>
<pre><code style="word-wrap:break-word;">html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}</code></pre>
</div>

Note:
Minification is super easy with Sass too!

/--/

![Eye Bleach 1](img/sass/feebs1.png)

/---/


<!-- ********** -->
<!-- Installing -->
<!-- ********** -->

#Um...<span class="fragment">how<span class="special">?</span></span>

Note:
This all sounds great, but how do you get started?

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
####A gift!

/--/

#Thanks!

###[notlaura.com](http://notlaura.com) <span class="grey">//</span> @laras126
