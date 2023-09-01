const container = document.querySelector('.project__container');
const projectDetails = [
    {
        name : 'Project 1',
        image : 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5hbG9nJTIwY2xvY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
        href : 'https://dovah-dragon.github.io/Analog-Clock/'
    },
    {
        name : 'Project 2',
        image : 'https://images.unsplash.com/photo-1573495612890-430e48b164df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGVycHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
        href : 'https://dovah-dragon.github.io/erp/'
    },
    {
        name : 'Project 3',
        image : 'https://images.unsplash.com/photo-1552422554-0d5af0c79fc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWFsJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
        href : 'https://dovah-dragon.github.io/shoe/'
    },
    {
        name : 'Project 4',
        image : 'https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJhZ29uJTVDfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
        href : 'https://dovah-dragon.github.io/RPG_Dragon_Repeller/'
    },
    {
        name : 'Project 5',
        image : 'https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGlhbm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
        href : 'https://dovah-dragon.github.io/Piano/'
    },
]

function renderCard() {
    projectDetails.forEach(renderCardELements);
}

function renderCardELements(_card, index) {

    const link = document.createElement('a');
    link.setAttribute("href", projectDetails[index].href);
    link.setAttribute("target", "_blank");
    link.classList.add('link');

    const card = document.createElement("div");
    card.classList.add('card');
    card.id = index;

    const img = document.createElement("img");
    img.classList.add('projectImage');
    img.setAttribute("src", projectDetails[index].image);

    const tag = document.createElement('div');
    tag.innerText = projectDetails[index].name;
    tag.classList.add('tag');


    container.append(link);
    link.append(card);
    card.append(img);
    card.append(tag);
    
}

renderCard();
