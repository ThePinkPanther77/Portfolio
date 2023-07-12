<main>
	<section id="about">
		<h2>Bio</h2>
		<p>
			I'm a computer science student at Innopolis University. My skills include C++, Java, Python,
			HTML/CSS, and Figma. I'm also familiar with JavaScript, Dart, Flutter, Git, and SQL.
		</p>
	</section>
	<section id="projects">
		<h2>Projects</h2>
		<div>
			<article>
				<h3>FixMyEnglish</h3>
				<p>
					Contributed to a Flutter project that helps users check and correct their academic writing
					style in papers.
				</p>
			</article>
			<article>
				<h3>Compass and Pirates</h3>
				<p>
					Developed an interactive environment to assess the performance differences between the A*
					algorithm and backtracking. The project involved generating random maps and analyzing the
					algorithms against different obstacle variants.
				</p>
			</article>
			<article>
				<h3>Quadratic Equation Plotter</h3>
				<p>
					Created a Python tool that allows users to easily plot quadratic equations and visualize
					their graphs.
				</p>
			</article>
		</div>
	</section>
</main>

<style>
	main {
		margin: 0;
		padding: 0;
	}

	#about h2 {
		margin: 25px;
		padding: 25px;
		text-align: center;
		font-size: 40px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		color: #348aa7;
		font-weight: 600;
	}

	#about {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		background-color: #a1273c;
		height: 500px;
		text-align: center;
		padding: 25px 200px;
		font-size: 24px;
		color: #faf9f6;
		font-family: 'Courier New', Courier, monospace;
	}

	#projects {
		margin: 0;
		padding: 0;
		background-color: #faf9f6;
	}

	#projects h2 {
		margin: 25px;
		padding: 25px;
		text-align: center;
		font-size: 40px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		color: #348aa7;
		font-weight: 600;
	}

	#projects div {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		margin: 50px;
	}

	#projects h3 {
		padding: 20px;
		margin: 15px;
		color: #a1273c;
		font-size: 32px;
		font-weight: 600;
	}

	#projects article {
		width: 600px;
		padding: 25px;
		color: #af9b46;
		font-weight: 300;
		font-size: 20px;
		text-align: center;
		font-family: 'Courier New', Courier, monospace;
	}
</style>
