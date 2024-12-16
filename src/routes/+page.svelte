<script>
	import BrandIcon from '$lib/components/BrandIcon.svelte';
	import Card from '$lib/components/Card.svelte';
	import ContentContainer from '$lib/components/ContentContainer.svelte';
	import HoverableListItem from '$lib/components/HoverableListItem.svelte';
	import Particles from '$lib/components/Particles.svelte';
	import Strong from '$lib/components/Strong.svelte';
	import {
		SiAdobeillustrator,
		SiAwslambda,
		SiAmazonaws,
		SiAndroid,
		SiBootstrap,
		SiCss3,
		SiDiagramsdotnet,
		SiDocker,
		SiExpress,
		SiFigma,
		SiFlutter,
		SiGit,
		SiGithub,
		SiGnubash,
		SiGo,
		SiHtml5,
		SiJavascript,
		SiJquery,
		SiLinux,
		SiMariadb,
		SiMaterialdesign,
		SiMongodb,
		SiMysql,
		SiNginx,
		SiNgrok,
		SiNodedotjs,
		SiDart,
		SiPostgresql,
		SiReact,
		SiSass,
		SiSqlite,
		SiSvelte,
		SiTypescript,
		SiVisualstudiocode,
		SiTailwindcss,
		SiPython
	} from 'svelte-icons-pack/si';
</script>

