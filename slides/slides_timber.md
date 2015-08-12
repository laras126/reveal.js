
#<span class="fragment">Hey!</span>
##<span class="fragment">I'm <span class="special">Lara</span></span> <span class="fragment">(not Laura)</span>
<br>
<br>
###<span class="fragment">[notlaura.com](http://notlaura.com) <span class="grey">//</span> @laras126</span>

/--/

<img class="unstyle-img" src="img/timber-logo.svg" alt="">

By Jared Nova &amp; Upstatement

/--/

#MVC...<span class="fragment special">?</span>

/--/

<img class="unstyle-img" src="img/request-response.png" alt="">

/---/

<img class="unstyle-img" src="img/mvc-graphic.png" alt="">

/---/

<img class="unstyle-img" src="img/mvc-graphic-real.png" alt="">

/---/

<img src="img/monkey-yawn.png" alt="">

/--/

	<?php if( $php == 'ugly' ) { ?>
			<h1><?php echo 'yes it is'; ?></h1>
	<?php } else {
			$content = '';
			$content .= '<h1>'; 
			$content .= 'there is no else.';
			$content .= '</h1>'; 
			return $content;
		}
	?>

/--/

	{% if php == 'ugly' %}
		<h1>yes it is</h1>
	{% else %}
		<h1>there is no else</h1>
	{% endif %}
	
/---/

	<h1>{{post.title}}</h1>

	vs.

	<h1><?php the_title(); ?></h1>

/---/

	<h1>{{post.some_field}}</h1>

	vs.

	<h1><?php get_field('some_field'); ?></h1>

/--/

# Get 'dem terms.

/---/

	get_terms();
	get_the_terms();
	get_the_term_list();

/---/

<p class="code-title special">PHP</p>

	<ul>
		echo get_the_term_list( $post->ID, 'styles', '<li>', ',</li><li>', '</li>' );
	</ul>

/--/

<p class="code-title special">Twig</p>

	<ul>
		{% for t in post.terms('class') %}
			<li>{{t.name}}</li>
		{% endfor %}
	</ul>

/--/

#Filters FTW

/---/

<p class="code-title special">Twig</p>
	
	<h1>{{post.title|lower}}</h1>

/---/

<p class="code-title special">Twig</p>

	<img src="{{post.thumbnail.src|resize(600)}}">

/---/

#To the TackleBox!

<br>

### i.e. Death to the <span class="special">Blob</span>

/--/

#<span class="fragment"><strike>Theme</strike></span>

#<span class="fragment special">Website</span>

/--/

<img src="img/sass/eyebleach3.jpg" alt="">

/--/


#Thanks!

###[notlaura.com](http://notlaura.com) <span class="grey">//</span> @laras126

