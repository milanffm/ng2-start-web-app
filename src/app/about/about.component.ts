import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

import {environment} from '../../environments/environment';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    version: string = environment.version;

    results: string[];

    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient, private router: Router) {
    }

    goToPost(slug: string) {

        this.router.navigate(['/post/', slug]);

    }

    ngOnInit(): void {
        // Make the HTTP request:
        this.http.get('http://localhost:3000/api/post/list').subscribe(data => {
            // Read the result field from the JSON response.
            this.results = data['posts'];
            console.log(this.results);
        });
    }
}