<Particles className="absolute inset-0 -z-50 overflow-hidden" refresh={true} />
<ContentContainer pageHeaderLabel={'Home'}>
	<!-- Welcome card -->
	<Card id="welcome" title="Welcome!">
		<p>
			I am a Mechanical Engineer, a Full Stack Web Developer, and a Flutter Developer. My <Strong
				>passions</Strong
			>
			lie in puzzles, technology, and design. This website serves as a <Strong>showcase</Strong> for
			my skills, hobbies, and interests, reflecting my desire to leave a <Strong>positive</Strong> impact
			on the internet and the world around me.
		</p>
	</Card>
	<!-- My Toolbox card -->
	<Card id="mytoolbox" title="My Toolbox">
		<div class="flex flex-wrap">
			<div class="py-2">
				<h3>Languages</h3>
				<div class="flex flex-wrap">
					<BrandIcon src={SiGo} color="#00ADD8" />
					<BrandIcon src={SiJavascript} color="#E9CF0C" />
					<BrandIcon src={SiTypescript} color="#3178C6" />
					<BrandIcon src={SiDart} color="#0175C2" />
					<BrandIcon src={SiHtml5} color="#E34F26" />
					<BrandIcon src={SiCss3} color="#1572B6" />
					<BrandIcon src={SiGnubash} color="#4EAA25" />
					<BrandIcon src={SiPython} color="#3776AB" />
				</div>
			</div>
			<div class="py-2">
				<h3>Frameworks & Libraries</h3>
				<div class="flex flex-wrap">
					<BrandIcon src={SiReact} color="#61DAFB" />
					<BrandIcon src={SiSvelte} color="#FF3E00" />
					<BrandIcon src={SiFlutter} color="#02569B" />
					<BrandIcon src={SiTailwindcss} color="#06B6D4" />
					<BrandIcon src={SiBootstrap} color="#7952B3" />
					<BrandIcon src={SiExpress} color="#000000" />
					<BrandIcon src={SiJquery} color="#0769AD" />
					<BrandIcon src={SiNodedotjs} color="#5FA04E" />
					<BrandIcon src={SiSass} color="#CC6699" />
					<BrandIcon src={SiMaterialdesign} color="#757575" />
				</div>
			</div>

			<div class="py-2">
				<h3>Databases, Tools & Software</h3>
				<div class="flex flex-wrap">
					<BrandIcon src={SiMysql} color="#4479A1" />
					<BrandIcon src={SiMongodb} color="#47A248" />
					<BrandIcon src={SiPostgresql} color="#4169E1" />
					<BrandIcon src={SiSqlite} color="#003B57" />
					<BrandIcon src={SiMariadb} color="#003545" />
					<BrandIcon src={SiDocker} color="#2496ED" />
					<BrandIcon src={SiAmazonaws} color="#232F3E" />
					<BrandIcon src={SiAwslambda} color="#FF9900" />
					<BrandIcon src={SiDiagramsdotnet} color="#F08705" />
					<BrandIcon src={SiGit} color="#F05032" />
					<BrandIcon src={SiGithub} color="#181717" />
					<BrandIcon src={SiLinux} color="#010105" />
					<BrandIcon src={SiAndroid} color="#34A853" />
					<BrandIcon src={SiNginx} color="#009639" />
					<BrandIcon src={SiNgrok} color="#1F1E37" />
					<BrandIcon src={SiVisualstudiocode} color="#0098FF" />
					<BrandIcon src={SiFigma} color="#F24E1E" />
					<BrandIcon src={SiAdobeillustrator} color="#FF9A00" />
				</div>
			</div>
		</div>
	</Card>
	<!-- Why This Site card -->
	<Card id="why-this-site" title="Why This Site?">
		<p>I wanted to <Strong>build</Strong> a personal space for several reasons:</p>
		<ul class="p-3">
			<HoverableListItem>To establish my own website.</HoverableListItem>
			<HoverableListItem>To create useful tools and resources online.</HoverableListItem>
			<HoverableListItem>To compile valuable links and information.</HoverableListItem>
			<HoverableListItem
				>To centralize my projects in one accessible, open-source location.</HoverableListItem
			>
			<HoverableListItem
				>And, ultimately, to showcase my work, <Strong>passion</Strong>, and growth.</HoverableListItem
			>
		</ul>
	</Card>
	<!-- Engineering My Own Path card -->
	<Card id="engineering-my-own-path" title="Engineering My Own Path?">
		<p>
			I graduated with a degree in Mechanical Engineering from LIU, while my knowledge in design,
			programming, and development has been <Strong>cultivated</Strong>
			through self-directed learning. I would like to acknowledge the incredible support of my professors:
		</p>
		<div class="flex">
			<ul class="p-3">
				<HoverableListItem>Dr. Loubna Aboumelhem</HoverableListItem>
				<HoverableListItem>Dr. Jalal Faraj</HoverableListItem>
				<HoverableListItem>Dr. Mehdi Chouman</HoverableListItem>
			</ul>
			<ul class="p-3">
				<HoverableListItem>Dr. Faten Ghazzai</HoverableListItem>
				<HoverableListItem>Dr. Nawal Ayoub</HoverableListItem>
				<HoverableListItem>Ms. Ghina Kanj</HoverableListItem>
			</ul>
		</div>

		<p>Their guidance has been <Strong>invaluable</Strong> in my journey.</p>
	</Card>
	<!-- My Perspective on Technology card -->
	<Card id="perspective-on-technology" title="My Perspective on Technology">
		<p>
			Technology has become indispensable in our daily lives. Just as engineers have historically
			relied on physical tools, we now harness the power of technology, which serves as a versatile <Strong
				>instrument</Strong
			> — much like a Swiss Army knife. It empowers us to solve problems and enhance our work in innovative
			ways. Yes, it may sound AI-generated, because it is — but it's crafted from my own input and prompt
			engineering.
		</p>
	</Card>
	<!-- What Is The Formula of Experience card -->
	<Card id="experience-formula" title="What Is The Formula of Experience?">
		<p>
			Many people often confuse Experience with <Strong><i>Knowledge</i></Strong>. And there’s some
			truth to this misunderstanding, so let me explain <br />
			<Strong>Experience</Strong> = Knowledge + Consistency.
		</p>
	</Card>
	<!-- The Beauty of Knowledge card -->
	<Card id="knowledge-beauty" title="The Beauty of Knowledge">
		<p>
			How can knowledge transcend age? It can be <Strong>shared!</Strong> A 100-year-old man and a 15-year-old
			boy can learn from each other, proving that <Strong>age</Strong> doesn’t matter in the pursuit
			of knowledge.
		</p>
	</Card>
	<!-- Art of Consistency card -->
	<Card id="art-of-consistency" title="Art of Consistency">
		<p>
			This brings us to consistency — <Strong>simple</Strong> yet powerful. It’s like hammering a nail:
			while the knowledge may be common, consistency lies in accuracy and success. Achieving a comparable
			end result requires repetition and time.
			<br />
			This is where knowledge can surpass <Strong>experience</Strong>: after all, you wouldn’t use a
			hammer to drive a screw!
		</p>
	</Card>
	<!-- Powerful Minds card -->
	<Card id="powerful-mind" title="Powerful Minds">
		<p>
			<Strong>Knowledge</Strong> is power, yet those who hold it often overlook their responsibility
			and may misuse it. It’s important to use your knowledge to do good and make a <Strong
				>positive</Strong
			> impact.
		</p>
	</Card>
	<!-- What Can We Do card -->
	<Card id="what-can-we-do" title="What Can We Do?">
		<p>
			Many people give up on the world, believing it to be a lost cause or a sinking ship. Even if
			there’s some truth to that belief, I refuse to find comfort in self-deception. I believe in
			our potential to create <Strong>change</Strong> and improve. Together, WE can do <Strong
				>better</Strong
			>!
		</p>
	</Card>
	<!-- Final Thoughts card -->
	<Card id="what-can-we-do" title="">
		<p>
			I enjoy the exchange of <Strong>knowledge</Strong>; it’s free, valuable, and often
			life-changing!
		</p>
	</Card>
</ContentContainer>
