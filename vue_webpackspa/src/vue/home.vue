<template>
	<div class="home-con">
		<ul>
			<!-- 点击可以跳转 -->
			<li v-link="{name : 'github'}">github</li>
			<li v-link="{name : 'blog'}">bllog</li>
			<!-- 点击没有跳转链接 -->
			<li>segment</li>
			<li v-link="{name : 'about'}">about</li>
		</ul>
	</div>
</template>
<script>

</script>
<style lang="sass">
	@import '../scss/home.scss';
	.home-con{
		width: 400px;
		height: 400px;
		li {
			list-style: none;
		}
	}
</style>
