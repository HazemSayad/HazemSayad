<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import ContentContainer from '$lib/components/ContentContainer.svelte';
	import HoverableListItem from '$lib/components/HoverableListItem.svelte';
	import Particles from '$lib/components/Particles.svelte';
</script>

<Particles className="absolute inset-0 -z-50 overflow-hidden" refresh={true} />
<ContentContainer pageHeaderLabel={'Roadmap'}>
	<!-- Welcome card -->
	<Card id="projects" title="My Projects">
		<ul>
			<HoverableListItem>Earth is a Battery</HoverableListItem>
			<HoverableListItem>HazemSayad.com</HoverableListItem>
			<HoverableListItem>Germination Box</HoverableListItem>
			<HoverableListItem>DietPal</HoverableListItem>
			<HoverableListItem>FloppyFork</HoverableListItem>
			<HoverableListItem>WebARB</HoverableListItem>
		</ul>
	</Card>
	<Card id="2024" title="2024">
		<ul>
			<HoverableListItem>Learned React and Svelte</HoverableListItem>
			<HoverableListItem>Started developing FloppyFork</HoverableListItem>
			<HoverableListItem>Part-time Full-Stack Developer for startups</HoverableListItem>
			<HoverableListItem>Polished DietPal</HoverableListItem>
			<HoverableListItem>Learned React Three Fiber</HoverableListItem>
		</ul>
	</Card>
	<Card id="2023" title="2023">
		<ul>
			<HoverableListItem>Backend Engineer at a FinTech</HoverableListItem>
			<HoverableListItem>Learned Go</HoverableListItem>
			<HoverableListItem>Learned Postgres</HoverableListItem>
			<HoverableListItem>Learned Docker</HoverableListItem>
			<HoverableListItem>Learned Prompt Engineering</HoverableListItem>
			<HoverableListItem>Developed custom layered MFA process</HoverableListItem>
			<HoverableListItem
				>Refactored codebase for security, scalability, and maintainability</HoverableListItem
			>
			<HoverableListItem>Reduced technical debt by documenting with OpenAPI</HoverableListItem>
			<HoverableListItem>Worked with Linux servers and Docker containers</HoverableListItem>
			<HoverableListItem>Built a chatbot using GPT-3.5-turbo</HoverableListItem>
		</ul>
	</Card>
	<Card id="2022" title="2022">
		<ul>
			<HoverableListItem>Learned JavaScript and Node.js</HoverableListItem>
			<HoverableListItem>Learned MongoDB and Mongoose</HoverableListItem>
			<HoverableListItem>Learned MySQL and SQLite</HoverableListItem>
			<HoverableListItem>Learned Flutter</HoverableListItem>
			<HoverableListItem>Gained experience with WebHooks, OAuth, and REST APIs</HoverableListItem>
			<HoverableListItem>Developed custom workflows in n8n</HoverableListItem>
			<HoverableListItem>Deployed and maintained AWS EC2 instance</HoverableListItem>
			<HoverableListItem>Started Backend Developer role</HoverableListItem>
			<HoverableListItem>Started a new project: DietPal</HoverableListItem>
		</ul>
	</Card>
	<Card id="2021" title="2021">
		<ul>
			<HoverableListItem>Developed senior project: Germination Box</HoverableListItem>
			<HoverableListItem>Taught myself SolidWorks animation</HoverableListItem>
			<HoverableListItem>Built a USB-powered heating vest from recycled cables</HoverableListItem>
			<HoverableListItem>Transitioned to Linux (Pop!_OS/Ubuntu)</HoverableListItem>
			<HoverableListItem>Graduated BSME with honors</HoverableListItem>
			<HoverableListItem
				>Began self-teaching Full-Stack Web and Mobile Development</HoverableListItem
			>
			<HoverableListItem>Learned SQL</HoverableListItem>
		</ul>
	</Card>
	<Card id="2020" title="2020">
		<ul>
			<HoverableListItem>Learned MATLAB, SolidWorks (2D & 3D)</HoverableListItem>
			<HoverableListItem>Mastered soldering and wiring</HoverableListItem>
			<HoverableListItem>
				Disassembled, modified, and successfully assembled my PC</HoverableListItem
			>
		</ul>
	</Card>
	<Card id="2019" title="2019">
		<ul>
			<HoverableListItem>Made Honor’s List for 5 consecutive semesters</HoverableListItem>
			<HoverableListItem>Studied Public Health & Safety</HoverableListItem>
			<HoverableListItem>Taught myself First Aid</HoverableListItem>
			<HoverableListItem>Began working with electronics and circuit boards</HoverableListItem>
			<HoverableListItem>Invested in semi-pro engineering toolkits</HoverableListItem>
		</ul>
	</Card>
	<Card id="2018" title="2018">
		<ul>
			<HoverableListItem>Second PC (2.2GHz 6-core/GTX1060 Max-Q)</HoverableListItem>
			<HoverableListItem>Learned AutoCAD and 2D/3D design</HoverableListItem>
			<HoverableListItem>Worked as head chef</HoverableListItem>
			<HoverableListItem>Placed 4th in Inter-Campus Speech Competition</HoverableListItem>
		</ul>
	</Card>
	<Card id="2017" title="2017">
		<ul>
			<HoverableListItem>Self-taught Adobe Illustrator</HoverableListItem>
			<HoverableListItem>Learned OOP design patterns</HoverableListItem>
			<HoverableListItem>Created a successful business logo</HoverableListItem>
			<HoverableListItem>Started Mechanical Engineering degree</HoverableListItem>
			<HoverableListItem>Worked as sous-chef</HoverableListItem>
		</ul>
	</Card>
	<Card id="2016" title="2016">
		<ul>
			<HoverableListItem>
				Developed public speaking, project management, and leadership skills (OLA MAL)
			</HoverableListItem>
			<HoverableListItem>Assistant to Senior Technician</HoverableListItem>
			<HoverableListItem>Strengthened math and physics skills</HoverableListItem>
			<HoverableListItem>
				Graduated with top scores in Math, Physics, and Chemistry</HoverableListItem
			>
		</ul>
	</Card>
	<Card id="2015" title="2015">
		<ul>
			<HoverableListItem
				>Explored Cheat Engine, Android rooting/modding, and memory hacks</HoverableListItem
			>
			<HoverableListItem>Gained basics of networking</HoverableListItem>
		</ul>
	</Card>
	<Card id="2014" title="2014">
		<ul>
			<HoverableListItem>First PC (1GHz APU/8GB/500GB)</HoverableListItem>
			<HoverableListItem>Learned C, Java, and batch scripting</HoverableListItem>
		</ul>
	</Card>
</ContentContainer>
