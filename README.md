# Playwright Boilerplate

## Overview

This repository contains a Playwright-based testing framework designed to streamline UI testing. The structure includes locators, actions, and assertions organized by page object model, providing a robust starting point for testing web applications.

## Features

- **Page Object Model:** Locators, actions, and assertions are encapsulated within page-specific classes, improving test maintenance and readability.
- **Extensible Tests:** The framework includes examples of login flows, adding items to cart, and navigation within an application, all extendable for broader testing scenarios.
- **Environment Configuration:** Utilizes environment variables and supports different browser configurations.

## Project Structure

- `pages/`: Contains the page-specific classes for locators, actions, and assertions.
- `tests/`: Test files that utilize the functionalities defined in the `pages/` directory.
- `src/`: Includes the setup and configuration files necessary for running the tests.
- `fixture/`: Custom extensions of the Playwright test functionalities, making test actions and assertions more accessible.

## Getting Started

1. **Installation**
   Ensure that you have Node.js installed, then run:
