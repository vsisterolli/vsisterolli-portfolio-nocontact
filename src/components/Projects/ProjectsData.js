const projectsData = [
	{
		name: "Linkr",
		images: ["https://i.imgur.com/2bPnKY2.png", "https://i.imgur.com/qQ1m4kC.png", "https://i.imgur.com/ZYncCQ8.png", "https://i.imgur.com/oUYrDoW.png", "https://i.imgur.com/8hYQzQd.png"],
		description: `O Linkr é uma rede social de compartilhamento de links com layout responsivo inspirada pelo twitter. Possuí diversas funcionalidades de uma rede social: cadastro/login, timeline de carregamento infinito que prioriza posts de quem você segue, trending, perfis, etc. Foi construído por um total de 5 pessoas utilizando o método SCRUM.\n\n 
                      O front-end foi construído utilizando React e suas bibliotecas, como Axios, Styled-Components e outras.\n\n
                      O back-end foi construído utilizando Node, com Express.js e PostgreSQL;\n\n
                      Atuei na construção e revisão de features majoritárias, como a página de perfil e pesquisa de usuários. Tanto na parte do front-end quanto na parte do back-end.
                    `,
		deploy: "https://linkr-front-sandy.vercel.app/"
	},
	{
		name: "Drivent",
		images: ["https://i.imgur.com/jzRKUwy.png", "https://i.imgur.com/aXs3Qlp.png", "https://i.imgur.com/4e0bnMX.png"],
		description: `O Driven.t é um serviço de gestão de eventos, facilitando a aquisição de ingressos, hospedagens e certificados para o público-alvo. Contém funcionalidades como cadastro, visualização de eventos próximos a ocorrer, geração de certificado, locação de quartos próximos ao evento, etc.\n\n
                      A princípio, apenas a API do site (back-end) está disponível, e foi construída utilizando Node, Express.js, PostgreSQL, Prisma, Jest, Typescript, Eslint, entre outras ferramentas.\n\n
                      Participei na manutenção e elaboração de novas rotas e features e criação de teste para as que já haviam sido implementadas com o objetivo de garantir o bom funcionamento da aplcação.
                    `,
		deploy: "https://github.com/vsisterolli/projeto__calvs-drivent__p1"
	},
	{
		name: "E-clothing",
		images: ["https://i.imgur.com/jjd15pH.jpg", "https://i.imgur.com/ImzptPY.jpg", "https://i.imgur.com/ik9Opny.jpg", "https://i.imgur.com/lnNuyh8.jpg", "https://i.imgur.com/EmrdcJD.jpg", "https://i.imgur.com/xpwvmCr.png"],
		description:`A E-Clothing é um e-commerce de moda. O site possui um layout mobile com todas as funcionalidades de um e-commerce moderno: listagem de produtos, filtro, cadastro/login, carrinho, etc.\n\n
                     Fui inteiramente responsável pela criação da API do site (back-end), a qual utiliza Node com Express, MongoDb, armazenamento de arquivos com a biblioteca multer, envio de email automático, etc.\n\n
                     Também fui responsável pela criação de páginas e funcionalidades para o front-end do site, além da revisão de algumas previamente realizadas.
                    `,
		deploy: "https://projeto15-e-clothing-front.vercel.app/"
	},
	{
		name: "Shortly",
		images: ["https://i.imgur.com/0EMctVh.png", "https://i.imgur.com/hMTD6U1.png", "https://i.imgur.com/sQWcHzY.png", "https://i.imgur.com/wWds8bR.png", "https://i.imgur.com/UHPlJNf.png"],
		description: `O Shortly é um website encurtador de links. As principais funcionalidades incluem o cadastro e o registro de usuários, encurtar um link, acompanhar em tempo real os cliques nos seus links, edição/exclusão dos links criados, ranking semanal com os links mais acessados, etc.\n\n
                      Eu fui inteiramente responsável pela criação da API do site (back-end). A elaborei utilizando MongoDB como banco de dados e Node juntamente de Express para gerenciamento das requisições.
                     `,
		deploy: "https://github.com/vsisterolli/shortly"
	},
	{
		name: "Este portfolio!",
		images: ["https://i.imgur.com/Rmk0FLy.png"],
		description: `Se você chegou até aqui, agradeço de coração por ter se interessado no meu trabalho! Esse portfolio é justamente a junção de algumas coisas que realizei até aqui e para que você possa me conhecer um pouco melhor.\n\n
                      Esse portfolio é um site simples, de página única criada usando React, com algumas bibliotecas interessantes, como Styled Componentes, react-modal, toastify, entre outras. Não usa nenhuma API externa! As imagens são armazenadas localmente e/ou usando o imgur.\n\n
                      Fui responsável totalmente por sua criação, desde as ideias de layout, composição, front-end e tudo! Espero que tenha gostado do que viu até aqui.
                    `,
		deploy:"https://vsisterolli-portfolio.vercel.app/"
	}
];

