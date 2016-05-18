
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

#Variables

/--/

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
<p class="code-title">Lovely <span class="special">Sass</span></p>
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

#Functions

/--/
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
<p class="code-title">Lovely <span class="special">Sass</span></p>
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

#Nesting

/--/

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
<p class="code-title">Lovely <span class="special">Sass</span></p>
<pre><code class="lang-scss">$main-color: #005BBC;
$border: 1px solid $main-color;

.nav-item {
  border-right: $border;

  &:last-child {
 	 border-right: 0;
  }
}

</code></pre>
</div>

Note:
Rather than always specifying a parent selector, with nesting you can have the child selector within the rule of the parent selector.

Be careful with nesting though - you never want to go more than three levels deep, otherwise things get soupy.

/--/

<p class="meta-upper text-left">Nesting</p>
<hr>

<iframe src="http://embed.sassmeister.com/gist/91ae4f812a14973523195c550e2dc87e#theme=tomorrow,font-size=1.5" class="sassmeister-gist" id="sm-gist-91ae4f812a14973523195c550e2dc87e" scrolling="no" frameborder="0" allowtransparency="true" height="550" style="width: 100%; overflow: hidden;"></iframe>

Note:
In this example,

/---/

#Mixins

/--/

<p class="meta-upper text-left">Mixins</p>
<hr>
<div class="fivecol first fragment">
<p class="code-title">Gross <span class="special">CSS</span></p>
<pre><code class="lang-scss">.btn, .btn-success {
	padding: 1em;
}

.btn {
  background: #005BBC;
}

.btn-success {
  background: #6FCB88;
}

</code></pre>
</div>

<div class="sevencol fragment">
<p class="code-title">Lovely <span class="special">Sass</span></p>
<pre><code class="lang-scss">$main-color: #005BBC;
$accent-success: #6FCB88;

@mixin button($color) {
  background: $color;
  padding: 1em;
}

.btn-main {
  @include button($main-color);
}

.btn-success {
  @include button($accent-success);
}


</code></pre>
</div>

/--/

<p class="meta-upper text-left">Mixins</p>
<hr>

<iframe src="http://embed.sassmeister.com/gist/28e1ac3bdfb11497e807ee7e0ef3d6b8#theme=tomorrow,font-size=1.5" class="sassmeister-gist" id="sm-gist-28e1ac3bdfb11497e807ee7e0ef3d6b8" scrolling="no" frameborder="0" allowtransparency="true" height="550" style="width: 100%; overflow: hidden;"></iframe>

Note:
Here we have single set of button styles in a mixin and are applying it to three different button styles. Nice!

