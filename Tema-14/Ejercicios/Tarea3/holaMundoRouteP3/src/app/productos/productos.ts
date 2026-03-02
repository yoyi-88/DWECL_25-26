import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  // Creamos una lista de productos de ejemplo
  listaProductos = [
    { 
      nombre: 'Cleto Reyes 16oz', 
      descripcion: 'Guantes de boxeo de alta calidad para entrenamiento y competición.', 
      precio: 260.00, 
      imagen: 'cleto.webp'
    },
    { 
      nombre: 'Adidas Box Hog 4', 
      descripcion: 'Botas de boxeo ligeras y cómodas para un rendimiento óptimo.', 
      precio: 150.00, 
      imagen: 'adidas.webp' 
    },
    { 
      nombre: 'Vendas Venum 4.5m', 
      descripcion: 'Vendas de boxeo de alta calidad para protección y rendimiento.', 
      precio: 7.50, 
      imagen: 'venum.jpg' 
    },
    { 
      nombre: 'Casco Winning FG-2900', 
      descripcion: 'El casco de protección facial más ligero y seguro del mercado. Hecho en Japón.', 
      precio: 350.00, 
      imagen: 'wining.jpg' 
    },
    { 
      nombre: 'Saco Everlast 100lb', 
      descripcion: 'Saco de boxeo pesado de cuero sintético premium para entrenamiento de potencia.', 
      precio: 180.00, 
      imagen: 'saco-everlast.webp' 
    },
    { 
      nombre: 'Comba Rival RPM7', 
      descripcion: 'Comba de velocidad profesional con rodamientos de alta precisión para un giro suave.', 
      precio: 35.00, 
      imagen: 'comba.jpg' 
    },
    { 
      nombre: 'Bucal Shock Doctor', 
      descripcion: 'Protector bucal de gel con ajuste personalizado para máxima absorción de impactos.', 
      precio: 25.00, 
      imagen: 'bucal.webp' 
    },
    { 
      nombre: 'Manoplas Fairtex FMV9', 
      descripcion: 'Paos de precisión curvos para entrenadores. Ultraligeros y resistentes.', 
      precio: 110.00, 
      imagen: 'manoplas.jpg' 
    },
    { 
      nombre: 'Guantillas Title Gel', 
      descripcion: 'Guantes específicos para golpear el saco, con tecnología de gel para proteger tus manos.', 
      precio: 85.00, 
      imagen: 'guantillas.webp' 
    }
  ];
}
