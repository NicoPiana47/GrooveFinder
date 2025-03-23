import { Routes } from '@angular/router';
import { DashboardComponent } from './groove-finder/pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'groove-finder',
        loadComponent: () => import("./groove-finder/layouts/groove-finder-layout/groove-finder-layout.component").then((c) => c.GrooveFinderLayoutComponent),
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
    },
    {
        path: '**',
        redirectTo: 'groove-finder'
    },
];
