import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DataCard } from './components/data-card/data-card';

interface ApiResponse
{
  message: string;
}

@Component
({
  imports: [ CommonModule, DataCard],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit
{
  title = 'Frontend';
  backendData: ApiResponse | null = null;
  errorMessage: string | null = null;

  constructor( private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void
  {
    this.http.get< ApiResponse>( '/api/data').subscribe
    ({
      next: ( response) =>
      {
        console.log( 'Backend response received:', response);
        this.backendData = response;

        this.cdr.detectChanges();
      },
      error: ( error) =>
      {
        console.error( 'HTTP Error:', error);
        this.errorMessage = 'Connection failed.';

        this.cdr.detectChanges();
      }
    });
  }
}
