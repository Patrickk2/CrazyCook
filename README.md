# 🍳 CrazyCook  

CrazyCook est un site de cuisine conçu pour rassembler les passionnés de gastronomie autour de recettes savoureuses et d'astuces culinaires. Que vous soyez un chef en herbe ou un expert, CrazyCook e[...]

---

## 🛠️ Fonctionnalités  
- 📖 Catalogue de recettes : Découvrez des recettes variées adaptées à tous les goûts et niveaux.  
- 🔍 Recherche rapide : Trouvez facilement des recettes grâce à une barre de recherche intuitive.  
- 📰 Blog culinaire : Lisez des articles inspirants et découvrez des astuces pratiques.  
- 📩 Newsletter : Recevez des recettes exclusives et des astuces directement dans votre boîte mail.  

---

## 🌟 Aperçu du projet  
![Preview du site](https://github.com/user-attachments/assets/50bf209d-629f-49cc-9a2a-53d1c2b999b7) 

*Une interface moderne et conviviale pour naviguer facilement entre les sections.*  

---

## 🚀 Mise en route  

### 🔧 Pré-requis  
- Navigateur : Un navigateur moderne (Google Chrome, Firefox, Edge).  
- Optionnel : Un éditeur de texte (Visual Studio Code, Sublime Text).  

### 🖥️ Installation locale  
1. Clonez le projet :  
   ```bash  
   git clone https://github.com/Patrrikcode2/crazycook.git  
   cd crazycook  
   ```  
2. Ouvrez `index.html` dans votre navigateur.  

### 🌐 Hébergement en ligne  
CrazyCook est conçu pour être déployé facilement sur des services comme :  
- [Netlify](https://www.netlify.com/)  
- [Vercel](https://vercel.com/)  
- [GitHub Pages](https://pages.github.com/)  

---

## 📚 Documentation  
### 📁 Structure des fichiers  
```  
crazycook/  
├── index.html          # Page principale  
├── styles/             # Dossier contenant les fichiers CSS  
├── scripts/            # (Futur) Dossier pour les fichiers JavaScript  
├── assets/             # Images et autres médias  
└── README.md           # Documentation du projet  
```  

### 🎨 Technologies utilisées  
- HTML5  
- CSS3  
- (Futur) JavaScript ES6+

---

## 💡 Contribuer  
Les contributions sont les bienvenues ! Pour contribuer :  
1. Forkez le projet.  
2. Créez une branche pour votre fonctionnalité :  
   ```bash  
   git checkout -b feature/nouvelle-fonctionnalite  
   ```  
3. Faites vos modifications et ouvrez une Pull Request.  

---

## 🏷️ Licence  
CrazyCook est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus d’informations.  

---

## 📬 Contact  
- Email : lawsonkarl76@gmail.com  
- GitHub : [CrazyCook Repo](https://github.com/Patrrikcode2/crazycook)  

👩‍🍳 Bon appétit avec CrazyCook !  

## Local Development

To run the website locally for development and testing, follow these steps:

1.  **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) and npm installed.
2.  **Install dependencies**: Open your terminal in the project root and run:
    ```bash
    npm install
    ```
3.  **Start the development server**: After installation, run:
    ```bash
    npm run dev
    ```
    This will start a local server (usually at `http://localhost:8080`) and automatically open the site in your default web browser. The `-o` flag opens the browser, and `--cors` enables CORS, which can be helpful for local development involving cross-origin requests (though likely not an immediate issue for this simple static site).

## Running Tests

To run the automated end-to-end tests locally:

1.  **Install dependencies** (if not already done):
    ```bash
    npm install
    ```
2.  **Install Playwright browsers**:
    ```bash
    npx playwright install --with-deps
    ```
3.  **Run tests**:
    ```bash
    npm test
    ```
