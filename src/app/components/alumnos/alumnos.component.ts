import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  alumnos = [
    { nombre: 'Juan', apellido: 'Perez', edad: 20, curso: 'Diseño UX/UI', progreso: 23 },
    { nombre: 'María', apellido: 'Gomez', edad: 47, curso: 'Desarrollo Web', progreso: 12 },
    { nombre: 'Pedro', apellido: 'Rodriguez', edad: 22, curso: 'Ciencia de Datos', progreso: 47 },
    { nombre: 'Ana', apellido: 'Martinez', edad: 31, curso: 'Programación en Java', progreso: 77 },
    { nombre: 'Luis', apellido: 'Lopez', edad: 35, curso: 'Ciberseguridad', progreso: 35 },
    { nombre: 'Sofía', apellido: 'Gonzalez', edad: 44, curso: 'Diseño Gráfico', progreso: 5 },
    { nombre: 'Diego', apellido: 'Sanchez', edad: 23, curso: 'Marketing Digital', progreso: 7 },
    { nombre: 'Lucía', apellido: 'Diaz', edad: 29, curso: 'Machine Learning', progreso: 55 },
    { nombre: 'Carlos', apellido: 'Fernandez', edad: 33, curso: 'Desarrollo de Videojuegos', progreso: 72 },
    { nombre: 'Laura', apellido: 'Alvarez', edad: 42, curso: 'Inteligencia Artificial', progreso: 85 },
  ];
}
