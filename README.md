# Sample-Portfolio-Hexinox
This is a starter template for building your own personal portfolio website!


## ✨ Features

*   **Responsive Design**: Looks great on desktops, tablets, and mobile devices.
*   **Clean & Modern UI**: A minimalist aesthetic with a focus on readability and user experience.
*   **Easy Customization**: Clearly commented HTML and CSS files make it simple to update content, colors, and images.
*   **Smooth Animations**: Subtle scroll animations and hover effects for an engaging feel.
*   **Modular Structure**: Organized HTML, CSS, and JavaScript files for better maintainability.
*   **Sections Included**:
    *   **Home**: A welcoming introduction with your name and role.
    *   **About Me**: A short bio, a placeholder for your image, and a section for your skills.
    *   **Projects**: A grid to display your projects with images, descriptions, and links.
    *   **Contact**: Your email, phone (optional), location, and social media links.

## 🚀 Getting Started

Follow these steps to get your personal portfolio website up and running:

1.  **Fork this repository**: Click the "Fork" button at the top right of this page to create a copy of this repository in your GitHub account.
2.  **Clone the forked repository**:
    ```bash
    git clone https://github.com/JibinGijo/Sample-Portfolio-Hexinox
    ```
3.  **Navigate to the project directory**:
    ```bash
    cd Sample-Portfolio-Hexinox
    ```
4.  **Open the project**: Open the project folder in your favorite code editor (e.g., VS Code).

## ✍️ Customization Guide

All the content you need to change is located primarily in `index.html` and `css/styles.css`. Look for `<!-- EDIT: ... -->` comments in `index.html` for direct content changes.

### 1. Update Your Information (`index.html`)

*   **Your Name/Initials**:
    *   In the `<header>` section, find the `logo` div and change `ABC` to your initials or name.
    *   In the `<section id="home">` (Hero Section), update `Your Name` and `Full Stack Developer` with your name and role.
    *   In the `<section id="home">`, update the brief intro paragraph.
    *   In the `<footer>` section, update the copyright text with your name and the current year.
*   **About Me Section**:
    *   Replace the placeholder image in `<div class="about-image">` with your own profile picture. You can link to an online image or place your image in a folder (e.g., `img/your-photo.jpg`) and update the `src` path.
    *   Update the paragraphs in `<div class="about-text">` with your personal bio.
    *   Modify the `skills` section to reflect your own skills and adjust the `width` percentage in `style="width: X%"` for each `skill-level` to match your proficiency.
*   **Projects Section**:
    *   For each `project-card`, update the `project-img` `src` with your project's image.
    *   Change the `<h3>` title and `<p>` description for each project.
    *   Update the `project-tags` with the technologies you used (e.g., `<span>React</span>`, `<span>Node.js</span>`).
    *   Update the `href` attributes in the `project-links` to point to your live project demo and source code.
*   **Contact Section**:
    *   Update the `mailto:` link and displayed email address in the `contact-item` with the envelope icon.
    *   (Optional) Update the `tel:` link and displayed phone number, or remove this `contact-item` if not needed.
    *   Update your location in the `contact-item` with the map marker icon.
    *   Update the `href` attributes for your social media links in the `social-links` div (GitHub, LinkedIn, Instagram, etc.). Remove any social links you don't use.

### 2. Customize Styling (`css/styles.css`)

*   **Colors**: Open `css/styles.css` and modify the CSS variables under `:root` to change the entire color scheme of the website.
    *   `--primary-color`: Main accent color.
    *   `--secondary-color`: Secondary accent color.
    *   `--accent-color`: Another accent color for highlights.
    *   `--text-dark`, `--text-medium`, `--text-light`: Text colors.
    *   `--bg-light`, `--bg-off-white`, `--bg-gray`: Background colors.
*   **Typography**: Adjust `font-family`, `font-size`, and `font-weight` properties in `css/styles.css` to change the website's fonts. The current font is 'Inter'.
*   **Spacing**: The design uses an 8px spacing system. You can adjust the `--space-xs` to `--space-xxl` variables if you need to modify the overall spacing.

### 3. Animations (`css/animations.css`)

*   The `css/animations.css` file contains predefined animations like `fade-in`, `slide-in-left`, `slide-in-right`, and `pulse`. You can apply these classes to elements in your `index.html` or modify their properties.
*   The `js/main.js` file handles scroll-based animations by adding the `animated` class to elements with `animate-on-scroll` when they enter the viewport.

### 4. Interactivity (`js/main.js`)

*   The `js/main.js` file handles the mobile navigation toggle and active navigation link highlighting based on scroll position. You generally won't need to modify this file unless you want to add new interactive features.

## 🛠️ Technologies Used

*   **HTML5**: For the structure and content of the website.
*   **CSS3**: For styling, layout, and animations.
*   **JavaScript**: For interactive elements like the mobile navigation and scroll animations.
*   **Font Awesome**: For icons.
*   **Google Fonts**: For custom typography.

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

---

Feel free to customize this template to make it uniquely yours! If you have any questions or need further assistance, don't hesitate to reach out.

