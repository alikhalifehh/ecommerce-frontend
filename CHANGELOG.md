Task 1: Save All Variables in Environment Files
The goal was to remove all hardcoded configuration values such as API URLs, authentication keys, and tokens from the codebase and instead manage them securely through Angular environment files.
To tackle it,I Learned about Angular environment files: I studied how Angular uses environment.ts for development and environment.prod.ts for production to store configuration variables that can be swapped during builds.
Identified hardcoded values: I searched the project for all hardcoded API URLs, WooCommerce Consumer Keys, and Secrets that were directly embedded in the service and components.
Moved values to environment files: I created relevant variables (apiBaseUrl, wooUsername, wooPassword) inside both environment files with proper development and production values.
Refactored the code: Updated the Angular services and components to import these environment variables and use them instead of hardcoded strings.
Tested the setup by running ng serve and confirming the WooCommerce API calls succeeded.

Task 2: Add a landing page 
Component Creation: Developed a dedicated Angular component named LandingComponent to serve as the landing page of the app.
Routing Setup: Configured Angular routing so that the landing page loads at the root path (/) by adding {path:'',component:landingcomponent} in AppRoutingModule.
Design and Layout: Designed the landing page with a clean, centered layout using Tailwind CSS utility classes for responsiveness and modern styling.
Content Elements:Included a company logo, a welcoming headline, a brief descriptive paragraph about the business and buttons to navigate to main pages in the website.
Styling:Applied a visually appealing gradient background and styled the text and button with Tailwind colors.

Task 3: Add styling with Tailwind CSS
Learning: I learned Tailwind CSS by watching tutorials and studying its official documentation. This helped me understand the utility-first CSS approach and how to efficiently style Angular components.
Tailwind CSS Setup: I successfully integrated Tailwind CSS into the Angular project by following recommended guidelines, which involved configuring the tailwind.config.js file and incorporating the required Tailwind directives into the global stylesheet.
Applying Utility Classes: Instead of relying on traditional SCSS files, I applied Tailwind’s utility classes directly within the component HTML templates.
Responsive Design & Customization: Used Tailwind’s responsive utilities and customized colors and gradients.
Improved Interactivity:Styled buttons and interactive elements using Tailwind’s hover and transition utilities. For example, the Add to Cart buttons change color on hover. Additionally, a loading spinner styled with Tailwind classes appears while product data is being fetched.

Task 4: Ensure the Project Runs Locally

Task 5: Add Git and Push to GitHub
Learning Git Commands: I learned essential Git commands for version control, git init, git status, git add, git commit, git push.
.gitignore Configuration:Added a .gitignore file to exclude unnecessary files and folders (like node_modules, build outputs, and environment files) from being pushed to the repository, keeping it clean.
Documentation Updates: Included progress updates and task descriptions within the repository’s README file to keep the project well-documented, as was required from me.





