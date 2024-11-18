// Menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*= '+ id +']').classList.add('active');
            })
        }
    })

    // sticky navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove menu icon navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// dark-light mode
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
};
// Dowmload CV
 // Assurez-vous que le fichier CV est correctement accessible dans le bon dossier
 const downloadButton = document.getElementById('download-cv');

 downloadButton.addEventListener('click', function(event) {
     event.preventDefault();

     // Créez un élément <a> dynamique pour simuler un téléchargement
     const link = document.createElement('a');
     link.href = './files/cv_dev.pdf';
     link.download = 'Brice_Youaleu_CV.pdf';
     document.body.appendChild(link);
     link.click();  // Simule un clic sur le lien pour démarrer le téléchargement
     document.body.removeChild(link);  // Nettoie le DOM après le téléchargement
 });
// Tableau de données pour chaque portfolio
const portfolios = [
    { imgSrc: 'images/portfolio1.jpg', title: 'Graphic Design', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, tempora similique!' },
    { imgSrc: 'images/portfolio2.jpg', title: 'Graphic Design', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, tempora similique!' },
    { imgSrc: 'images/portfolio3.jpg', title: 'Graphic Design', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, tempora similique!' },
    { imgSrc: 'images/portfolio4.jpg', title: 'Graphic Design', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, tempora similique!' },
    { imgSrc: 'images/portfolio5.jpg', title: 'Graphic Design', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, tempora similique!' },
    { imgSrc: 'images/portfolio6.jpg', title: 'Graphic Design', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, tempora similique!' }
];

// Fonction pour créer et ajouter les éléments portfolio
function generatePortfolioItems() {
    const container = document.getElementById('portfolio-container');
    
    portfolios.forEach(portfolio => {
        // Créer un élément .portfolio-box
        const portfolioBox = document.createElement('div');
        portfolioBox.classList.add('portfolio-box');
        
        // Créer l'image
        const img = document.createElement('img');
        img.src = portfolio.imgSrc;
        img.alt = portfolio.title;
        
        // Créer la couche (layer)
        const portfolioLayer = document.createElement('div');
        portfolioLayer.classList.add('portfolio-layer');
        
        // Ajouter le titre
        const h4 = document.createElement('h4');
        h4.textContent = portfolio.title;
        
        // Ajouter la description
        const p = document.createElement('p');
        p.textContent = portfolio.description;
        
        // Créer le lien avec l'icône
        const link = document.createElement('a');
        link.href = '#';
        const icon = document.createElement('i');
        icon.classList.add('bx', 'bx-link-external');
        link.appendChild(icon);
        
        // Ajouter l'événement de clic sur le lien
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche l'action par défaut (le changement de page)
            openModal(portfolio.imgSrc);
        });
        
        // Ajouter les éléments à la layer
        portfolioLayer.appendChild(h4);
        portfolioLayer.appendChild(p);
        portfolioLayer.appendChild(link);
        
        // Ajouter l'image et la layer à la portfolio box
        portfolioBox.appendChild(img);
        portfolioBox.appendChild(portfolioLayer);
        
        // Ajouter le portfolio box au container
        container.appendChild(portfolioBox);
    });
}

// Fonction pour ouvrir la modale
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageSrc; // Change l'image de la modale
    modal.style.display = 'flex'; // Affiche la modale
}

// Fonction pour fermer la modale
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Cache la modale
}

// Ajouter l'événement de clic pour fermer la modale lorsque l'on clique sur le bouton "close"
document.getElementById('close-modal').addEventListener('click', closeModal);

// Ajouter l'événement de clic pour fermer la modale lorsque l'on clique en dehors de l'image
window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Appeler la fonction pour générer les éléments
generatePortfolioItems();
