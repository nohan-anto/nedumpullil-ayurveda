import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Testimonials } from './pages/testimonials/testimonials';
import { Blog } from './pages/blog/blog';
import { BlogDetails } from './pages/blog-details/blog-details';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'testimonials', component: Testimonials },
  { path: 'news-events', component: Blog },
  { path: 'blog-details', component: BlogDetails },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
