# Nedumpullil Ayurveda

Angular-based website for Nedumpullil Ayurveda, featuring a modern, responsive design with integrated animations and optimized performance.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Tech Stack

- **Angular 21** - Frontend framework
- **Bootstrap 5** - CSS framework
- **Bootstrap Icons** - Icon library
- **AOS** - Animate On Scroll library
- **Swiper** - Touch slider/carousel
- **GLightbox** - Responsive lightbox
- **Nginx** - Production web server (Docker)

## Development server

To start a local development server, run:

```bash
npm install
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Docker Deployment

This project includes Docker support for production deployment with Nginx.

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your system
- [Docker Compose](https://docs.docker.com/compose/install/) (optional, but recommended)

### Docker Architecture

The Docker setup uses a **multi-stage build**:

1. **Build Stage**: Compiles the Angular application using Node.js
2. **Runtime Stage**: Serves the compiled app using Nginx (lightweight, ~50MB final image)

### Building the Docker Image

**Option 1: Using Docker directly**

```bash
# Build the image
docker build -t nedumpullil-ayurveda .

# Run the container
docker run -d -p 8080:80 --name nedumpullil-ayurveda nedumpullil-ayurveda

# Access the application at http://localhost:8080
```

**Option 2: Using Docker Compose (recommended)**

```bash
# Build and start the container
docker-compose up --build

# Run in detached mode (background)
docker-compose up -d --build

# Access the application at http://localhost:8080
```

### Docker Commands Reference

```bash
# Stop the container
docker-compose down

# View logs
docker-compose logs -f

# Rebuild the image (after code changes)
docker-compose up --build

# Remove stopped containers and images
docker system prune -a
```

### Production Deployment

For production deployment, you can push the image to a registry:

```bash
# Tag the image
docker tag nedumpullil-ayurveda your-registry/nedumpullil-ayurveda:latest

# Push to registry (Docker Hub, AWS ECR, etc.)
docker push your-registry/nedumpullil-ayurveda:latest
```

### Nginx Configuration

The `nginx.conf` file handles:
- **Angular routing**: All routes redirect to `index.html` for client-side routing
- **Gzip compression**: Reduces file sizes by 60-80%
- **Cache headers**: Optimizes static asset loading (1 year cache for images/CSS/JS)
- **Security headers**: Protects against XSS, clickjacking, and MIME-type sniffing attacks

### Docker Files

- **Dockerfile**: Multi-stage build configuration
- **nginx.conf**: Nginx web server configuration
- **.dockerignore**: Excludes unnecessary files from Docker build context
- **docker-compose.yml**: Simplified Docker orchestration

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Project Structure

```
nedumpullil-ayurveda/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Navigation header
│   │   │   └── footer/          # Footer with scroll-to-top
│   │   ├── pages/
│   │   │   ├── home/            # Homepage with hero carousel
│   │   │   ├── about/           # About page with video lightbox
│   │   │   ├── services/        # Services page
│   │   │   ├── testimonials/    # Testimonials page
│   │   │   ├── blog/            # Blog listing
│   │   │   ├── blog-details/    # Blog post details
│   │   │   └── contact/         # Contact page
│   │   ├── services/
│   │   │   ├── glightbox.ts     # Video lightbox service
│   │   │   └── swiper.ts        # Carousel service
│   │   ├── app.ts               # Root component
│   │   └── app.routes.ts        # Angular routing configuration
│   ├── styles.css               # Global styles
│   └── index.html               # HTML entry point
├── public/
│   └── assets/
│       └── img/                 # Images and media files
├── Dockerfile                   # Docker build configuration
├── nginx.conf                   # Nginx web server config
├── docker-compose.yml           # Docker Compose orchestration
├── .dockerignore                # Docker build exclusions
├── angular.json                 # Angular CLI configuration
└── package.json                 # NPM dependencies

```


## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
