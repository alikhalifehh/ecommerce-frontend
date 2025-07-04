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

Task 6: Create at Least Two Reusable Components
Refactored the app by creating reusable Angular components: a ProductCardComponent to display individual product details, and a parent component to manage and render the product list. Implemented data passing from parent to child using @Input() to supply product information, and used @Output() with EventEmitter in the child to notify the parent when a product is added to the cart.

Task 7: Use Reactive Forms or Template-driven Forms
Implemented Template-driven Forms specifically in the login page for efficient form handling and validation. Due to limitations with free verions of WordPress hosting (authentication not supported for self-hosted access) so I switched to Firebase Authentication to manage user login.I applied an Authentication Guard that restricts access to all pages until the user logs in. Additionally, added a Sign Out button in the navigation bar that lredirects the user to the login page.
https://wordpress.com/support/plugins

Task 8: Add Basic Error Handling
Basic error handling was implemented in  (products.component.ts) within the subscription to the product fetching service. When a network request fails, the error callback give a user-friendly toast message informing the user that products could not be loaded. This was tested by simulating network failures like disconnecting the internet or using an invalid API URL and verifying that the error message appeared appropriately without breaking the app or causing console errors.






