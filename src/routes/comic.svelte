<script context="module">
	import moment from 'moment';
	import { Img } from '$lib/index';
	const data = await Img();
	const date = moment(data.year).fromNow();
	console.log(data);
</script>

<section id="image">
	<h2>{data.safe_title}</h2>
	<img src={data.img} alt={data.alt} />
	<p>{date}</p>
</section>

<style>
	#image {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #af9b46;
		font-size: 28px;
		font-family: 'Courier New', Courier, monospace;
		padding: 30px;
		background-color: #a1273c;
	}

	#image img {
		height: 600px;
		width: 500px;
		padding: 25px;
	}

	#image p {
		font-size: 24px;
		color: #348aa7;
	}
</style>
