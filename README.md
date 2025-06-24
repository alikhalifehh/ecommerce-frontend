Task 1: Save All Variables in Environment Files
The goal was to remove all hardcoded configuration values such as API URLs, authentication keys, and tokens from the codebase and instead manage them securely through Angular environment files.
How I Tackled It?
Learned about Angular environment files: I studied how Angular uses environment.ts for development and environment.prod.ts for production to store configuration variables that can be swapped during builds.
Identified hardcoded values: I searched the project for all hardcoded API URLs, WooCommerce Consumer Keys, and Secrets that were directly embedded in the service and components.
Moved values to environment files: I created relevant variables (apiBaseUrl, wooUsername, wooPassword) inside both environment files with proper development and production values.
Refactored the code: Updated the Angular services and components to import these environment variables and use them instead of hardcoded strings.
Tested the setup: Verified locally that the app correctly used these environment variables by running ng serve and confirming the WooCommerce API calls succeeded.