One thing to notice is the redundancy in our CSS (and it's always important to look at your CSS). Although this wouldn't be ideal if *we* were writing the CSS, it is inconsequential here if you are responsibly gzipping your files one your server. There is a Sass feature called an `@extend` that could eliminate this, but the general consensus is [to use mixins instead](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/) or [not to use them](https://www.sitepoint.com/avoid-sass-extend/) at all.

/---/

#Media Queries

/--/

<p class="meta-upper text-left">Media Queries</p>
<hr>
<div class="fivecol first fragment">
<p class="code-title">Gross <span class="special">CSS</span></p>
<pre><code class="lang-scss">.nav-item {
  border-bottom: 1px solid #005BBC;
}

@media (min-width: 640px) {
  .nav-items {
    display: flex;
  }

  .nav-item {
    border-bottom: 0;
  }
}

</code></pre>
</div>

<div class="sevencol fragment">
<p class="code-title">Lovely <span class="special">Sass</span></p>
<pre><code class="lang-scss">$screen-sm: 640px;
$main-color: #005BBC;

.nav-items {
  @media(min-width: $screen-sm) {
    display: flex;
  }
}

.nav-item {
  border-bottom: 1px solid $main-color;
  @media(min-width: $screen-sm) {
    border-bottom: 0;
  }
}

</code></pre>
</div>

Note:
With Sass, we can do something called "Media Query Bubbling" (not sure how official that term is) where media queries are nested within a selector, rather than wrapping all of the selectors together in a separate section.

Although this may not necessarily be less code than using regular media queries, it allows us to separate our concerns much more clearly.

/--/

<p class="meta-upper text-left">Media Queries</p>
<hr>
<iframe src="http://embed.sassmeister.com/gist/4fbb691e6f63d9e06452d9f22e54553d#theme=tomorrow,font-size=1.5" class="sassmeister-gist" id="sm-gist-4fbb691e6f63d9e06452d9f22e54553d" scrolling="no" frameborder="0" allowtransparency="true" height="550" style="width: 100%; overflow: hidden;"></iframe>

Note:
Here is an example of a responsive menu using "Media Query Bubbles".

/---/

#Partials

/--/

<p class="meta-upper text-left">Partials</p>
<hr>
<div class="fivecol first fragment">
<p class="code-title">_nav.scss</p>
<pre><code class="lang-scss">.nav-items {
  @media(min-width: $screen-sm) {
    display: flex;
  }
}

.nav-item {
  border-bottom: 1px solid $main-color;
  @media(min-width: $screen-sm) {
    border-bottom: 0;
  }
}

</code></pre>
</div>

<div class="sevencol fragment">
<p class="code-title">main.scss</p>
<pre><code class="lang-scss">// This is our main SCSS file to be compiled.

@import 'variables';
@import 'mixins';
@import 'typography';
@import 'header';
@import 'nav';
@import 'content';
@import 'footer';
</code></pre>
</div>

Note:
Finally, let's take a look at separating out our Sass code into different files. Dealing with 5000 line CSS files isn't fun, and you can see that, once we have many mixins and variables in our Sass, our files will become quite long.

Luckily, we can import partials! Unlike CSS imports, the Sass partials are all smushed into the same file so we don't have to worry about multiple HTTP requests that could slow down our sites.

Any files prefixed with an `_` will *not* be compiled and are meant to function as imports. Think of your `main.scss` file as a table of contents!

/--/

![Eye Bleach 1](img/sass/feebs1.png)

/---/

#Cool...<span class="fragment">but <span class="special">how?</span></span>

Note:
This all sounds great, but how do you get started?

/--/

#Three Simple-ish Steps
<br>
<h3>Install Sass</h3>
<h3>Make Your File</h3>
<h3>Compile Your Code</h3>

/---/

##<span class="grey">1</span>
#Install Sass

###http://sass-lang.com/install

Note:
Visit the Sass website for instructions on how to install Sass both via the command line or using software.

/--/

<p class="meta-upper text-left">Option 1: GUI</p>
<hr>
![Codekit](img/sass/codekit.png)

Note:
CodeKit is an excellent plug-and-play solution for installing Sass and compiling your files.

/--/
<p class="meta-upper text-left">Option 2: Command Line (do it!)</p>
<hr>
![terminal](img/sass/terminal.png)

Note:
Sass is written in Ruby and available as a gem. You can install it with this command.

/--/

<div class="unstyle-img">![cookies](img/sass/mouse-cookie.png)</div>

Note:
The command line can be a scary jump if you haven't used it before. But - just like in this wonderful children's book about a mouse eating cookies - once you start using the command line, you'll get the hang of it and it will open doors to other development concepts and tools.

/---/

##<span class="grey">2</span>
#Make Your File
<br>
<div class="fragment">
	<h3>`style.scss`</h3>
	<h3 class="grey fragment">or</h3>
	<h3 class="fragment">`style.css` &rarr; `style.scss`</h3>
</div>

Note:
**If you are starting a new project**, create a `style.scss` file (or `main.scss`, whatever you fancy).
**If you are adding Sass to an existing project**, _chance_ the file extension of your CSS file from `.css` to `.scss`.

It's that easy!

/--/

<h2>And guess what...</h2>
<h3 class="fragment">You can write CSS in a `.scss` file.</h3>
<h3 class="fragment">You don't even have to use Sass.</h3>
<h3 class="fragment special">But you should!</h3>

/--/

![Koala](img/sass/koala.png)

/---/

##<span class="grey">3</span>
#Compile Your Code
<h3>There are too many ways to do it (IMO).</h3>

Note:
Now that you have created your file and installed Sass, it's time to compile it. Fortunately or unfortunately, there are many ways to compile Sass.

/--/

<img class="unstyle-img" src="img/compilers.png" alt="">

Note:
Some of these ways include JavaScript task runners [Grunt](http://gruntjs.com/) and [Gulp](http://gulpjs.com), the [Ruby on Rails asset pipeline](http://guides.rubyonrails.org/asset_pipeline.html) (for Ruby projects), [LibSass](http://sass-lang.com/libsass) (a C port of Ruby Sass), [NodeSass](https://github.com/sass/node-sass), and the [Compass compiler](http://compass-style.org/).

Oof! Let's keep it simple.

/--/

##And...
<h3 class="fragment">The plain 'ol Sass compiler.</h3>
<br>
<h3 class="fragment"><code>$ sass --watch</code></h3>

Note:
When you install the Sass gem, you also install the Ruby Sass compiler. You can run the compiler by `cd`ing into your project director and running the comman `sass --watch`.

/--/

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
