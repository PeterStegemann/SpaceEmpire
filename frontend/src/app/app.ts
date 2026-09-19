import { Component, OnInit } from '@angular/core';
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

  constructor( private http: HttpClient) {}

  ngOnInit(): void
  {
    this.http.get< ApiResponse>('/api/data').subscribe
    ({
      next: ( response) => this.backendData = response,
      error: ( error) => this.errorMessage = 'Connection failed: ' + error
    });
  }
}