export const englishProjectsData = [
	{
		name: "Linkr",
		images: ["https://i.imgur.com/2bPnKY2.png", "https://i.imgur.com/qQ1m4kC.png", "https://i.imgur.com/ZYncCQ8.png", "https://i.imgur.com/oUYrDoW.png", "https://i.imgur.com/8hYQzQd.png"],
		description: `Linkr it's a link-sharing social media with a responsive layout inspired by Twitter. It has diverse functionalities of a usual social media: register/login, infinite loading timeline which prioritizes posts that are of your interest, trending, profiles, etc. It was built by a total of 5 people using the SCRUM method.\n\n  
                      Front-end was built using React and it's libraries, such as Axios, Styled-Components and others.\n\n
					  Back-end was built using Node, with Express.js and PostgreSQL.\n\n
					  I acted in the building and revision of majoritary features, such as the profile search and profile page, both back-end and front-end structures.
					  `,
		deploy: "https://linkr-front-sandy.vercel.app/"
	},
	{
		name: "Drivent",
		images: ["https://i.imgur.com/jzRKUwy.png", "https://i.imgur.com/aXs3Qlp.png", "https://i.imgur.com/4e0bnMX.png"],
		description: `Driven.t it's an event management service, facilitating ticket acquisitions, accommodation, and certificates to the public. It has a lot of functionalities such as register/login, visualization of events that are near to occur, certificates generation, rents of rooms that are near to where the event is happening, etc.\n\n
					  The API (back-end) was built using Node, Express, PostgreSQL, Prisma, Jest, Typescript, Eslint, Prettier, and other tools.\n\n
					  I was responsible for the implementation of new routes and features, and also, create unitary tests for routes that had been created previously, to assure the well-functioning of the application.
					  `,
		deploy: "https://github.com/vsisterolli/projeto__calvs-drivent__p1"
	},
	{
		name: "E-clothing",
		images: ["https://i.imgur.com/jjd15pH.jpg", "https://i.imgur.com/ImzptPY.jpg", "https://i.imgur.com/ik9Opny.jpg", "https://i.imgur.com/lnNuyh8.jpg", "https://i.imgur.com/EmrdcJD.jpg", "https://i.imgur.com/xpwvmCr.png"],
		description:`E-clothing it's an clothing e-commerce. The website has a mobile layout with all functionalities of modern e-commerces: product listing, filter, register/login, cart, etc.\n\n
					 I was entirely responsible for the creation of the website API (back-end), which uses Node combined with Express.js and MongoDb, file manipulation with multer, automatic sending of email, and others.\n\n
					 I also was responsible for the creation of pages and features to the application front-end, such as the revision of features that had been implemented previously.
					`,
		deploy: "https://projeto15-e-clothing-front.vercel.app/"
	},
	{
		name: "Shortly",
		images: ["https://i.imgur.com/0EMctVh.png", "https://i.imgur.com/hMTD6U1.png", "https://i.imgur.com/sQWcHzY.png", "https://i.imgur.com/wWds8bR.png", "https://i.imgur.com/UHPlJNf.png"],
		description: `Shortly it's a link shortener website. Main functionalities include register/login, link shortening, real-time visualization of the amount of access your link is receiving, edition/deletion of the links created by the user, a weekly ranking with the most accessed links, etc.\n\n
					  I was entirely responsible for the creation of the website API (back-end). I created it using MongoDB as the database along with Node and Express to manage requisitions.
					 `,
		deploy: "https://github.com/vsisterolli/shortly"
	},
	{
		name: "This portfolio!",
		images: ["https://i.imgur.com/Rmk0FLy.png"],
		description: `If you came this far, I'm really thankful for your interest. This portfolio it's the grouping of some things I achieved till now so you can know me better.\n\n
					  This portfolio's a simple website, with a responsive layout, created using React with some of the most interesting libraries: toastify, Styled Components, react-modal, and others. It doesn't use any external API, some images are locally saved and others are saved using imgur.\n\n
					  I was entirely responsible for its creation, since the idea, layout composition, and coding. I really hope that you like what you see.
					 `,
		deploy:"https://vsisterolli-portfolio.vercel.app/"
	}
];

export default projectsData;