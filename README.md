# ZipSlip Vulnerabil Machine


ZipSlip is a critical security vulnerability that can occur during file extraction processes from zip files. This vulnerability arises when an application mishandles the paths included within a zip file, enabling attackers to conduct directory traversal attacks.

This project serves as a demonstration and tool to assess and understand the ZipSlip vulnerability in javascript programming languages and express.js frameworks.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Docker](#docker)

## Overview

The ZipSlip Vulnerability Checker provides vulnerable code snippets in Node.js, PHP, and C#, showcasing how the vulnerability can be introduced during the file extraction process from a zip archive. It aims to raise awareness and educate developers on handling zip file extractions securely.

## Installation

To set up and run the project locally:

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the application: `npm start`

## Usage

The application provides examples of vulnerable code snippets in different programming languages that could lead to ZipSlip vulnerabilities. Users can view these code snippets to understand how the vulnerability is introduced and avoid similar mistakes in their applications.

## Docker

If you prefer Docker, you can build and run the project within a Docker container:

### Build the Docker Image

```bash
docker build -t zipslip-vulnerability .
```

### Run the Docker Container
```bash
docker run -p 3000:3000 zipslip-vulnerability
```
